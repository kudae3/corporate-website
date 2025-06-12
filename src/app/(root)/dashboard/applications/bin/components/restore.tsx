"use client";
import { ApplicationType } from "@/app/(root)/careers/Types/application";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Restore = ({ application }: { application: ApplicationType }) => {
  const queryClient = useQueryClient();

  // mutation to restore application
  const mutation = useMutation({
    mutationFn: (id: ApplicationType["_id"]) => {
      return axios.patch("http://localhost:3000/api/applications/bin", { id });
    },
    onSuccess: () => {
      console.log("Application restored successfully");
      queryClient.invalidateQueries({ queryKey: ["applications", "bin"] });
      toast.success("Application restored successfully");
    },
    onError: () => {
      console.log("Failed to restore application");
      toast.error("Failed to restore application");
    },
  });

  const handleRestore = () => {
    console.log("Restoring application with ID:", application._id);
    mutation.mutate(application._id);
  };

  return (
    <button
      onClick={handleRestore}
      className="cursor-pointer text-blue-500 hover:text-blue-700 duration-300 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
    </button>
  );
};

export default Restore;
