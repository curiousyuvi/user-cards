import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaIdCardAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ColorModeToggleButton from "./ColorModeToggleButton";

const Header = () => {
  const bgColor = useColorModeValue("bg-gray-200/50", "bg-gray-700/50");
  const fromBgColor = useColorModeValue("from-gray-100", "from-gray-800");
  const viaBgColor = useColorModeValue("via-gray-100/80", "via-gray-800/80");

  return (
    <header
      className={`w-full p-6 flex justify-center items-center fixed top-0 z-10 bg-gradient-to-b ${fromBgColor} ${viaBgColor} to-transparent`}
    >
      <div
        className={`w-full p-4 flex justify-between items-center rounded-2xl ${bgColor} backdrop-blur border`}
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
      <FaIdCardAlt className="text-2xl text-white" />
    </div>
  );
};

export default Header;
