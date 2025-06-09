import { ApplicationType } from "@/app/(root)/careers/Types/application";
import React from "react";

const Delete = ({ application }: { application: ApplicationType }) => {
  return <div>Delete {application?.user?.username} </div>;
};

export default Delete;
