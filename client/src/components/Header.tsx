import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { AiFillIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
import ColorModeToggleButton from "./ColorModeToggleButton";

const Header = () => {
  const bgColor = useColorModeValue("bg-white/50", "bg-gray-400/10");
  return (
    <header
      className={`w-full p-10 flex justify-center items-center fixed top-0`}
    >
      <div
        className={`w-full p-4 flex justify-between items-center rounded-2xl ${bgColor} backdrop-blur drop-shadow-neum`}
      >
        <HomeLinkLogo />
        <ColorModeToggleButton />
      </div>
    </header>
  );
};

const HomeLinkLogo = () => {
  const textColor = useColorModeValue("text-indigo-600", "text-indigo-400");

  return (
    <Link to="/" className="flex items-center">
      <Logo />
      <span className="mx-1" />
      <Text fontWeight="bold" className="text-2xl">
        <span className={`${textColor}`}>U</span>ser
        <span className="mx-1" />
        <span className={`${textColor}`}>C</span>ards
      </Text>
    </Link>
  );
};

const Logo = () => {
  const bgColor = useColorModeValue("bg-indigo-600", "bg-indigo-400");

  return (
    <div className={`p-3 ${bgColor} rounded-xl`}>
      <AiFillIdcard className="text-2xl text-white" />
    </div>
  );
};

export default Header;
