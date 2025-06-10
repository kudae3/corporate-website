"use client";
import { ApplicationType } from "@/app/(root)/careers/Types/application";
import { TrashIcon } from "@/components/icons/TrashIcon";
import React from "react";

const Delete = ({ application }: { application: ApplicationType }) => {
  return (
    <button className="cursor-pointer text-red-500 hover:text-red-700 duration-300 transition-colors">
      <TrashIcon />
    </button>
  );
};

export default Delete;
