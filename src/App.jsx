import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormGenerator from "./components/FormGenerator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [schema, setSchema] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <div className="content">
        <div className="editor">
          <JSONEditor onChange={setSchema} />
        </div>
        <div className="form-preview">
          <FormGenerator schema={schema} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
