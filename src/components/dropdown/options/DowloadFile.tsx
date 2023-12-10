import { SaveSVG } from "../../../assets/Save";
import { useEditorContext } from "../../../hooks/useEditorContext";

export const DowloadFile = () => {
  const { markdown } = useEditorContext();

  const handleOnSave = () => {
    const fileName = prompt("Choose a name for your file");

    if (!fileName) {
      return;
    }

    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${fileName}.md` || "untitled.md";
    link.href = url;
    link.click();
  };
  return (
    <button
      className="dropdown__content__option"
      onClick={handleOnSave}
      aria-label="Download file"
    >
      <SaveSVG />
      <span>Download file</span>
    </button>
  );
};
