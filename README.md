# Portfolio Website

A personal portfolio built with **React + TypeScript** and **Vite**. It uses **TanStack Router** for routing and **Tailwind CSS** for styling.

---

## Features
- Fixed brand mark in the top-right corner on every page
- Multiple pages (Home, Projects, Achievements, About, etc.)
- Brutalist UI styling with custom accent colors
- Image-based logo with graceful fallback to the original text logo

---

## Tech Stack
- React
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS
- Bun/Node (depending on how you run the project)

---

## Getting Started

### 1) Install dependencies
Using Bun:
```bash
bun install
```

Or using npm:
```bash
npm install
```

### 2) Run the dev server
Using Bun:
```bash
bun run dev
```

Or using npm:
```bash
npm run dev
```

### 3) Open in browser
Visit the URL shown in your terminal (commonly `http://localhost:5173`).

---

## Build for Production
Using Bun:
```bash
bun run build
```

Or using npm:
```bash
npm run build
```

Preview production build:
Using Bun:
```bash
bun run preview
```

Or using npm:
```bash
npm run preview
```

---

## Project Structure (high level)
- `src/routes/` — page routes
- `src/components/` — reusable UI components
- `src/lib/` — utilities/config and static assets (e.g., logo PNG)

---

## Logo Behavior (Important)
The fixed brand mark uses the image:

`src/lib/Vir Bhalani Logo Final.png`

If the image fails to load, the UI automatically falls back to the original stacked typography version (so the header never shows a broken image).

Implemented in:
- `src/components/FixedLogo.tsx`

---

## Linting / Formatting
The project includes ESLint and Prettier configuration:
- `eslint.config.js`
- `.prettierrc`

Run formatting/linting based on your package scripts.

---

## License
Add your license information here (if any).
