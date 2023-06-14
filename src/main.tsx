import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DrawerProvider from "./context/DrawerContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DrawerProvider>
      <App />
    </DrawerProvider>
  </React.StrictMode>
);
