import React from "react";

const page = async () => {
  return (
    <div className="flex-1">
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-white mb-2">
          User Management
        </h1>
        <p className="dark:text-gray-400">
          Manage and view all registered users
        </p>
      </div>

      {/* Table */}
      <div className="w-full rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-5">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Users</h3>
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-teal-700">
              Add User
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {[
                {
                  id: 1,
                  name: "John Doe",
                  email: "john@example.com",
                  role: "Admin",
                },
                {
                  id: 2,
                  name: "Jane Smith",
                  email: "jane@example.com",
                  role: "User",
                },
                {
                  id: 3,
                  name: "Mike Johnson",
                  email: "mike@example.com",
                  role: "User",
                },
                {
                  id: 4,
                  name: "Sarah Wilson",
                  email: "sarah@example.com",
                  role: "Moderator",
                },
                {
                  id: 5,
                  name: "David Brown",
                  email: "david@example.com",
                  role: "User",
                },
              ].map((user) => (
                <tr key={user.id} className="hover:">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-700">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-300">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-800"
                          : user.role === "Moderator"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ul className="flex justify-center gap-1 text-gray-900 dark:text-white">
        <li>
          <a
            href="#"
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            1
          </a>
        </li>

        <li className="block size-8 rounded border border-indigo-600 bg-indigo-600 text-center text-sm/8 font-medium text-white">
          2
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default page;
