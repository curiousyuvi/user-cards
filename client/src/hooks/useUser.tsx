import { useContext } from "react";
import { userContext } from "../providers/UsersProvider";

const useUser = () => useContext(userContext);

export default useUser;
