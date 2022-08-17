import { Avatar, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { User } from "../interfaces/User";

const UserCardItem = ({ user }: { user: User }) => {
  const bgColor = useColorModeValue("bg-gray-100", "bg-gray-800");
  const dropShadow = useColorModeValue(
    "drop-shadow-neum-light",
    "drop-shadow-neum-dark"
  );
  return (
    <div
      className={`p-6 pt-0 pb-10 flex flex-col justify-center items-center rounded-2xl ${bgColor} ${dropShadow}`}
    >
      <Avatar
        size={{ base: "xl", sm: "2xl" }}
        className="translate-y-[-2rem]"
        src={`https://avatars.dicebear.com/api/initials/${user.name}.svg?bold=true`}
      />
      <Text className="text-sm sm:text-base" noOfLines={1}>
        {user.name}
      </Text>
      <span className="my-1" />
      <Text className="text-xs opacity-70">@{user.username}</Text>
    </div>
  );
};

export default UserCardItem;
