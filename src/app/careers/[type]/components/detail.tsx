import React from "react";
import { Button } from "@/components/ui/button";
import Submit from "./submit";
import { CareerType } from "../../Types/career";

const Detail = ({ career }: { career: CareerType }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {career.title}
        </h3>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{career.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
              {career.type}
            </span>
          </div>
        </div>

        {/* Salary Highlight */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            <span className="text-lg font-bold text-secondary">
              {career.salary}
            </span>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Job Description
        </h4>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {career.description}
          </p>
        </div>
      </div>

      {/* Job Requirements */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Job Requirements
        </h4>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: career.requirements }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Submit career={career} />

        <button className="bg-slate-800 no-underline group flex-1 cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 justify-center items-center z-10 rounded-full py-2 px-4 ring-1 ring-white/10 ">
            <p>Save Job</p>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
    </div>
  );
};

export default Detail;
