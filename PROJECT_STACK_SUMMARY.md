# Project Stack Summary

Generated: 2026-03-02

## Core Framework & Libraries

| Library | Declared (`package.json`) | Locked/Installed (`package-lock.json`) | Status |
|---|---:|---:|---|
| React | `^19.2.0` | `19.2.4` | In use |
| React DOM | `^19.2.0` | `19.2.4` | In use |
| React Router DOM | `^7.13.1` | `7.13.1` | In use |
| Tailwind CSS | `^4.2.1` | `4.2.1` | In use |
| `@tailwindcss/vite` | `^4.2.1` | `4.2.1` | In use |
| Lucide React (`lucide-react`) | `^0.575.0` | `0.575.0` | Installed (not currently used in `src`) |

## Tooling

| Tool | Declared (`package.json`) | Locked/Installed (`package-lock.json`) |
|---|---:|---:|
| Vite | `^8.0.0-beta.13` | `8.0.0-beta.16` |
| `@vitejs/plugin-react` | `^5.1.1` | (resolved via lockfile) |
| ESLint | `^9.39.1` | (resolved via lockfile) |
| PostCSS | `^8.5.6` | (resolved via lockfile) |
| Autoprefixer | `^10.4.27` | (resolved via lockfile) |

## Notes

- `package.json` uses caret ranges (`^`), so lockfile may resolve to newer compatible versions.
- Current routing setup is enabled with `BrowserRouter` + `Routes`/`Route`.
- Tailwind is enabled via Vite plugin and `@import "tailwindcss"`.
