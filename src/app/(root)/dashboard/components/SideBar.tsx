import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="min-w-fit shadow-sm">
      <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
        Dashboard
      </h2>
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 rounded-lg hover:text-gray-700 hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          Users
        </Link>
        <Link
          href="/dashboard/careers"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 rounded-lg hover:text-gray-700 hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          Careers
        </Link>
        <Link
          href="/dashboard/block-list"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 rounded-lg hover:text-gray-700 hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          Block List
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
