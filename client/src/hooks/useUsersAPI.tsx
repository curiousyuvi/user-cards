import axios from "axios";
import { User } from "../interfaces/User";

const usersApiEndpoint = "http://localhost:5000/api";
const userApiAxiosInstance = axios.create({ baseURL: usersApiEndpoint });

const getUsers: () => Promise<User[]> = async () => {
  try {
    const response = await userApiAxiosInstance({
      url: "/users",
      method: "get",
    });
    if (response.status === 200) {
      return response.data.users;
    } else return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const useUsersAPI = () => {
  return { getUsers };
};

export default useUsersAPI;
