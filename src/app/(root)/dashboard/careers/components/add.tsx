"use client";
import { Alert } from "@/app/(root)/components/AlertDialog";
import React from "react";

const Add = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    role: "user", // default role
  });

  const Create = () => {
    console.log("Creating user with data:", formData);
    // call api
  };

  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">Users</h3>
        <Alert
          title="Create a New User"
          action="Add User"
          onAction={Create}
          trigger={
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-teal-700">
              Add User
            </button>
          }
        >
          <form action="" method="post" className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Username *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                value={formData.username}
                placeholder="Enter the username"
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                placeholder="Enter the email"
                className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-700 dark:text-white placeholder-gray-400 transition-colors"
              />
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Admin
              </span>
              <label
                htmlFor="role"
                className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-green-500 dark:bg-gray-600 dark:has-checked:bg-green-600"
              >
                <input
                  type="checkbox"
                  id="role"
                  checked={formData.role === "admin"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.checked ? "admin" : "user",
                    })
                  }
                  className="peer sr-only"
                />
                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-gray-900"></span>
              </label>
            </div>
          </form>
        </Alert>
      </div>
    </div>
  );
};

export default Add;
