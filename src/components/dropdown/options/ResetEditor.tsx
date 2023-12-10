import { ResetEditorSVG } from "../../../assets/ResetEditor";
import { useEditorContext } from "../../../hooks/useEditorContext";
import { defaultValue } from "../../../utils/defaultValue";

export const ResetEditor = () => {
  const { setMarkdown } = useEditorContext();

  const handleOnClick = () => {
    const confirm = window.confirm(
      "Are you sure you want to reset the editor? This will delete all your current work."
    );
    if (confirm) {
      setMarkdown(defaultValue);
      localStorage.setItem("markdown", defaultValue);
    }
  };
  return (
    <button
      className="dropdown__content__option"
      onClick={handleOnClick}
      aria-label="Reset editor"
    >
      <ResetEditorSVG />
      <span>Reset editor</span>
    </button>
  );
};
