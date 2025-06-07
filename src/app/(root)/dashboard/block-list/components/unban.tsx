import { UserType } from "@/app/(root)/careers/Types/user";
import { UTurnArrow } from "@/components/icons/UTurnArrow";
import React from "react";

export const Unban = ({ user }: { user: UserType }) => {
  return (
    <div>
      <button className="text-green-600 hover:text-green-900 cursor-pointer text-center">
        <UTurnArrow />
      </button>
    </div>
  );
};
