# Contributing to Markvim

Thanks for your interest in contributing! Here's how you can help.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/markvim.git
   cd markvim
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a branch from `master`:
   ```bash
   git checkout -b feat/your-feature
   ```
2. Make your changes
3. Verify everything works:
   ```bash
   npm run lint        # ESLint (zero warnings)
   npm run build       # TypeScript + Vite build
   npm run test:e2e    # Playwright e2e tests
   ```
4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "feat: add your feature description"
   ```
5. Push and open a pull request

## Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Purpose |
| --- | --- |
| `feat:` | New feature |
| `fix:` | Bug fix |
| `refactor:` | Code change that neither fixes a bug nor adds a feature |
| `perf:` | Performance improvement |
| `docs:` | Documentation only |
| `test:` | Adding or updating tests |
| `chore:` | Maintenance (dependencies, config, etc.) |

## Project Structure

```
src/
  components/     Feature-organized components
    editor/       CodeMirror editor with Vim mode
    preview/      Markdown preview pane
    header/       App header and logo
    dropdown/     Menu with actions (download, share, reset, copy)
  contexts/       React Context for editor state
  hooks/          useEditorContext hook
  utils/          Pure utilities (localStorage, URL params, theme)
  assets/         SVG icons as React components
```

## Guidelines

- **TypeScript strict mode** — no `any` types, no unused variables
- **Functional components** with hooks only
- **CSS** — plain CSS with custom properties, co-located with components
- **Keep it simple** — this is a minimalist editor, avoid unnecessary complexity

## Reporting Bugs

Open an [issue](https://github.com/SantiagoBobrik/markvim/issues) with:

- Steps to reproduce
- Expected vs actual behavior
- Browser and OS

## Suggesting Features

Open an [issue](https://github.com/SantiagoBobrik/markvim/issues) with the `enhancement` label. Describe the use case and why it fits Markvim's minimalist philosophy.
