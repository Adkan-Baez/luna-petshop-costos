// ═══════════════════════════════════════════════════════
// LUNA PETSHOP — Google Sheets Backend
// Lee y escribe en la Base de Datos Maestra en Google Sheets
// ═══════════════════════════════════════════════════════

export default async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const SHEET_ID = process.env.google_sheet_id;
  const CLIENT_EMAIL = process.env.google_service_account_email;
  const PRIVATE_KEY = (process.env.google_private_key || '').replace(/\\n/g, '\n');

  try {
    // ── Obtener token de acceso Google ──
    const token = await getGoogleToken(CLIENT_EMAIL, PRIVATE_KEY);

    // ── GET: leer productos ──
    if (req.method === 'GET') {
      const { proveedor } = req.query;
      const data = await readSheet(token, SHEET_ID);
      const productos = parseProducts(data);

      if (proveedor) {
        const filtrados = productos.filter(p =>
          p.proveedor.toLowerCase().includes(proveedor.toLowerCase())
        );
        return res.status(200).json({ success: true, productos: filtrados });
      }

      return res.status(200).json({ success: true, productos });
    }

    // ── POST: integrar productos de una factura ──
    if (req.method === 'POST') {
      const { factura } = req.body;
      if (!factura) return res.status(400).json({ error: 'Faltan datos de factura' });

      // Leer estado actual
      const data = await readSheet(token, SHEET_ID);
      const productos = parseProducts(data);

      const cambios = [];
      const nuevos = [];

      for (const prod of factura.productos) {
        const existente = productos.find(p => p.codigo === prod.codigo);

        if (existente) {
          // Actualizar precio si es más reciente
          cambios.push({
            ...existente,
            fecha: factura.fecha,
            folio: `F.${factura.folio}`,
            cantidad: prod.cantidad,
            costoAnterior: existente.costo,
            costo: prod.costo_neto,
          });
        } else {
          // Producto nuevo
          nuevos.push({
            proveedor: factura.proveedor,
            codigo: prod.codigo,
            nombre: prod.nombre,
            fecha: factura.fecha,
            folio: `F.${factura.folio}`,
            cantidad: prod.cantidad,
            costo: prod.costo_neto,
          });
        }
      }

      // Escribir cambios en el Sheet
      await updateSheet(token, SHEET_ID, productos, cambios, nuevos);

      return res.status(200).json({
        success: true,
        actualizados: cambios.length,
        agregados: nuevos.length,
        cambios: cambios.map(c => ({
          nombre: c.nombre,
          costoAnterior: c.costoAnterior,
          costoNuevo: c.costo,
          diferencia: c.costo - c.costoAnterior,
          porcentaje: (((c.costo - c.costoAnterior) / c.costoAnterior) * 100).toFixed(1)
        }))
      });
    }

    return res.status(405).json({ error: 'Método no permitido' });

  } catch (error) {
    console.error('Sheets error:', error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}

// ═══════════════════════════════════════
// AUTENTICACIÓN GOOGLE
// ═══════════════════════════════════════
async function getGoogleToken(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);

  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encode = obj => btoa(JSON.stringify(obj))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

  const headerB64 = encode(header);
  const payloadB64 = encode(payload);
  const toSign = `${headerB64}.${payloadB64}`;

  // Importar clave privada
  const keyData = privateKey
    .replace('-----BEGIN RSA PRIVATE KEY-----', '')
    .replace('-----END RSA PRIVATE KEY-----', '')
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');

  const binaryKey = Uint8Array.from(atob(keyData), c => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false, ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5', cryptoKey,
    new TextEncoder().encode(toSign)
  );

  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

  const jwt = `${toSign}.${sigB64}`;

  // Intercambiar JWT por access token
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) throw new Error('No se pudo autenticar con Google: ' + JSON.stringify(tokenData));
  return tokenData.access_token;
}

// ═══════════════════════════════════════
// LEER SHEET
// ═══════════════════════════════════════
async function readSheet(token, sheetId) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Base%20de%20Datos!A5:H500`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  if (!data.values) throw new Error('No se pudo leer el Sheet: ' + JSON.stringify(data));
  return data.values;
}

// ═══════════════════════════════════════
// PARSEAR PRODUCTOS
// ═══════════════════════════════════════
function parseProducts(rows) {
  return rows
    .filter(r => r[1] && r[2] && r[3])
    .map((r, i) => ({
      rowIndex: i + 5, // fila real en el sheet (empieza en fila 5)
      numero: r[0] || '',
      proveedor: r[1] || '',
      codigo: String(r[2] || '').trim(),
      nombre: r[3] || '',
      fecha: r[4] || '',
      folio: r[5] || '',
      cantidad: parseInt(r[6]) || 0,
      costo: parseInt(String(r[7] || '0').replace(/\$|,|\./g, '')) || 0,
    }));
}

// ═══════════════════════════════════════
// ACTUALIZAR SHEET
// ═══════════════════════════════════════
async function updateSheet(token, sheetId, todosLosProductos, cambios, nuevos) {
  const baseUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values`;
  const requests = [];

  // Actualizar filas existentes
  for (const cambio of cambios) {
    const range = `Base de Datos!E${cambio.rowIndex}:H${cambio.rowIndex}`;
    requests.push(
      fetch(`${baseUrl}/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          range,
          majorDimension: 'ROWS',
          values: [[cambio.fecha, cambio.folio, cambio.cantidad, cambio.costo]]
        })
      })
    );
  }

  // Agregar productos nuevos al final
  if (nuevos.length > 0) {
    const ultimoNumero = Math.max(...todosLosProductos.map(p => parseInt(p.numero) || 0));
    const filas = nuevos.map((p, i) => [
      ultimoNumero + i + 1,
      p.proveedor,
      p.codigo,
      p.nombre,
      p.fecha,
      p.folio,
      p.cantidad,
      p.costo
    ]);

    requests.push(
      fetch(`${baseUrl}/Base%20de%20Datos!A:H:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          majorDimension: 'ROWS',
          values: filas
        })
      })
    );
  }

  await Promise.all(requests);
}
