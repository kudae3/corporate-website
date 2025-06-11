"use client";
import { ApplicationType } from "@/app/(root)/careers/Types/application";
import React from "react";
import Delete from "./delete";
import { Alert } from "@/app/(root)/components/AlertDialog";

const List = ({ application, i }: { application: ApplicationType; i: any }) => {
  const showDetails = () => {
    console.log("Show details for application:", application?._id);
    // need to download the CV
  };
  return (
    <Alert
      title={`Application Details of ${application?.user?.username}`}
      action="Download CV"
      onAction={showDetails}
      trigger={
        <tr
          key={application?._id}
          className="hover:bg-gray-800 cursor-pointer"
          onClick={showDetails}
        >
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-300">
            {i + 1}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-300">
            {application?.user?.username}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
            {application?.user?.email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
            {application?.career?.title}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-300">
            <span
              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                application?.career?.type === "full-time"
                  ? "bg-purple-100 text-purple-800"
                  : application?.career?.type === "part-time"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-green-600"
              }`}
            >
              {application?.career?.type}
            </span>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <Delete application={application} />
          </td>
        </tr>
      }
    >
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-semibold">Username:</span>{" "}
          {application?.user?.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          {application?.user?.email}
        </p>
        <p>
          <span className="font-semibold">Title:</span>{" "}
          {application?.career?.title}
        </p>
        <p>
          <span className="font-semibold">Type:</span>{" "}
          {application?.career?.type}
        </p>
        <p>
          <span className="font-semibold">Cover Letter:</span>{" "}
          {application?.coverLetter}
        </p>
        <p>
          <span className="font-semibold">Resume:</span>{" "}
          <a
            href={application?.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            View Resume (PDF)
          </a>
        </p>
      </div>
    </Alert>
  );
};

export default List;
