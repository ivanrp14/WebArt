# WebArt

Catálogo web para ver y “comprar” obras, bajo el nombre **MelTheDog**. Incluye búsqueda, ficha de obra, contacto y un contexto de autenticación.

## Páginas

| Archivo | Qué es |
| --- | --- |
| `src/pages/Home.jsx` | Portada (“Bienvenido a MelTheDog”) |
| `src/pages/Products.jsx` | Obras |
| `src/pages/Contact.jsx` | Contacto |
| `src/components/ArtGrid.jsx` | Rejilla |
| `src/components/ProductCard.jsx` | Tarjeta |
| `src/components/SearchBar.jsx` | Búsqueda |
| `src/components/Navbar.jsx` / `Footer.jsx` | Marco de la página |
| `src/data/artData.js` | Datos locales de las obras |
| `src/components/AuthContext.jsx` | Sesión en el cliente |

## Stack

- React 18
- Vite
- React Router
- CSS propio en `src/styles`

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Las obras de `artData.js` no salen de una API: para cambiar el catálogo se edita ese archivo.
