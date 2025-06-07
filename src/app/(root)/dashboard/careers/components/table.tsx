"use client";

import { CareerType } from "@/app/(root)/careers/Types/career";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Unban } from "../../block-list/components/unban";
import Edit from "./edit";
import Delete from "./delete";

const Table = () => {
  const getCareers = async (): Promise<CareerType[]> => {
    try {
      const response = await axios.get("http://localhost:3000/api/careers");
      const careers = response.data.data;
      console.log("Careers fetched:", careers);
      return careers;
    } catch (error: any) {
      console.error("Error fetching careers:", error);
      return [];
    }
  };

  //   queries
  const { data: careers, isLoading } = useQuery<CareerType[]>({
    queryKey: ["careers"],
    queryFn: getCareers,
  });
  if (isLoading) return <div>Loading...</div>;
  if (!careers || careers.length === 0) return <div>No careers found</div>;

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
                Title
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Salary
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {/* Tabe Data */}
          <tbody className=" divide-y divide-gray-200">
            {careers &&
              careers?.map((career, i) => (
                <tr key={career?._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-300">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-300">
                    {career.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    {career.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        career.type === "full-time"
                          ? "bg-purple-100 text-purple-800"
                          : career.type === "part-time"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-green-600"
                      }`}
                    >
                      {career.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
                    {career.salary}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <div className="flex space-x-2">
                      <Edit />
                      <Delete />
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
