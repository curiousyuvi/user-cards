import { Text } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { Address } from "../interfaces/User";

const AddressItem = ({ address }: { address: Address }) => {
  const handleClick = () => {
    window.open(
      `https://maps.google.com/?q=${address.geo.lat},${address.geo.lng}`,
      "_blank"
    );
  };
  return (
    <button
      className="flex items-start w-60 hover:scale-105 duration-300"
      onClick={handleClick}
    >
      <span className="p-2 bg-indigo-500/20 text-sm rounded-lg text-indigo-500">
        <IoLocationSharp />
      </span>
      <span className="mx-1" />
      <Text
        className="opacity-70 text-sm"
        noOfLines={2}
        textAlign="start"
      >{`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</Text>
    </button>
  );
};

export default AddressItem;
