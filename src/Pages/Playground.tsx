import { useState } from "react";
import Editor from "@monaco-editor/react";
import { cssTemplate, htmlTemplate, setEditorTheme } from "../monacoConfig";
import DOMPurify from "dompurify";
import SplitPane from "react-split";

const Files = {
  html: {
    name: "index.html",
    lang: "html",
    defaultValue: htmlTemplate,
  },
  css: {
    name: "style.css",
    lang: "css",
    defaultValue: cssTemplate,
  },
};
type Lan = "html" | "css";
const Playground = () => {
  const [currentFile, setCurrentFile] = useState<Lan>("html");
  const [editorValue, setEditorValue] = useState("");

  return (
    <div className="bg-green-50 h-screen pt-8">
      <h2 className="tex-slate-500 text-3xl text-center">
        Customize form to get started
      </h2>
      <div className="bg-gray-50 inline-block px-4 pt-2 cursor-pointer rounded-t-lg">
        <button
          className={`text-green-500 uppercase px-4 py-2 mx-1 rounded-t-lg ${
            currentFile === "html" ? "bg-white" : ""
          } cursor-pointer`}
          onClick={() => setCurrentFile("html")}
        >
          html
        </button>
        <button
          className={`text-green-500 uppercase px-4 py-2 mx-1 rounded-t-lg ${
            currentFile === "css" ? "bg-white" : ""
          } cursor-pointer`}
          onClick={() => setCurrentFile("css")}
        >
          css
        </button>
      </div>

      <SplitPane
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="bg-red-500 h-[300px]"></div>
        <div className="bg-green-500 h-[300px]"></div>
      </SplitPane>
      <Editor
        height="300px"
        // width="600px"
        defaultLanguage={Files[currentFile].lang}
        beforeMount={({ editor }) => setEditorTheme(editor)}
        theme={"Monokai"}
        loading={<h3>Vitemail editor loading...</h3>}
        defaultValue={Files[currentFile].defaultValue}
        path={Files[currentFile].name}
        onChange={(value, event) => {
          console.log({ value, event });
          setEditorValue(value!);
        }}
        options={{ fontSize: 23, wordWrap: "on" }}
      />

      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorValue) }}
      ></div>
    </div>
  );
};

export default Playground;
