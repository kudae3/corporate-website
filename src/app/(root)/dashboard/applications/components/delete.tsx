import { ApplicationType } from "@/app/(root)/careers/Types/application";
import { Alert } from "@/app/(root)/components/AlertDialog";
import MinusIcon from "@/components/icons/MinusIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Delete = ({ application }: { application: ApplicationType }) => {
  const queryClient = useQueryClient();

  // mutation to delete application
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return axios.delete("http://localhost:3000/api/applications/" + id);
    },
    onSuccess: () => {
      console.log("Application deleted successfully from frontend");
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    onError: (error) => {
      console.error("Failed to delete application:", error);
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
