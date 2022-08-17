import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const LayoutWrapper = () => {
  const bgColor = useColorModeValue("bg-gray-100", "bg-gray-800");
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-start ${bgColor}`}
    >
      <Header />
      <div className="w-full min-h-screen h-full max-w-6xl">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
