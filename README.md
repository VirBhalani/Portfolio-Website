# Portfolio Website

A personal portfolio built with **React + TypeScript** and **Vite**. It uses **TanStack Router** for routing and **Tailwind CSS** for styling.

Features
Fixed “brand mark” in the top-right corner on every page
Multiple pages (Home, Projects, Achievements, About, etc.)
Brutalist UI styling with custom accent colors
Image-based logo with graceful fallback to the original text logo
Tech Stack
React
TypeScript
Vite
TanStack Router
Tailwind CSS
Bun/Node (depending on how you run the project)
Getting Started
1) Install dependencies
Using Bun:


bun install
Or using npm:


npm install
2) Run the dev server
Using Bun:


bun run dev
Or using npm:


npm run dev
3) Open in browser
Go to the URL shown in your terminal (typically http://localhost:5173).

Build for Production
Using Bun:


bun run
Or using npm:


npm run build
Preview the production build:


bun run preview
(or npm run preview)

Project Structure (high level)
src/routes/ — page routes
src/components/ — reusable components
src/lib/ — utilities/config and static assets (e.g., logo PNG)
Logo Behavior (Important)
The fixed brand mark uses the image:

src/lib/Vir Bhalani Logo Final.png

If the image fails to load, the UI automatically falls back to the original stacked typography version (so you never get a broken/bad-looking logo).

Linting / Formatting
This project includes:

ESLint config (eslint.config.js)
Prettier config (prettierrc)
Run formatting/linting based on your package scripts.
