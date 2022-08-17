import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import { extendedThemeConfig } from "./hooks/useExtendedTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = extendedThemeConfig;
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </React.StrictMode>
);
