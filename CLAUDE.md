# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Markvim is a minimalist Markdown editor with integrated Vim keybindings. It provides a split-pane interface: CodeMirror editor on the left, rendered Markdown preview on the right.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check with `tsc` then build with Vite
- `npm run lint` — ESLint with zero warnings allowed (`--max-warnings 0`)
- `npm run preview` — Preview production build

No test framework is configured.

## Architecture

**State management:** React Context (`src/contexts/editorContext.tsx`) holds the markdown string. Access it via the `useEditorContext` hook (`src/hooks/useEditorContext.tsx`).

**Editor:** CodeMirror with `@replit/codemirror-vim` for Vim mode and `@codemirror/lang-markdown` for syntax. Custom dark theme defined in `src/utils/editorTheme.ts`. Input is debounced (500ms) before saving to localStorage.

**Preview:** `react-markdown` with `remark-gfm` for GitHub Flavored Markdown rendering.

**Layout:** `react-split` for resizable split panes. Editor and Preview components are lazy-loaded.

**Persistence:** Markdown is saved to localStorage under the key `"markdown"`. Content can also be shared via URL using base64-encoded query parameters (see `src/utils/searchParams.ts` and `src/utils/getLocalSate.ts`).

**Key directories:**
- `src/components/` — Feature-organized components (editor, preview, header, dropdown, split-header)
- `src/utils/` — Pure utilities (localStorage, URL params, clipboard, theme, default content)
- `src/assets/` — SVG icons as React components
- `src/contexts/` and `src/hooks/` — Single context + hook for global state

## Conventions

- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- Functional components with hooks only
- CSS files co-located with components (no CSS modules — plain CSS with custom properties for theming)
- SVG icons implemented as React components in `src/assets/`
- Dropdown menu options each in their own file under `src/components/dropdown/options/`
