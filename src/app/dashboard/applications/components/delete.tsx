import { ApplicationType } from "@/app/careers/Types/application";
import { Alert } from "@/app/components/AlertDialog";
import MinusIcon from "@/components/icons/MinusIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Delete = ({ application }: { application: ApplicationType }) => {
  const queryClient = useQueryClient();

  // mutation to delete application
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return axios.delete("http://localhost:3000/api/applications/" + id);
    },
    onSuccess: () => {
      console.log("Application deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.warn("Application moved to bin successfully");
    },
    onError: (error) => {
      console.error("Failed to delete application:", error);
      toast.error("Failed to move application to bin");
    },
  });

  const handleDelete = () => {
    mutation.mutate(application?._id);
  };

  return (
    <Alert
      title="Move to Bin"
      action="Sure"
      onAction={handleDelete}
      trigger={
        <button className="text-red-500 hover:text-red-700 cursor-pointer">
          <MinusIcon />
        </button>
      }
    >
      <p className="text-sm dark:text-red-300 text-gray-300">
        Are you sure to move the application of{" "}
        <span className="font-bold">{application?.user?.email} </span>
        to the bin? This will permanently delete after 30 days.
      </p>
    </Alert>
  );
};

export default Delete;
