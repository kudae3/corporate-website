import { UserType } from "@/app/(root)/careers/Types/user";
import { Alert } from "@/app/(root)/components/AlertDialog";
import { UTurnArrow } from "@/components/icons/UTurnArrow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export const Unban = ({ user }: { user: UserType }) => {
  const queryClient = useQueryClient();

  // Mutations for updating user
  const mutation = useMutation({
    mutationFn: (data: any) =>
      axios.post("http://localhost:3000/api/users/unban", { clerkId: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bannedUsers"] });
    },
    onError: (error) => {
      console.log("Failed to update user", error);
    },
  });

  const UnBanUser = () => {
    console.log(`Un-Banning user: ${user?.clerkId}`);
    mutation.mutate(user?.clerkId);
  };

  return (
    <div>
      <Alert
        title="Un-Ban User"
        action="Confirm"
        onAction={UnBanUser}
        trigger={
          <button className="text-green-600 hover:text-green-900 cursor-pointer text-center">
            <UTurnArrow />
          </button>
        }
      >
        <p className="text-red-300">
          Are you sure you want to un-ban <strong>{user?.email}</strong>?
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Un-Banning a user will allow them from accessing their account and
          using the application.
        </p>
      </Alert>
    </div>
  );
};
