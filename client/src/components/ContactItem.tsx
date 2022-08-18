import { Text, useToast } from "@chakra-ui/react";
import { ReactNode } from "react";

const ContactItem = ({
  icon,
  value,
  isWebsite,
}: {
  icon: ReactNode;
  value: string;
  isWebsite?: boolean;
}) => {
  const toast = useToast();
  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      status: "success",
      duration: 2000,
    });
  };
  const handleClick = () => {
    if (isWebsite) {
      window.open("https://www." + value, "_blank");
    } else {
      copyToClipBoard(value);
    }
  };
  return (
    <button
      className="flex items-center mb-2 hover:scale-105 duration-300"
      onClick={handleClick}
    >
      <span className="p-2 bg-indigo-500/20 text-xs sm:text-sm rounded-lg text-indigo-500">
        {icon}
      </span>
      <span className="mx-1" />
      <Text className="opacity-70 text-sm sm:text-base">{value}</Text>
    </button>
  );
};

export default ContactItem;
