# WebArt

A web catalog for browsing and “buying” artworks, under the name **MelTheDog**. It includes search, an artwork card, contact, and a client-side auth context.

## Pages

| File | What it is |
| --- | --- |
| `src/pages/Home.jsx` | Landing (“Bienvenido a MelTheDog”) |
| `src/pages/Products.jsx` | Artworks |
| `src/pages/Contact.jsx` | Contact |
| `src/components/ArtGrid.jsx` | Grid |
| `src/components/ProductCard.jsx` | Card |
| `src/components/SearchBar.jsx` | Search |
| `src/components/Navbar.jsx` / `Footer.jsx` | Page frame |
| `src/data/artData.js` | Local artwork data |
| `src/components/AuthContext.jsx` | Client session |

## Stack

- React 18
- Vite
- React Router
- Custom CSS in `src/styles`

## How to run

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Artworks in `artData.js` do not come from an API: edit that file to change the catalog.
