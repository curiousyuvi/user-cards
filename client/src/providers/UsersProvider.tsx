import React, { createContext, ReactNode, useEffect, useState } from "react";
import useUsersAPI from "../hooks/useUsersAPI";
import { User } from "../interfaces/User";
import { UserContext } from "../interfaces/UserContext";

const userContext = createContext<UserContext>({
  users: [],
  user: {} as User,
  setUser: () => {},
  loading: true,
  userModalOpen: false,
  setUserModalOpen: () => {},
});

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(true);
  const [userModalOpen, setUserModalOpen] = useState<boolean>(false);

  const { getUsers } = useUsersAPI();

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setUsers(await getUsers());
      setLoading(false);
    };

    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <userContext.Provider
      value={{ users, user, setUser, loading, userModalOpen, setUserModalOpen }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext };

export default UsersProvider;
