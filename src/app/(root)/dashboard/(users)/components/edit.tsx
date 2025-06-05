"user client";
import { Alert } from "@/app/(root)/components/AlertDialog";
import EditIcon from "@/components/atoms/editIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Edit = ({ user }: { user: any }) => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    clerkId: user?.clerkId || "",
    username: user?.username || "",
    email: user?.email || "",
    role: user?.role || "user",
  });

  const Confirm = () => {
    console.log("Updating user with data:", formData);
    axios
      .patch("http://localhost:3000/api/users", formData)
      .then((resposne) => {
        router.refresh();
        console.log("User updated successfully:", resposne.data);
      })
      .catch((e) => {
        console.log("Failed to update user", e.response?.data || e.message);
      });
  };

  return (
    <Alert
      title="Edit User"
      action="Submit"
      onAction={Confirm}
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
            <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-gray-900"></span>
          </label>
        </div>
      </form>
    </Alert>
  );
};

export default Edit;
