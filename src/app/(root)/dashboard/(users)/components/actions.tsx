"use client";
import React from "react";
import Edit from "./edit";
import Ban from "./ban";
import { UserType } from "@/app/(root)/careers/Types/user";

const Actions = ({ user }: { user: UserType }) => {
  return (
    <>
      <Edit user={user} />
      <Ban user={user} />
    </>
  );
};

export default Actions;
