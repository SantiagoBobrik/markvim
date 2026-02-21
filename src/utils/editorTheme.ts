import { tags as t } from "@lezer/highlight";
import type { CreateThemeOptions } from "@uiw/codemirror-themes";

export const editorTheme: CreateThemeOptions = {
    theme: "light",
    settings: {
      background: "#121211",
      foreground: "#d8d8c6",
      caret: "#6aaa6a",
      selection: "#0a0a09",
      selectionMatch: "#0a0a09",
      lineHighlight: "#0a0a09",
      gutterBackground: "#121211",
      gutterForeground: "#787c79",
    },

    styles: [
      {
        tag: t.heading,
        color: "#6aaa6a",
      },
      {
        tag: t.link,
        color: "#4a7a4a",
      },
      {
        tag: t.monospace,
        color: "#787c79",
        background: "#0a0a09",
      },
      {
        tag: t.list,
        color: "#d8d8c6",
      },
    ],
  }
