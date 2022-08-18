import { useColorModeValue, Heading } from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";
import useUser from "../hooks/useUser";

const CompanyItem = () => {
  const { user } = useUser();
  const logoColor = useColorModeValue("text-indigo-600", "text-indigo-400");

  return (
    <div className="w-full flex justify-center items-center">
      <FaGlobe className={`text-5xl ${logoColor}`} />
      <span className="mx-1" />
      <div className="flex flex-col items-start">
        <Heading size="md" fontWeight="bold" noOfLines={1}>
          {user.company.name.toUpperCase()}
        </Heading>
        <span className="mb-1" />
        <span
          className={`text-xs ${logoColor} opacity-80 font-bold w-[10rem] h-4 overflow-hidden`}
        >
          {user.company.catchPhrase.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default CompanyItem;
