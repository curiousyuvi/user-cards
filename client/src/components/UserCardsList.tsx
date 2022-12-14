import useUser from "../hooks/useUser";
import UserCardItem from "./UserCardItem";

const UserCardsList = () => {
  const { users } = useUser();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-32">
      {users.map((user) => {
        return <UserCardItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserCardsList;
