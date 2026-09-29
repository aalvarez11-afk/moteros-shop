# Moteros Shop — tienda web (demo)

Catálogo de cascos, trajes, botas y accesorios de Moteros Shop Cartago, con carrito y pedido que
se cierra por WhatsApp. Sitio estático, sin build: HTML, CSS y JavaScript sin dependencias.
Construido sobre el motor de la tienda FabJak.

Publicada en **https://moterosshop.netlify.app**.

## Publicar en Netlify

**Add new site → Import an existing project → GitHub → este repo.** No hay que configurar nada:
`netlify.toml` ya dice que no hay build y que se publica la raíz. Cada push a `main` redespliega.

## Agregar un producto

El catálogo vive en dos lados que deben coincidir: esta web (`datos/productos.json`) y MergeOn
(#312), que es de donde el agente de WhatsApp saca precios y stock.

1. **Foto** en `assets/img/productos/`, en JPG o PNG cuadrado (800×800 va bien), con el nombre de
   la referencia en minúscula: `cas-005.jpg`. SVG no, porque WhatsApp no lo muestra.
2. **Producto** en `datos/productos.json` → `productos`: referencia nueva y única (`CAS-005`),
   nombre, categoría (una de las que ya existen, para que el filtro no se parta), descripción,
   precio, `precio_antes` solo si está en oferta, `imagen_1`, `destacado` y `activo: "SI"`.
3. **Tallas y stock** en `inventario`: una fila por talla y color. Si no lleva tallas, no pongas
   filas y el sitio muestra "confirmamos disponibilidad por WhatsApp".
4. **Commit y push a `main`**: Netlify redespliega solo en menos de un minuto.
5. **MergeOn**, desde `Ultron/demos/moteros-shop/mergeon/`:
   `node generar-productos.js https://moterosshop.netlify.app CAS-005` y cargar el
   `productos.json` que genera con `products_bulk_create` (ecommerce 312). Pasar **solo las
   referencias nuevas**, o se duplican los productos que ya están.

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
- Está marcada `noindex` y `robots.txt` bloquea buscadores: abrirla cuando sea cliente.

## Local

```bash
python -m http.server 5510
```
