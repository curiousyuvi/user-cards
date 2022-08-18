import { Avatar, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import useUser from "../hooks/useUser";
import { User } from "../interfaces/User";

const UserCardItem = ({ user }: { user: User }) => {
  const bgColor = useColorModeValue("bg-gray-100", "bg-gray-800");
  const dropShadow = useColorModeValue(
    "drop-shadow-neum-light",
    "drop-shadow-neum-dark"
  );
  const { setUserModalOpen, setUser } = useUser();
  const openModal = () => {
    setUserModalOpen(true);
    setUser(user);
  };

  return (
    <>
      <button
        className={`p-6 pt-0 pb-10 flex flex-col justify-center items-center rounded-2xl ${bgColor} ${dropShadow} hover:scale-105 duration-300 border-4 border-x-0 border-t-0 border-indigo-400/30`}
        onClick={openModal}
      >
        <div
          className={`rounded-full ${dropShadow} p-1 bg-indigo-500 translate-y-[-2rem]`}
        >
          <Avatar
            size={{ base: "xl", sm: "2xl" }}
            src={`https://avatars.dicebear.com/api/miniavs/${user.name}.svg?b=%23a8beff`}
          />
        </div>
        <Text className="text-sm sm:text-base" fontWeight="bold" noOfLines={1}>
          {user.name}
        </Text>
        <span className="my-1" />
        <Text className="text-xs opacity-70">@{user.username}</Text>
      </button>
    </>
  );
};

export default UserCardItem;
