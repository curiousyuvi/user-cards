import {
  Modal,
  ModalOverlay,
  ModalContent,
  Avatar,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import useUser from "../hooks/useUser";
import AddressItem from "./AddressItem";
import CompanyItem from "./CompanyItem";
import ContactItem from "./ContactItem";

const UserModal = () => {
  const { userModalOpen, setUserModalOpen, user } = useUser();
  const closeModal = () => {
    setUserModalOpen(false);
  };

  const modalBgColor = useColorModeValue("gray.100", "gray.800");
  return (
    <Modal isOpen={userModalOpen} onClose={closeModal}>
      <ModalOverlay className="backdrop-blur" />
      <ModalContent
        bgColor={modalBgColor}
        className="p-0 m-8 relative"
        borderRadius="3xl"
      >
        <img src="/cardTop.svg" alt="" className="translate-y-[-3px]" />
        <div className="bg-[#7761ff] h-52 sm:h-64 top-10 sm:top-14 w-full absolute rounded-b-full z-[-1]" />
        <div
          className={`w-full h-full flex flex-col justify-start items-center rounded-2xl rounded-t-none p-8`}
        >
          <div
            className={`rounded-full w-40 h-40 sm:w-52 sm:h-52 drop-shadow-xl`}
          >
            <Avatar
              size="full"
              src={`https://avatars.dicebear.com/api/miniavs/${user.name}.svg?b=%23a8beff`}
            />
          </div>
          <span className="my-4 sm:my-8" />
          <Text className="text-xl sm:text-2xl" fontWeight="bold" noOfLines={1}>
            {user.name}
          </Text>
          <span className="mb-1 sm:my-1" />
          <Text className="text-md sm:text-lg opacity-70">
            @{user.username}
          </Text>
          <span className="my-4" />
          <div className="flex flex-col items-start">
            <ContactItem icon={<AiFillPhone />} value={user.phone} />
            <ContactItem icon={<AiFillMail />} value={user.email} />
            <ContactItem icon={<FaLink />} value={user.website} isWebsite />
            <AddressItem address={user.address} />
          </div>
          <span className="my-4" />
          <CompanyItem />
        </div>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
