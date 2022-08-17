import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function ColorModeToggleButton() {
  const { toggleColorMode } = useColorMode();
  function handleChange() {
    toggleColorMode();
  }
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={`checkbox fixed h-12 w-12 z-20 opacity-0 ${useColorModeValue(
          "",
          "dark"
        )}`}
        onChange={handleChange}
      />
      <label
        className={`h-[18px] w-[34px] flex rounded-full items-center justify-between p-[3px] relative scale-150 mx-2 mr-5 ${useColorModeValue(
          "bg-blue-500",
          "bg-black"
        )}`}
      >
        <FaMoon className="text-white text-sm" />
        <BsFillSunFill className="text-yellow-300 text-sm" />
        <div
          className={`w-[16px] h-[16px] bg-white transition-transform rounded-full fixed top-[1px] left-[1px] ${useColorModeValue(
            "",
            "translate-x-4"
          )}`}
        />
      </label>
    </div>
  );
}
