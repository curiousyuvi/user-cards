import { Dispatch, SetStateAction } from "react";
import { User } from "./User"

export type UserContext = {
    users: User[];
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    loading: boolean;
    userModalOpen: boolean;
    setUserModalOpen: Dispatch<SetStateAction<boolean>>;

}