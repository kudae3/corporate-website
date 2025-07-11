"use client";
import { CareerType } from "@/app/careers/Types/career";
import React from "react";

const List = ({
  career,
  selected,
  onSelect,
}: {
  career: CareerType;
  selected: Boolean;
  onSelect: () => void;
}) => {
  return (
    <div
      onClick={onSelect}
      className={`relative p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
        selected
          ? " text-white border-primary shadow-lg transform scale-[1.02]"
          : "dark:bg-slate-900 border-gray-200 dark:border-gray-600 hover:border-primary hover:shadow-md "
      }`}
    >
      <div className="lg:flex justify-between">
        {/* Job Title */}
        <div
          className={`font-semibold text-lg mb-2 ${
            selected ? "text-white" : "text-gray-900 dark:text-white"
          }`}
        >
          {career.title}
        </div>

        {/* Location and Type */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`flex items-center gap-1 text-sm ${
              selected ? "text-white/90" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {career.location}
          </div>
          <span
            className={`text-xs ${
              selected ? "text-white/70" : "text-gray-400"
            }`}
          >
            •
          </span>
          <span
            className={`text-sm capitalize ${
              selected ? "text-white/90" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {career.type}
          </span>
        </div>
      </div>

      {/* Posted Date */}
      <div
        className={`text-xs mt-2 ${
          selected ? "text-white/70" : "text-gray-400"
        }`}
      >
        Posted: {new Date(career.createdAt).toLocaleDateString()}
      </div>

      {/* Click Indicator for Mobile */}
      <div
        className={`lg:hidden absolute bottom-3 right-3 ${
          selected ? "text-white/70" : "text-gray-400"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default List;
