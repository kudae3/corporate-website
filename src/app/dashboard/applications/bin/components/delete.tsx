"use client";
import { ApplicationType } from "@/app/careers/Types/application";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Delete = ({ application }: { application: ApplicationType }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return axios.delete("http://localhost:3000/api/applications/bin/" + id);
    },
    onSuccess: () => {
      console.log("Application permanently deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["applications", "bin"] });
      toast.success("Application deleted successfully");
    },
    onError: () => {
      console.log("Failed to delete application");
      toast.error("Failed to delete application");
    },
  });

  const handleDelete = () => {
    console.log("Deleting application with ID:", application._id);

    mutation.mutate(application._id);
  };

  return (
    <button
      onClick={handleDelete}
      className="cursor-pointer text-red-500 hover:text-red-700 duration-300 transition-colors"
    >
      <TrashIcon />
    </button>
  );
};

export default Delete;
