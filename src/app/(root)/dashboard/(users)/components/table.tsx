"use client";

import React, { useEffect } from "react";
import Actions from "./actions";
import axios from "axios";
import { UserType } from "@/app/(root)/careers/Types/user";
import { useAuthContext } from "@/context/AuthContext";

const Table = () => {
  const [users, setUsers] = React.useState<UserType[]>([]);

  // auth User
  const authContext = useAuthContext();
  const userData = authContext?.userData;

  useEffect(() => {
    if (!userData) return;
    const fetchUsers = () => {
      axios
        .get("http://localhost:3000/api/users")
        .then((response) => {
          const allUsers = response.data.data;
          console.log("All Users:", allUsers);

          const users = allUsers.filter((user: UserType) => {
            return user?._id !== userData?._id;
          });
          console.log("Filtered Users:", users);

          setUsers(users);
        })
        .catch((e) => {
          console.error("Error fetching users", e.message);
        });
    };
    fetchUsers();
  }, [userData]);

  return (
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
              users?.map((user) => (
                <tr key={user?._id}>
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
                    <Actions user={user} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
