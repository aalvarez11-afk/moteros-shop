# Moteros Shop — tienda web (demo)

Catálogo de cascos, trajes, botas y accesorios de Moteros Shop Cartago, con carrito y pedido que
se cierra por WhatsApp. Sitio estático, sin build: HTML, CSS y JavaScript sin dependencias.
Construido sobre el motor de la tienda FabJak.

## Publicar en Netlify

**Add new site → Import an existing project → GitHub → este repo.** No hay que configurar nada:
`netlify.toml` ya dice que no hay build y que se publica la raíz. Cada push a `main` redespliega.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Número de WhatsApp, formas de pago, textos, colores | `assets/js/config.js` |
| Productos, precios, tallas y stock | `datos/productos.json` |
| Fotos de productos | `assets/img/productos/` (hoy son ilustraciones SVG de muestra) |
| Textos legales (campos entre corchetes por completar) | `legal/` |

Los pedidos llegan hoy a la línea de demo **311 314 0553**, conectada al agente de MergeOn.

## Pendiente antes de usarla con clientes reales

- Precios y stock son de referencia: confirmarlos con la tienda.
- Cambiar las ilustraciones por fotos reales.
- Con la URL definitiva, poner `og:image` con la dirección completa
  (`https://.../assets/img/og-moteros.png`), porque WhatsApp no muestra la vista previa con rutas relativas.
- Está marcada `noindex` y `robots.txt` bloquea buscadores: abrirla cuando sea cliente.

## Local

```bash
python -m http.server 5510
```
