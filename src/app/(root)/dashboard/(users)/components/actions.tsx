"use client";
import React from "react";
import Edit from "./edit";
import Ban from "./ban";

const Actions = ({ user }: { user: any }) => {
  return (
    <>
      <Edit user={user} />
      <Ban user={user} />
    </>
  );
};

export default Actions;
