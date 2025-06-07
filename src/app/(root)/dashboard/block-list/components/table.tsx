"use client";

import { UserType } from "@/app/(root)/careers/Types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Unban } from "./unban";

export const Table = () => {
  const bannedusers = async (): Promise<UserType[]> => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      const allUsers = response.data.data;
      const bannedUsers = allUsers.filter((user: UserType) => {
        return user?.clerkProfile?.banned === true;
      });
      console.log("Banned Users:", bannedUsers);
      return bannedUsers;
    } catch (e: any) {
      console.log("Error fetching banned users", e.message);
      return [];
    }
  };

  // Queries
  const { data: users, isLoading } = useQuery<UserType[]>({
    queryKey: ["bannedUsers"],
    queryFn: bannedusers,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!users || users.length === 0) return <div>No Unbanned users</div>;

  return (
    <div className="w-full rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-5">
      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}

          <thead className="">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {/* Tabe Data */}
          <tbody className=" divide-y divide-gray-200">
            {users &&
              users?.map((user) => (
                <tr key={user?._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
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
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
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
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                    <Unban user={user} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
