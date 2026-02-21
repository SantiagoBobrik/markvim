<p align="center">
  <img src="https://github.com/SantiagoBobrik/markvim/assets/43079605/99e97960-6ec0-46bd-a07e-1538f50a97e4" alt="Markvim screenshot" width="720" />
</p>

<h1 align="center">Markvim</h1>

<p align="center">
  A minimalist Markdown editor with Vim keybindings.<br/>
  Write, preview, and share — all from the keyboard.
</p>

<p align="center">
  <a href="https://markvim.xyz">Live Demo</a> &middot;
  <a href="CONTRIBUTING.md">Contributing</a> &middot;
  <a href="LICENSE">License</a>
</p>

---

## Features

- **Vim keybindings** — `hjkl`, `w`, `b`, `dd`, `ciw`, visual mode, and more via CodeMirror Vim
- **Live preview** — GitHub Flavored Markdown rendered in real time (tables, task lists, strikethrough)
- **Resizable split panes** — drag the gutter to adjust editor/preview ratio
- **Shareable links** — encode your document into a URL and share it with anyone
- **Persistent state** — content auto-saves to localStorage
- **Download as `.md`** — export your document with one click
- **Dark theme** — easy on the eyes, built for focus

## Screenshots

<p align="center">
  <img src="https://github.com/SantiagoBobrik/markvim/assets/43079605/1e50050a-a468-484e-bcbb-7e03b2a98ef7" alt="Markvim editor view" width="720" />
</p>

## Getting Started

```bash
# Clone the repo
git clone https://github.com/SantiagoBobrik/markvim.git
cd markvim

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + production build |
| `npm run lint` | ESLint (zero warnings) |
| `npm run preview` | Preview production build |
| `npm run test:e2e` | Run Playwright e2e tests |

## Tech Stack

- **React 19** + **TypeScript**
- **CodeMirror 6** with `@replit/codemirror-vim`
- **react-markdown** + `remark-gfm`
- **Vite 7**

## Contributing

Contributions are welcome! Please read the [contributing guide](CONTRIBUTING.md) and follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE)
