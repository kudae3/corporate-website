"use client";
import React from "react";
import Edit from "./edit";
import Ban from "./ban";
import { UserType } from "@/app/careers/Types/user";

const Actions = ({ user }: { user: UserType }) => {
  return (
    <div className="space-x-2">
      <Edit user={user} />
      {user?.role !== "admin" && <Ban user={user} />}
    </div>
  );
};

export default Actions;
