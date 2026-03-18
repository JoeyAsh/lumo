# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # TypeScript check (tsc) + Vite production build
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to GitHub Pages (gh-pages)
```

No lint or test scripts are configured.

## Architecture

**LUMO** is a React 19 + TypeScript marketing site for smart comfort/hygiene products, deployed to GitHub Pages at `https://joeyash.github.io/lumo/`.

### Routing & Layout

- React Router v7 with four routes: `/`, `/products`, `/experience`, `/contact`
- All routes are wrapped by a single `Layout.tsx` (sticky header, footer, burger menu)
- Vite base path is `/lumo/` — required for GitHub Pages subdirectory hosting

### Internationalization

- Three languages: English (`en`), German (`de`), Simplified Chinese (`zh`)
- Custom `LanguageContext.tsx` provider persists selection in `localStorage`
- All user-facing text is wrapped in `<FormattedMessage id="..." />` from `react-intl`
- Translation files live in `src/i18n/messages/`

### Styling

- Plain CSS only — no CSS-in-JS or preprocessors
- BEM naming convention (e.g., `nav__link`, `nav__link--active`)
- Global resets, animations, and utility classes in `src/styles/global.css`
- Per-page CSS files colocated with page components
- Scroll-based header: changes appearance after 40px scroll

### Product Illustrations

- Custom SVG React components in `src/components/illustrations/ProductIllustrations.tsx`
- Three product models: PY01 (floor-standing), YA61 (wall-hung U-shape), XA61 (wall-hung square)

### Deployment

GitHub Actions (`.github/workflows/deploy.yaml`) triggers on pushes to `main`: runs `npm ci` + `npm run build`, then publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`.
