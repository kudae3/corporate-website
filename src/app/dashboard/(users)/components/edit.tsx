"user client";
import { UserType } from "@/app/careers/Types/user";
import { Alert } from "@/app/components/AlertDialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { EditIcon } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Edit = ({ user }: { user: UserType }) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = React.useState({
    clerkId: user?.clerkId || "",
    username: user?.username || "",
    email: user?.email || "",
    role: user?.role || "user",
  });

  const [nameError, setNameError] = React.useState(false);

  useEffect(() => {
    setNameError(formData.username.length < 1);
  }, [formData.username]);

  // Mutations for updating user
  const mutation = useMutation({
    mutationFn: (data: typeof formData) =>
      axios.patch("http://localhost:3000/api/users", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User updated successfully");
    },
    onError: (error) => {
      console.log("Failed to update user", error);
      toast.error("Failed to update user");
    },
  });

  const Confirm = () => {
    mutation.mutate(formData);
  };

  return (
    <Alert
      title="Edit User"
      action="Submit"
      onAction={Confirm}
      btnDisabled={formData.username === ""}
      trigger={
        <button className="text-blue-600 hover:text-blue-900 cursor-pointer">
          <EditIcon />
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
          {nameError && (
            <p className="text-xs text-start text-red-500 mt-2">
              Username is required.
            </p>
          )}
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
            disabled
            value={formData.email}
            placeholder="Enter the email"
            className="w-full px-4 py-3 rounded-lg focus:outline-hidden dark:bg-gray-800 dark:text-white placeholder-gray-400 transition-colors"
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
            <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-slate-950"></span>
          </label>
        </div>
      </form>
    </Alert>
  );
};

export default Edit;
