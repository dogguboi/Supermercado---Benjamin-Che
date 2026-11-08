# Supermercado · Gestión de inventario

Proyecto de **Desarrollo Frontend II (PFY2202)**. Sitio web de gestión de inventario para un supermercado, hecho con React, React Router y Tailwind CSS.

## Funcionalidades

- **Inicio** con resumen del inventario.
- **Agregar artículo**: formulario con validación (nombre, marca, tipo, precio y cantidad).
- **Inventario**: tabla con todos los artículos y **filtro por categoría** (no modifica los datos originales).
- **Detalle de artículo**: al hacer clic en un artículo; permite **agregarlo al carrito** y descuenta el stock.
- **Carrito**: aumentar o disminuir cantidades, quitar productos y confirmar la compra. El inventario se actualiza en cada cambio.
- **Quiénes somos** y **Contáctanos** en un menú inferior.

## Tecnologías

React 18 · React Router 6 · Context API + `useReducer` · Tailwind CSS 3 · Vite

## Estructura

```
src/
├── components/   Componentes reutilizables (Navbar, tabla, filtro, formulario, etc.)
├── context/      Estado global (reducer + provider + pruebas)
├── data/         Datos iniciales y categorías
├── pages/        Una página por ruta
├── routes/       Configuración de React Router (con lazy loading)
└── utils/        Funciones auxiliares
```

## Cómo ejecutarlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm test         # pruebas de la lógica del estado
npm run build    # compilación para producción
```

## Publicación en GitHub Pages

1. Crear el repositorio `supermercado-nombre-apellido-siglaCurso` y subir el código.
2. Ejecutar `npm run deploy` (compila y publica la carpeta `dist` en la rama `gh-pages`).
3. En GitHub: *Settings → Pages → Branch: gh-pages* y guardar.
4. El sitio quedará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Se usa `HashRouter` para que las rutas funcionen al recargar en GitHub Pages.
