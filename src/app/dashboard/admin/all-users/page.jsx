
import UsersTable from "@/components/dashboard/adminDashboard/UsersTable";
import { getAllUsers } from "@/lib/api/users";



const AllUsersPage = async () => {
  const users = await getAllUsers();

  return (
    <div className="max-w-6xl mx-auto space-y-7 my-15">
      <h1 className="text-3xl font-bold">
        All Users
      </h1>

      <UsersTable users={users} />
    </div>
  );
};

export default AllUsersPage;