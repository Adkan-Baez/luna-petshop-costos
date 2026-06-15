<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Luna Petshop — Gestión de Costos</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --primary: #6C63FF; --accent: #FF6584; --secondary: #43C6DB;
  --success: #2DD4A7; --warning: #FFB347;
  --bg: #F8F9FF; --surface: #FFFFFF;
  --text: #1A1A2E; --text-muted: #8B8FA8; --border: #E8E9F3;
  --grad-primary: linear-gradient(135deg, #6C63FF 0%, #43C6DB 100%);
  --grad-accent: linear-gradient(135deg, #FF6584 0%, #FFB347 100%);
  --grad-success: linear-gradient(135deg, #2DD4A7 0%, #43C6DB 100%);
  --shadow-sm: 0 2px 8px rgba(108,99,255,0.08);
  --shadow-md: 0 8px 24px rgba(108,99,255,0.12);
  --shadow-lg: 0 16px 48px rgba(108,99,255,0.16);
  --radius: 16px; --radius-sm: 10px; --radius-lg: 24px;
}
body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

header { background: var(--grad-primary); padding: 0 24px; position: sticky; top: 0; z-index: 100; box-shadow: 0 4px 20px rgba(108,99,255,0.3); }
.header-inner { max-width: 960px; margin: 0 auto; height: 64px; display: flex; align-items: center; gap: 12px; }
.logo-pill { background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); border-radius: 12px; padding: 8px 12px; display: flex; align-items: center; gap: 8px; }
.logo-pill span { font-size: 20px; }
.logo-pill strong { color: white; font-size: 15px; font-weight: 800; }
.header-badge { margin-left: auto; background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.9); border: 1px solid rgba(255,255,255,0.25); border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 500; }

nav { background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 24px; display: flex; gap: 4px; overflow-x: auto; scrollbar-width: none; }
nav::-webkit-scrollbar { display: none; }
.nav-btn { background: none; border: none; padding: 16px 18px; font-size: 13px; font-weight: 600; font-family: 'Inter', sans-serif; cursor: pointer; color: var(--text-muted); border-bottom: 3px solid transparent; white-space: nowrap; transition: all 0.2s; display: flex; align-items: center; gap: 7px; }
.nav-btn:hover { color: var(--primary); }
.nav-btn.active { color: var(--primary); border-bottom-color: var(--primary); }

main { max-width: 960px; margin: 0 auto; padding: 28px 24px; }
.screen { display: none; animation: fadeIn 0.3s ease; }
.screen.active { display: block; }
@keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
.page-title { margin-bottom: 24px; }
.page-title h2 { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
.page-title p { font-size: 14px; color: var(--text-muted); margin-top: 4px; }

.upload-zone { background: var(--surface); border: 2.5px dashed var(--border); border-radius: var(--radius-lg); padding: 56px 24px; text-align: center; cursor: pointer; transition: all 0.25s; }
.upload-zone:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.upload-icon-wrap { width: 80px; height: 80px; background: linear-gradient(135deg,rgba(108,99,255,0.1),rgba(67,198,219,0.1)); border-radius: 24px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 36px; }
.upload-zone h2 { font-size: 20px; font-weight: 800; margin-bottom: 8px; }
.upload-zone p { font-size: 14px; color: var(--text-muted); }
.upload-zone-tags { display: flex; gap: 8px; justify-content: center; margin-top: 16px; }
.tag { background: var(--bg); border: 1px solid var(--border); border-radius: 20px; padding: 4px 12px; font-size: 12px; color: var(--text-muted); font-weight: 500; }

.preview-card { display: none; background: var(--surface); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); margin-bottom: 16px; }
.preview-card img { width: 100%; max-height: 260px; object-fit: cover; object-position: top; }
.preview-actions { padding: 20px; display: flex; gap: 12px; align-items: center; border-top: 1px solid var(--border); }
.preview-filename { flex: 1; font-size: 13px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.btn { border: none; cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; border-radius: var(--radius-sm); padding: 13px 24px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; }
.btn-grad { background: var(--grad-primary); color: white; box-shadow: 0 4px 14px rgba(108,99,255,0.35); }
.btn-grad:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(108,99,255,0.45); }
.btn-ghost { background: var(--bg); color: var(--text-muted); border: 1.5px solid var(--border); }
.btn-ghost:hover { background: var(--border); color: var(--text); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; }

.processing-card { display: none; background: var(--surface); border-radius: var(--radius-lg); padding: 48px 24px; text-align: center; box-shadow: var(--shadow-md); margin-bottom: 16px; }
.processing-anim { width: 72px; height: 72px; border-radius: 50%; background: var(--grad-primary); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; animation: pulse 1.5s ease-in-out infinite; }
@keyframes pulse { 0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(108,99,255,0.4);}50%{transform:scale(1.05);box-shadow:0 0 0 16px rgba(108,99,255,0);} }
.processing-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.processing-card p { font-size: 14px; color: var(--text-muted); }
.processing-steps { display: flex; gap: 8px; justify-content: center; margin-top: 24px; flex-wrap: wrap; }
.step-pill { background: var(--bg); border: 1.5px solid var(--border); border-radius: 20px; padding: 6px 14px; font-size: 12px; font-weight: 600; color: var(--text-muted); transition: all 0.4s; }
.step-pill.active { background: linear-gradient(135deg,rgba(108,99,255,0.1),rgba(67,198,219,0.1)); border-color: var(--primary); color: var(--primary); }

.error-card { display: none; background: var(--surface); border-radius: var(--radius-lg); padding: 32px 24px; text-align: center; box-shadow: var(--shadow-md); margin-bottom: 16px; border: 2px solid rgba(255,101,132,0.2); }
.error-card .error-icon { font-size: 40px; margin-bottom: 12px; }
.error-card h3 { font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 8px; }
.error-card p { font-size: 13px; color: var(--text-muted); margin-bottom: 16px; }

.review-panel { display: none; background: var(--surface); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); margin-bottom: 16px; }
.review-header { background: var(--grad-primary); padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.review-header h3 { color: white; font-size: 17px; font-weight: 800; }
.review-header p { color: rgba(255,255,255,0.75); font-size: 13px; margin-top: 2px; }
.glass-badge { background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 6px 14px; font-size: 13px; font-weight: 700; color: white; }
.factura-meta { display: grid; grid-template-columns: repeat(auto-fit,minmax(150px,1fr)); gap: 12px; padding: 20px 24px; background: linear-gradient(135deg,rgba(108,99,255,0.03),rgba(67,198,219,0.03)); border-bottom: 1px solid var(--border); }
.meta-label { font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.meta-value { font-size: 14px; font-weight: 700; }
.table-wrap { overflow-x: auto; padding: 0 24px 8px; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; }
th { padding: 10px 12px; text-align: left; font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; border-bottom: 2px solid var(--border); }
td { padding: 10px 12px; border-bottom: 1px solid var(--border); font-size: 13px; vertical-align: middle; }
tr:last-child td { border-bottom: none; }
tr:hover td { background: rgba(108,99,255,0.02); }
.editable-input { background: var(--bg); border: 1.5px solid transparent; border-radius: 8px; padding: 6px 10px; font-size: 13px; font-family: 'Inter',sans-serif; font-weight: 500; width: 100%; transition: all 0.2s; color: var(--text); }
.editable-input:focus { outline: none; border-color: var(--primary); background: white; box-shadow: 0 0 0 3px rgba(108,99,255,0.1); }
.costo-chip { background: linear-gradient(135deg,rgba(108,99,255,0.1),rgba(67,198,219,0.1)); border: 1.5px solid rgba(108,99,255,0.2); border-radius: 8px; padding: 6px 12px; font-weight: 800; font-size: 14px; color: var(--primary); white-space: nowrap; display: inline-block; }
.cambio-badge { display: inline-flex; align-items: center; gap: 4px; border-radius: 6px; padding: 3px 8px; font-size: 11px; font-weight: 600; margin-top: 4px; }
.cambio-badge.sube { background: rgba(255,101,132,0.1); border: 1px solid rgba(255,101,132,0.3); color: #D4194D; }
.cambio-badge.baja { background: rgba(45,212,167,0.1); border: 1px solid rgba(45,212,167,0.3); color: #1A9E7A; }
.review-actions { padding: 20px 24px; display: flex; gap: 12px; border-top: 1px solid var(--border); background: var(--bg); flex-wrap: wrap; }

.stats-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 28px; }
.stat-card { background: var(--surface); border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow-sm); }
.stat-icon { font-size: 24px; margin-bottom: 12px; display: block; }
.stat-value { font-size: 28px; font-weight: 900; letter-spacing: -1px; }
.stat-label { font-size: 12px; color: var(--text-muted); font-weight: 600; margin-top: 2px; }

.search-wrap { position: relative; margin-bottom: 20px; }
.search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-size: 18px; pointer-events: none; }
.search-input { width: 100%; padding: 15px 16px 15px 48px; border: 2px solid var(--border); border-radius: var(--radius); font-size: 15px; font-family: 'Inter',sans-serif; font-weight: 500; background: var(--surface); color: var(--text); transition: all 0.2s; box-shadow: var(--shadow-sm); }
.search-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px rgba(108,99,255,0.1); }
.search-input::placeholder { color: var(--text-muted); }

.product-list { display: flex; flex-direction: column; gap: 10px; }
.product-card { background: var(--surface); border-radius: var(--radius); padding: 16px 20px; display: flex; align-items: center; gap: 16px; box-shadow: var(--shadow-sm); border: 1.5px solid transparent; transition: all 0.2s; }
.product-card:hover { border-color: var(--primary); transform: translateX(4px); box-shadow: var(--shadow-md); }
.product-avatar { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.av-purple { background: linear-gradient(135deg,rgba(108,99,255,0.15),rgba(67,198,219,0.15)); }
.av-pink { background: linear-gradient(135deg,rgba(255,101,132,0.15),rgba(255,179,71,0.15)); }
.av-teal { background: linear-gradient(135deg,rgba(45,212,167,0.15),rgba(67,198,219,0.15)); }
.product-info { flex: 1; min-width: 0; }
.product-name { font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.product-meta { font-size: 12px; color: var(--text-muted); margin-top: 2px; font-weight: 500; }
.product-price { font-size: 18px; font-weight: 900; background: var(--grad-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; white-space: nowrap; }

.proveedor-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(180px,1fr)); gap: 14px; margin-bottom: 24px; }
.proveedor-card { background: var(--surface); border-radius: var(--radius); padding: 20px; cursor: pointer; border: 2px solid transparent; box-shadow: var(--shadow-sm); transition: all 0.2s; position: relative; overflow: hidden; }
.proveedor-card::before { content:''; position:absolute; top:0;left:0;right:0; height:3px; }
.proveedor-card:nth-child(1)::before{background:var(--grad-primary);}
.proveedor-card:nth-child(2)::before{background:var(--grad-accent);}
.proveedor-card:nth-child(3)::before{background:var(--grad-success);}
.proveedor-card:nth-child(4)::before{background:linear-gradient(135deg,#FFB347,#FF6584);}
.proveedor-card:nth-child(5)::before{background:linear-gradient(135deg,#43C6DB,#6C63FF);}
.proveedor-card:nth-child(n+6)::before{background:var(--grad-primary);}
.proveedor-card:hover { border-color: var(--primary); transform: translateY(-3px); box-shadow: var(--shadow-md); }
.proveedor-icon { font-size: 28px; margin-bottom: 12px; }
.proveedor-name { font-size: 14px; font-weight: 800; margin-bottom: 4px; }
.proveedor-count { font-size: 12px; font-weight: 600; color: var(--text-muted); }

.lista-card { display: none; background: var(--surface); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); }
.lista-card-header { background: var(--grad-primary); padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.lista-card-header h3 { color: white; font-size: 16px; font-weight: 800; }
.lista-card-header p { color: rgba(255,255,255,0.75); font-size: 13px; }
.lista-table-wrap { padding: 20px 24px; overflow-x: auto; }
.lista-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.lista-table th { padding: 10px 12px; text-align: left; font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid var(--border); }
.lista-table td { padding: 10px 12px; border-bottom: 1px solid var(--border); }
.lista-table tr:nth-child(even) td { background: rgba(108,99,255,0.02); }
.lista-table .price-col { font-weight: 800; color: var(--primary); text-align: right; }

.toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--text); color: white; padding: 14px 24px; border-radius: var(--radius); font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 10px; box-shadow: var(--shadow-lg); transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); z-index: 1000; white-space: nowrap; }
.toast.show { transform: translateX(-50%) translateY(0); }

@media (max-width:600px) {
  main{padding:20px 16px;}
  .stats-row{grid-template-columns:1fr;gap:10px;}
  .review-actions{flex-direction:column;}
  .proveedor-grid{grid-template-columns:repeat(2,1fr);}
  .page-title h2{font-size:20px;}
}
@media print {
  header,nav,.review-actions,.proveedor-grid,.page-title,.search-wrap,.stats-row{display:none!important;}
  .lista-card{display:block!important;box-shadow:none;}
  body{background:white;}
}
</style>
</head>
<body>

<header>
  <div class="header-inner">
    <div class="logo-pill"><span>🐾</span><strong>Luna Petshop</strong></div>
    <span class="header-badge">Gestión de Costos v2.0</span>
  </div>
</header>

<nav>
  <button class="nav-btn active" onclick="showScreen('ingresar',this)"><span>📷</span> Ingresar Factura</button>
  <button class="nav-btn" onclick="showScreen('consultar',this)"><span>🔍</span> Consultar</button>
  <button class="nav-btn" onclick="showScreen('listas',this)"><span>🖨️</span> Listas</button>
</nav>

<main>

  <!-- PANTALLA 1: INGRESAR FACTURA -->
  <div class="screen active" id="screen-ingresar">
    <div class="page-title">
      <h2>Ingresar Factura</h2>
      <p>Sube una foto y la IA extrae los datos automáticamente</p>
    </div>

    <div class="upload-zone" id="upload-zone" onclick="document.getElementById('file-input').click()">
      <input type="file" id="file-input" accept="image/*" capture="environment" style="display:none" onchange="handleFile(event)">
      <div class="upload-icon-wrap">📄</div>
      <h2>Toca para subir una factura</h2>
      <p>Toma una foto o selecciona desde tu galería</p>
      <div class="upload-zone-tags">
        <span class="tag">📱 Cámara</span>
        <span class="tag">🖼️ Galería</span>
        <span class="tag">💻 Archivo</span>
      </div>
    </div>

    <div class="preview-card" id="preview-card">
      <img id="preview-img" src="" alt="">
      <div class="preview-actions">
        <span class="preview-filename" id="preview-filename"></span>
        <button class="btn btn-ghost" onclick="resetUpload()">Cambiar</button>
        <button class="btn btn-grad" id="btn-extraer" onclick="startProcessing()">✨ Extraer con IA</button>
      </div>
    </div>

    <div class="processing-card" id="processing-card">
      <div class="processing-anim">🤖</div>
      <h3>Analizando factura…</h3>
      <p>Claude está leyendo los datos del documento</p>
      <div class="processing-steps">
        <span class="step-pill" id="step1">📸 Leyendo imagen</span>
        <span class="step-pill" id="step2">🔍 Identificando productos</span>
        <span class="step-pill" id="step3">🧮 Calculando costos</span>
      </div>
    </div>

    <div class="error-card" id="error-card">
      <div class="error-icon">⚠️</div>
      <h3>No se pudo extraer la factura</h3>
      <p id="error-msg">Intenta con una foto más clara o con mejor iluminación.</p>
      <button class="btn btn-ghost" onclick="resetUpload()">Intentar de nuevo</button>
    </div>

    <div class="review-panel" id="review-panel">
      <div class="review-header">
        <div>
          <h3>Revisa y corrige los datos</h3>
          <p>Todos los campos son editables antes de confirmar</p>
        </div>
        <span class="glass-badge" id="badge-proveedor">—</span>
      </div>
      <div class="factura-meta">
        <div><div class="meta-label">Proveedor</div><div class="meta-value" id="info-proveedor">—</div></div>
        <div><div class="meta-label">RUT</div><div class="meta-value" id="info-rut">—</div></div>
        <div><div class="meta-label">N° Factura</div><div class="meta-value" id="info-folio">—</div></div>
        <div><div class="meta-label">Fecha</div><div class="meta-value" id="info-fecha">—</div></div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Código</th><th>Producto</th><th>Cant.</th>
              <th>Total Línea</th><th>Costo Neto Unit.</th>
            </tr>
          </thead>
          <tbody id="review-tbody"></tbody>
        </table>
      </div>
      <div class="review-actions">
        <button class="btn btn-grad" onclick="confirmar()">✅ Confirmar e integrar</button>
        <button class="btn btn-ghost" onclick="resetUpload()">Cancelar</button>
      </div>
    </div>
  </div>

  <!-- PANTALLA 2: CONSULTAR -->
  <div class="screen" id="screen-consultar">
    <div class="page-title"><h2>Consultar Productos</h2><p>Busca por nombre o código</p></div>
    <div class="stats-row">
      <div class="stat-card"><span class="stat-icon">📦</span><div class="stat-value">372</div><div class="stat-label">Productos totales</div></div>
      <div class="stat-card"><span class="stat-icon">🏭</span><div class="stat-value">28</div><div class="stat-label">Proveedores</div></div>
      <div class="stat-card"><span class="stat-icon">📅</span><div class="stat-value">Hoy</div><div class="stat-label">Última actualización</div></div>
    </div>
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input class="search-input" type="text" placeholder="Buscar producto…">
    </div>
    <div class="product-list">
      <div class="product-card"><div class="product-avatar av-purple">🐱</div><div class="product-info"><div class="product-name">KITTEN 1,5KG</div><div class="product-meta">Royal Canin · 5680015 · 10/06/26</div></div><div class="product-price">$11.320</div></div>
      <div class="product-card"><div class="product-avatar av-teal">🐶</div><div class="product-info"><div class="product-name">GRAIN ZERO ADULT 7KG</div><div class="product-meta">Nutrial · 1001000109449 · 04/06/26</div></div><div class="product-price">$26.270</div></div>
      <div class="product-card"><div class="product-avatar av-pink">🐾</div><div class="product-info"><div class="product-name">BOKATO GOLD SUPER PREMIUM 20KG</div><div class="product-meta">Bokato/Nutripet · AT2004 · 08/06/26</div></div><div class="product-price">$34.611</div></div>
    </div>
  </div>

  <!-- PANTALLA 3: LISTAS -->
  <div class="screen" id="screen-listas">
    <div class="page-title"><h2>Listas por Proveedor</h2><p>Selecciona un proveedor para generar su lista</p></div>
    <div class="proveedor-grid">
      <div class="proveedor-card" onclick="seleccionarProveedor('Royal Canin',35,'🏆')"><div class="proveedor-icon">🏆</div><div class="proveedor-name">Royal Canin</div><div class="proveedor-count">35 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Nestlé Chile',75,'🥣')"><div class="proveedor-icon">🥣</div><div class="proveedor-name">Nestlé Chile</div><div class="proveedor-count">75 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Agrovet',27,'💊')"><div class="proveedor-icon">💊</div><div class="proveedor-name">Agrovet</div><div class="proveedor-count">27 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Bokato/Nutripet',4,'🐕')"><div class="proveedor-icon">🐕</div><div class="proveedor-name">Bokato/Nutripet</div><div class="proveedor-count">4 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Pet Warehouse',15,'🏪')"><div class="proveedor-icon">🏪</div><div class="proveedor-name">Pet Warehouse</div><div class="proveedor-count">15 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Nutrial',5,'🌾')"><div class="proveedor-icon">🌾</div><div class="proveedor-name">Nutrial</div><div class="proveedor-count">5 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Marben Pets',4,'🧹')"><div class="proveedor-icon">🧹</div><div class="proveedor-name">Marben Pets</div><div class="proveedor-count">4 productos</div></div>
      <div class="proveedor-card" onclick="seleccionarProveedor('Comercial VYA',12,'🐾')"><div class="proveedor-icon">🐾</div><div class="proveedor-name">Comercial VYA</div><div class="proveedor-count">12 productos</div></div>
    </div>
    <div class="lista-card" id="lista-card">
      <div class="lista-card-header">
        <div><h3 id="lista-title">—</h3><p id="lista-subtitle">—</p></div>
        <button class="btn" style="background:rgba(255,255,255,0.2);color:white;border:1px solid rgba(255,255,255,0.3);" onclick="window.print()">🖨️ Imprimir</button>
      </div>
      <div class="lista-table-wrap">
        <table class="lista-table">
          <thead><tr><th>#</th><th>Código</th><th>Producto</th><th style="text-align:right">Costo Neto</th></tr></thead>
          <tbody id="lista-tbody"></tbody>
        </table>
      </div>
    </div>
  </div>

</main>

<div class="toast" id="toast"></div>

<script>
// ═══════════════════════════════════════
// CONFIGURACIÓN — cambia esto por tu URL de Vercel
// ═══════════════════════════════════════
const API_URL = '/api/extraer';  // Vercel resuelve esto automáticamente

// ═══════════════════════════════════════
// ESTADO
// ═══════════════════════════════════════
let currentImageBase64 = null;
let currentImageType = null;
let extractedData = null;

// Costos anteriores (en Fase 3 vendrán de Google Drive)
const datosAnteriores = {
  '5680015': 10500, 'R604767': 44084,
  'AT2004': 30000, '12602836': 15316,
};

// ═══════════════════════════════════════
// NAVEGACIÓN
// ═══════════════════════════════════════
function showScreen(name, btn) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  btn.classList.add('active');
}

function showToast(msg, duration = 3500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ═══════════════════════════════════════
// UPLOAD
// ═══════════════════════════════════════
function handleFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  currentImageType = file.type || 'image/jpeg';
  const url = URL.createObjectURL(file);
  document.getElementById('preview-img').src = url;
  document.getElementById('preview-filename').textContent = file.name;
  document.getElementById('upload-zone').style.display = 'none';
  document.getElementById('preview-card').style.display = 'block';
  const reader = new FileReader();
  reader.onload = (ev) => { currentImageBase64 = ev.target.result.split(',')[1]; };
  reader.readAsDataURL(file);
}

function resetUpload() {
  document.getElementById('upload-zone').style.display = 'block';
  ['preview-card','processing-card','error-card','review-panel'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById('file-input').value = '';
  currentImageBase64 = null;
  extractedData = null;
  ['step1','step2','step3'].forEach(s => document.getElementById(s).classList.remove('active'));
}

// ═══════════════════════════════════════
// EXTRACCIÓN CON IA — llama al backend en Vercel
// ═══════════════════════════════════════
async function startProcessing() {
  if (!currentImageBase64) { showToast('⚠️ Espera que la imagen cargue'); return; }

  document.getElementById('preview-card').style.display = 'none';
  document.getElementById('processing-card').style.display = 'block';
  document.getElementById('btn-extraer').disabled = true;
  animateSteps();

  try {
    // Llamada al BACKEND en Vercel (no directamente a Anthropic)
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageBase64: currentImageBase64,
        imageType: currentImageType
      })
    });

    const result = await response.json();

    if (!result.success) throw new Error(result.error || 'Error desconocido');

    extractedData = result.data;
    document.getElementById('processing-card').style.display = 'none';
    renderReviewTable(extractedData);

  } catch (err) {
    console.error(err);
    document.getElementById('processing-card').style.display = 'none';
    document.getElementById('error-msg').textContent = err.message;
    document.getElementById('error-card').style.display = 'block';
  }

  document.getElementById('btn-extraer').disabled = false;
}

function animateSteps() {
  ['step1','step2','step3'].forEach(s => document.getElementById(s).classList.remove('active'));
  document.getElementById('step1').classList.add('active');
  setTimeout(() => { document.getElementById('step1').classList.remove('active'); document.getElementById('step2').classList.add('active'); }, 900);
  setTimeout(() => { document.getElementById('step2').classList.remove('active'); document.getElementById('step3').classList.add('active'); }, 1800);
}

// ═══════════════════════════════════════
// TABLA DE REVISIÓN
// ═══════════════════════════════════════
function renderReviewTable(data) {
  document.getElementById('info-proveedor').textContent = data.proveedor || '—';
  document.getElementById('info-rut').textContent = data.rut || '—';
  document.getElementById('info-folio').textContent = `F.${data.folio}` || '—';
  document.getElementById('info-fecha').textContent = data.fecha || '—';
  document.getElementById('badge-proveedor').textContent = data.proveedor || '—';

  const tbody = document.getElementById('review-tbody');
  tbody.innerHTML = '';

  (data.productos || []).forEach((p, i) => {
    const costo = p.costo_neto || Math.round(p.total_linea / p.cantidad);
    const anterior = datosAnteriores[p.codigo];
    let cambioHTML = '';
    if (anterior) {
      const diff = costo - anterior;
      const pct = ((diff / anterior) * 100).toFixed(1);
      const cls = diff > 0 ? 'sube' : 'baja';
      const arrow = diff > 0 ? '↑' : '↓';
      cambioHTML = `<div class="cambio-badge ${cls}">${arrow} Ant: $${anterior.toLocaleString('es-CL')} · ${diff>0?'+':''}${pct}%</div>`;
    }
    tbody.innerHTML += `
      <tr>
        <td><input class="editable-input" value="${p.codigo||''}" style="width:110px"></td>
        <td><input class="editable-input" value="${p.nombre||''}" style="min-width:200px"></td>
        <td><input class="editable-input" value="${p.cantidad}" type="number" style="width:65px" onchange="recalcCosto(${i},this)"></td>
        <td><input class="editable-input" value="${p.total_linea}" type="number" style="width:110px" onchange="recalcCosto(${i},this)"></td>
        <td><div class="costo-chip" id="costo-${i}">$${costo.toLocaleString('es-CL')}</div>${cambioHTML}</td>
      </tr>`;
  });

  document.getElementById('review-panel').style.display = 'block';
}

function recalcCosto(i, inputEl) {
  const row = inputEl.closest('tr');
  const cant = parseFloat(row.querySelectorAll('input')[2].value) || 1;
  const total = parseFloat(row.querySelectorAll('input')[3].value) || 0;
  document.getElementById(`costo-${i}`).textContent = `$${Math.round(total/cant).toLocaleString('es-CL')}`;
}

function confirmar() {
  showToast('✅ Datos listos — integración a Google Drive en Fase 3');
  setTimeout(resetUpload, 600);
}

// ═══════════════════════════════════════
// LISTAS
// ═══════════════════════════════════════
function seleccionarProveedor(nombre, count, icon) {
  document.getElementById('lista-title').textContent = `${icon} ${nombre}`;
  document.getElementById('lista-subtitle').textContent = `${count} productos · Costos netos sin IVA`;
  document.getElementById('lista-tbody').innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);padding:24px">Conectando con Google Drive en Fase 3…</td></tr>`;
  document.getElementById('lista-card').style.display = 'block';
  document.getElementById('lista-card').scrollIntoView({behavior:'smooth',block:'nearest'});
  showToast(`📋 Lista de ${nombre} seleccionada`);
}
</script>
</body>
</html>
