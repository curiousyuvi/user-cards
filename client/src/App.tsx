import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import useExtendedTheme from "./hooks/useExtendedTheme";
import Home from "./pages/Home";
import "@fontsource/poppins";
import "@fontsource/oswald";

function App() {
  const extendedTheme = useExtendedTheme();
  return (
    <ChakraProvider theme={extendedTheme}>
      <Router>
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
