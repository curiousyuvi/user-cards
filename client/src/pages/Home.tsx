import { CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UserCardsList from "../components/UserCardsList";
import useUsersAPI from "../hooks/useUsersAPI";
import { User } from "../interfaces/User";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { getUsers } = useUsersAPI();

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setUsers(await getUsers());
      setLoading(false);
    };

    loadUsers();
  }, []);

  return (
    <div className="p-8 pt-60 flex flex-col justify-start items-center">
      {loading ? <CircularProgress /> : <UserCardsList users={users} />}
    </div>
  );
};

export default Home;
