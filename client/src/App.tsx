import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <ChakraProvider>
      <div className="text-6xl">Hello, World</div>
    </ChakraProvider>
  );
}

export default App;
