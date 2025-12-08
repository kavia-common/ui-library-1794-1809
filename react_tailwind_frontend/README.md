# UI Library (React + Tailwind CLI)

This app implements a small Tailwind UI-like library with:
- Fixed top navbar
- Responsive/collapsible sidebar (sticky on desktop)
- Live preview cards and tabbed code viewer (JSX/CSS) with syntax highlighting and copy
- Smooth transitions, mobile friendly
- Ocean Professional theme (blue primary, amber secondary)

Scripts:
- `npm start` runs CRA and Tailwind CLI (watch) together
- `npm run build` builds Tailwind CSS and CRA production bundle

Routing:
- Uses `react-router-dom` v6
- Pages: `/components`, `/blocks`

Tailwind:
- CLI integrated with `tailwindcss` and `postcss`
- Theme colors configured in `tailwind.config.js`

Environment:
- Uses existing env variables if needed. No new env vars introduced.
