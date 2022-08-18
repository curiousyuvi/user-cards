import UserCardsList from "../components/UserCardsList";
import useUser from "../hooks/useUser";
import UserModal from "../components/UserModal";
import UsersLoadingSkeleton from "../components/UsersLoadingSkeleton";

const Home = () => {
  const { loading } = useUser();

  return (
    <div className="p-8 pt-60 flex flex-col justify-start items-center">
      {loading ? (
        <UsersLoadingSkeleton />
      ) : (
        <>
          <UserCardsList />
          <UserModal />
        </>
      )}
    </div>
  );
};

export default Home;
