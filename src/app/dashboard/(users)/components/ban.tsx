"use client";
import { UserType } from "@/app/careers/Types/user";
import { Alert } from "@/app/components/AlertDialog";
import BanUserIcon from "@/components/icons/BanUserIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const Ban = ({ user }: { user: UserType }) => {
  const queryClient = useQueryClient();

  // Mutations for banning user
  const mutation = useMutation({
    mutationFn: (data: any) => {
      return axios.post("http://localhost:3000/api/users/ban", {
        clerkId: data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User banned successfully");
    },
    onError: (error) => {
      console.log("Failed to ban user", error);
      toast.error("Failed to ban user");
    },
  });

  const BanUser = () => {
    console.log(`Banning user: ${user?.clerkId}`);
    if (user?.role === "admin") {
      console.log("Cannot ban an admin user");
      return;
    }
    mutation.mutate(user?.clerkId);
  };
  return (
    <Alert
      title="Ban User"
      action="Confirm"
      onAction={BanUser}
      trigger={
        <button className="text-red-600 hover:text-red-900 cursor-pointer">
          <BanUserIcon />
        </button>
      }
    >
      <p className="text-red-300">
        Are you sure you want to ban <strong>{user?.email}</strong>?
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Banning a user will prevent them from accessing their account and using
        the application.
      </p>
    </Alert>
  );
};

export default Ban;
