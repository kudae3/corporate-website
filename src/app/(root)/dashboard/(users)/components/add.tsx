"use client";
import { Alert } from "@/app/(root)/components/AlertDialog";
import React from "react";

const Add = () => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">Users</h3>
        <Alert
          action="Add User"
          trigger={
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-teal-700">
              Add User
            </button>
          }
        >
          <form action="" method="post">
            <label htmlFor="">Username</label>
            <input type="text" />
          </form>
        </Alert>
      </div>
    </div>
  );
};

export default Add;
