import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { FORMAT_TEXT_COMMAND } from "lexical";

// 🔤 Editor Config
const editorConfig = {
  theme: {
    // Customize this for Tailwind or leave blank
    // You can style ContentEditable directly
  },
  onError(error) {
    console.error("Lexical Error:", error);
  },
  namespace: "MyEditor",
};

// 🛠 Toolbar Component
function Toolbar() {
  const [editor] = useLexicalComposerContext();

  const formatText = (type) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };

  return (
    <div className="flex gap-2 mb-2 border-b pb-2">
      <button
        onClick={() => formatText("bold")}
        className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
      >
        Bold
      </button>
      <button
        onClick={() => formatText("italic")}
        className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
      >
        Italic
      </button>
      <button
        onClick={() => formatText("underline")}
        className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
      >
        Underline
      </button>
    </div>
  );
}

// 🧠 Change Handler
function onChange(editorState) {
  editorState.read(() => {
    const editorContent = editorState.toJSON();
    console.log("Editor Content:", editorContent);
  });
}

// ✨ Main RTE Component
export default function RTE() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="border border-gray-300 rounded p-4">
        <Toolbar />
        <PlainTextPlugin
          contentEditable={
            <ContentEditable className="outline-none min-h-[150px] p-2 text-sm text-gray-800" />
          }
          placeholder={
            <div className="text-gray-400 p-2">Write something here...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
}
