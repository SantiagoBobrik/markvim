import { tags as t } from "@lezer/highlight";
import type { CreateThemeOptions } from "@uiw/codemirror-themes";

export const editorTheme: CreateThemeOptions = {
    theme: "light",
    settings: {
      background: "#1e1e1e",
      foreground: "#ddd",
      caret: "#b2ccd6",
      selection: "#2d2d2d",
      selectionMatch: "#2d2d2d",
      lineHighlight: "#282c34",
      gutterBackground: "#1e1e1e",
      gutterForeground: "#555",
    },

    styles: [
      {
        tag: t.heading,
        color: "#b2ccd6",
      },
      {
        tag: t.link,
        color: "#5d00ff",
      },
      {
        tag: t.monospace,
        color: "#ff4500",
        background: "#2d2d2d",
      },
      {
        tag: t.list,
        color: "#ddd",
      },
    ],
  }
