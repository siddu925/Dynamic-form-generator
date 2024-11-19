import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./JSONEditor.css";
const JSONEditor = ({ schema, onChange }) => {
  const [editorValue, setEditorValue] = useState(JSON.stringify(schema, null, 2));

  const handleEditorChange = (newValue) => {
    try {
      const parsedValue = JSON.parse(newValue);
      setEditorValue(newValue);
      onChange(parsedValue);  // Call the parent callback to pass the updated schema
    } catch (e) {
      // Handle invalid JSON if necessary
      console.error("Invalid JSON:", e);
    }
  };

  return (
    <div className="json-editor-container">
      <MonacoEditor
        width="100%"
        height="100%"
        language="json"
        theme="vs-dark"
        value={editorValue}
        onChange={handleEditorChange}
        options={{
          selectOnLineNumbers: true,
        }}
      />
    </div>
  );
};
export default JSONEditor;
