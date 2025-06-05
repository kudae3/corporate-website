"use client";
import { Alert } from "@/app/(root)/components/AlertDialog";
import BanIcon from "@/components/atoms/banIcon";
import { clerkClient } from "@clerk/nextjs/server";
import axios from "axios";
import React from "react";

const Ban = ({ user }: { user: any }) => {
  const BanUser = () => {
    console.log(`Banning user: ${user?.clerkId}`);
    const clerkId = user?.clerkId;
    axios
      .post("http://localhost:3000/api/users/ban", { clerkId })
      .then(() => {
        console.log("User banned successfully");
      })
      .catch((error) => {
        console.error("Error banning user:", error);
      });
  };
  return (
    <Alert
      title="Ban User"
      action="Confirm"
      onAction={BanUser}
      trigger={
        <button className="text-red-600 hover:text-red-900 cursor-pointer">
          <BanIcon />
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
