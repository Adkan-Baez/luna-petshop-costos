// ═══════════════════════════════════════════════════════
// LUNA PETSHOP — Backend API
// Este archivo corre en Vercel (servidor), no en el navegador.
// Recibe la imagen, llama a Claude, devuelve el JSON.
// ═══════════════════════════════════════════════════════

export default async function handler(req, res) {

  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Headers CORS — permiten que tu app HTML llame a este servidor
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { imageBase64, imageType } = req.body;

    if (!imageBase64 || !imageType) {
      return res.status(400).json({ error: 'Faltan datos de la imagen' });
    }

    // ── PROMPT DEL SISTEMA ──
    // Aquí viven todas las reglas de negocio de Luna Petshop
    const systemPrompt = `Eres un asistente especializado en extraer datos de facturas chilenas de proveedores de alimentos y accesorios para mascotas.

REGLAS CRÍTICAS:
1. El costo neto unitario = total_linea / cantidad. NUNCA uses el precio unitario listado directamente si hay descuentos aplicados.
2. Los ítems de tipo "Delivery", "Despacho", "Flete" o con precio = 0 deben ser IGNORADOS completamente.
3. Las bonificaciones (BON) son descuentos — no las incluyas como productos separados. Si el valor neto es 0, registra costo_neto = 0.
4. Elimina la palabra "Promo" o "PROMO" de los nombres de productos.
5. Si hay descuentos en cascada (DSC BASE + DSC AC + DSC PROMO), el total_linea ya los refleja — úsalo directamente.
6. Todos los valores son en pesos chilenos (CLP), sin IVA.
7. Los números no deben tener puntos ni comas — solo dígitos enteros.
8. Si un producto aparece repetido, inclúyelo solo una vez con los datos más recientes.

RESPONDE ÚNICAMENTE con un JSON válido. Sin texto adicional, sin bloques markdown, sin explicaciones.

Formato exacto:
{
  "proveedor": "Nombre del proveedor tal como aparece en la factura",
  "rut": "XX.XXX.XXX-X",
  "folio": "número de folio sin letras",
  "fecha": "DD/MM/AAAA",
  "productos": [
    {
      "codigo": "código del producto",
      "nombre": "NOMBRE EN MAYÚSCULAS SIN LA PALABRA PROMO",
      "cantidad": número entero,
      "total_linea": número entero sin puntos ni comas,
      "costo_neto": número entero (total_linea dividido por cantidad, redondeado al entero más cercano)
    }
  ]
}`;

    // ── LLAMADA A CLAUDE API ──
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,  // guardada de forma segura en Vercel
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: imageType,
                data: imageBase64
              }
            },
            {
              type: 'text',
              text: 'Extrae todos los datos de esta factura y devuelve el JSON.'
            }
          ]
        }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Claude API error ${response.status}: ${err}`);
    }

    const claudeData = await response.json();
    const rawText = claudeData.content.find(b => b.type === 'text')?.text || '';

    // Limpiar y parsear el JSON
    const clean = rawText.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    // Devolver resultado al frontend
    return res.status(200).json({ success: true, data: parsed });

  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
