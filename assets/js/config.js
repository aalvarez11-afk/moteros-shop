/**
 * Moteros Shop Cartago — Configuración
 * ============================================================
 *  ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR.
 *  Cambia los valores marcados con  <-- CAMBIAR
 *
 *  Demo armada sobre el motor de la tienda FabJak: catálogo,
 *  carrito y pedido que se cierra por WhatsApp.
 * ============================================================
 */

const CONFIG = {

  // ─── 1. DATOS DE LA TIENDA ──────────────────────────────────
  tienda: {
    nombre: 'Moteros Shop',
    eslogan: 'Tienda oficial Cartago 🏁',
    descripcion: 'Cascos, trajes, botas y accesorios para motero. Arma tu pedido y ciérralo por WhatsApp. Envíos a todo Colombia.',
    ciudad: 'Cartago, Valle',
    direccion: 'Cr 2 # 24F-39, local 7A, Edificio Cascabeles',
    instagram: 'moterosshopcartago',
  },

  // ─── 2. WHATSAPP ────────────────────────────────────────────
  whatsapp: {
    // Formato: 57 + los 10 dígitos del celular. SIN +, SIN espacios, SIN guiones.
    // Demo: línea de prueba de Andrés, conectada al agente de MergeOn.
    numero: '573113140553',  // <-- línea de demo conectada a MergeOn (#312). La de la tienda es 573104019981

    // Mensaje del botón flotante (consultas generales, sin pedido)
    saludoGeneral: '¡Hola Moteros Shop! Vi su tienda y quiero hacer una consulta.',
  },

  // ─── 3. CONEXIÓN CON LA HOJA DE CÁLCULO ─────────────────────
  //
  //  Vacío a propósito: la demo lee los productos de datos/productos.json.
  //  Para pasar a inventario real se pega aquí el ID de una hoja de Google
  //  con las pestañas Productos e Inventario (mismo formato que FabJak).
  //
  hoja: {
    idHoja: '',
    urlProductos:  '',
    urlInventario: '',
    pestanaProductos:  'Productos',
    pestanaInventario: 'Inventario',
    cacheMinutos: 5,
  },

  // ─── 4. VENTAS Y ENVÍOS ─────────────────────────────────────
  ventas: {
    moneda: 'COP',

    // Formas de pago que aparecen en el formulario del pedido.
    formasDePago: [
      'Contraentrega',
      'Sistecrédito (a cuotas)',
      'Addi (a cuotas)',
      'Nequi',
      'Transferencia bancaria',
      'Pago en la tienda física',
    ],

    // Texto que se muestra bajo el total en el carrito.
    notaEnvio: 'Envíos a todo Colombia. El costo se acuerda por WhatsApp según tu ciudad.',
  },

  // ─── 5. APARIENCIA ──────────────────────────────────────────
  apariencia: {
    // Rojo del emblema y rojo de texto (más claro, para que se lea sobre negro)
    colorPrincipal: '#c81e1e',
    colorAcento:    '#f04438',

    imagenCompartir: 'https://moterosshop.netlify.app/assets/img/og-moteros.png',
  },

  // ─── 6. AVANZADO ────────────────────────────────────────────
  avanzado: {
    respaldo: 'datos/productos.json',
    productosPorPagina: 12,
  },
};

// No modificar de aquí hacia abajo
window.CONFIG = CONFIG;
