"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ApplicationType } from "@/app/(root)/careers/Types/application";
import Delete from "./delete";
import Restore from "./restore";

const Table = () => {
  const getAppliations = async (): Promise<ApplicationType[]> => {
    try {
      const url = "http://localhost:3000/api/applications/bin";
      const response = await axios.get(url);
      const applications = response.data.data;
      console.log("Deleted Applications fetched:", applications);
      return applications;
    } catch (error) {
      console.log("Error fetching deleted applications:", error);
      return [];
    }
  };

  const { data: applications, isLoading } = useQuery({
    queryKey: ["bin-applications"],
    queryFn: getAppliations,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!applications || applications.length === 0)
    return <div>No applications found</div>;

  return (
    <div className="w-full rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-5">
      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}

          <thead className="">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {/* Tabe Data */}
          <tbody className="divide-y divide-gray-200">
            {applications &&
              applications?.map((application: any, i: any) => (
                <tr key={application?._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-300">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-300">
                    {application.user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    {application.user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    {application.career.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        application.career.type === "full-time"
                          ? "bg-purple-100 text-purple-800"
                          : application.career.type === "part-time"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-green-600"
                      }`}
                    >
                      {application.career.type}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex space-x-1">
                      <Restore application={application} />
                      <Delete application={application} />
                    </div>
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
