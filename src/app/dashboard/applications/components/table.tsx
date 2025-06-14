"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ApplicationType } from "@/app/careers/Types/application";
import List from "./list";
import Loader from "@/components/ui/loader";

const Table = () => {
  const getAppliations = async (): Promise<ApplicationType[]> => {
    try {
      const url = "http://localhost:3000/api/applications";
      const response = await axios.get(url);
      const applications = response.data.data;
      console.log("Applications fetched:", applications);
      return applications;
    } catch (error) {
      console.log("Error fetching applications:", error);
      return [];
    }
  };

  const { data: applications, isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: getAppliations,
  });

  if (isLoading) return <Loader />;
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
                Move Bin
              </th>
            </tr>
          </thead>
          {/* Tabe Data */}
          <tbody className="divide-y divide-gray-200">
            {applications &&
              applications?.map((application: any, i: any) => (
                <List application={application} i={i} key={i} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
