import { useContext } from "react";
import { EditorContext } from "../contexts/editorContext";

export const useEditorContext = () => {
  return useContext(EditorContext);
};
