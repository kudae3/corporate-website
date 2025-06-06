import dbConnect from "@/database/dbConnect";
import User from "@/models/user.model";
import { authUser } from "@/lib/auth";
import Actions from "./components/actions";

const page = async () => {
  await dbConnect();

  const currentUser = await authUser();
  console.log("Authenticated User:", currentUser);

  const allUsers = await User.find().lean();
  console.log("Fetched Users:", allUsers);

  const users = allUsers.filter(
    (user) => user?.clerkId !== currentUser?.clerkId
  );
  console.log("Filtered Users:", users);

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-white mb-2">
          User Management
        </h1>
        <p className="dark:text-gray-400">
          Manage and view all registered users
        </p>
      </div>

      <div className="w-full rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-5">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            {/* Tabe Data */}
            <tbody className=" divide-y divide-gray-200">
              {users &&
                users.map((user) => (
                  <tr key={user?.clerkId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {user?.username.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-300">
                            {user?.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-800"
                            : user.role === "user"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <Actions
                        user={{
                          clerkId: user.clerkId,
                          username: user.username,
                          email: user.email,
                          role: user.role,
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
