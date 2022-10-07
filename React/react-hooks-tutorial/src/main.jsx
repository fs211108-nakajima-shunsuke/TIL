import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const kamijoInfo = {
  name: "Kamijo",
  age: 16,
};

const KamijoCodeContext = createContext(kamijoInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <KamijoCodeContext.Provider value={kamijoInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KamijoCodeContext.Provider>
);

export default KamijoCodeContext