"use client";
import { ApplicationType } from "@/app/careers/Types/application";
import React from "react";
import Delete from "./delete";
import { Alert } from "@/app/components/AlertDialog";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

const List = ({ application, i }: { application: ApplicationType; i: any }) => {
  const downloadCV = async () => {
    try {
      const response = await fetch(application?.resume);
      if (!response.ok) throw new Error("Network error");

      const blob = await response.blob();
      saveAs(blob, `${application?.user?.username}-resume.pdf`);
    } catch (error) {
      console.error("Error downloading CV:", error);
      toast.error("Failed to download CV. Please try again.");
    }
  };
  return (
    <Alert
      title={`Application Details of ${application?.user?.username}`}
      action="Download CV"
      onAction={downloadCV}
      trigger={
        <tr key={application?._id} className="hover:bg-gray-800 cursor-pointer">
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
            <div onClick={(e) => e.stopPropagation()}>
              <Delete application={application} />
            </div>
          </td>
        </tr>
      }
    >
      <div className="flex flex-col gap-2 space-y-3 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 dark:hover:scrollbar-thumb-gray-600">
        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold">Username:</span>{" "}
          <p>{application?.user?.username}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Email:</span>{" "}
          <p>{application?.user?.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Title:</span>{" "}
          <p>{application?.career?.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Type:</span>{" "}
          <p>{application?.career?.type}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Cover Letter:</span>{" "}
          <p>{application?.coverLetter}</p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold mb-2">Resume Preview:</span>
          <div className="w-full h-96 border rounded-lg overflow-hidden bg-gray-50">
            <iframe
              src={application?.resume}
              className="w-full h-full border-0"
              title="Resume Preview"
            />
          </div>
          <div className="mt-2">
            <a
              href={application?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline text-sm"
            >
              Open Full PDF
            </a>
          </div>
        </div>
      </div>
    </Alert>
  );
};

export default List;
