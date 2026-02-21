import { SaveSVG } from "../../../assets/Save";
import { useEditorContext } from "../../../hooks/useEditorContext";

export const DownloadFile = () => {
  const { markdown } = useEditorContext();

  const handleOnSave = () => {
    const rawName = prompt("Choose a name for your file");

    if (rawName === null) {
      return;
    }

    const sanitized = rawName.replace(/[/\\:*?"<>|]/g, "").trim();
    const fileName = sanitized || "untitled";

    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${fileName}.md`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      role="menuitem"
      className="dropdown__content__option"
      onClick={handleOnSave}
      aria-label="Download file"
    >
      <SaveSVG />
      <span>Download file</span>
    </button>
  );
};
