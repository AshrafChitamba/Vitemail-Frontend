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
    <div className="bg-green-50 h-screen pt-8 px-2 lg:px-20">
      <h2 className="text-slate-500 text-3xl text-center mb-5">
        Customize form to get started
      </h2>

      <SplitPane
        className="wrap"
        sizes={[100, 100]}
        minSize={500}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="h-[350px]">
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

          <Editor
            height="100%"
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
        </div>

        <div className="px-5 h-[350px]">
          <h2 className="bg-white border-b-2 border-green-500 inline-block rounded-t-lg px-4 text-xl capitalize text-slate-500 font-semibold py-3">
            Output
          </h2>
          <div className="bg-white h-full">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(editorValue),
              }}
            />
          </div>
        </div>
      </SplitPane>
    </div>
  );
};

export default Playground;
