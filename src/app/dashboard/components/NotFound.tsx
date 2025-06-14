import React from "react";

interface NotFoundProps {
  title: string;
}

const NotFound = ({ title = "" }: NotFoundProps) => {
  const defaultIcon = (
    <svg
      className="w-16 h-16 text-gray-400 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 21H9a1 1 0 01-1-1v-1a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 01-1 1z"
      />
    </svg>
  );

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 "
      role="status"
      aria-live="polite"
    >
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4" aria-hidden="true">
          {defaultIcon}
        </div>

        {/* Title */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          {`No ${title} Found. Please check your input or try again.`}
        </p>

        {/* Decorative element */}
        <div
          className="flex justify-center space-x-1 opacity-50"
          aria-hidden="true"
        >
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
