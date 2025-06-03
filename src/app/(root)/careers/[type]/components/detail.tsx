import React from "react";
import { Career } from "../../Types/career";
import { Button } from "@/components/ui/button";

const Detail = ({ career }: { career: Career }) => {
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
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {career.requirements}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
          Apply Now
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-secondary text-secondary hover:bg-secondary/10"
          onClick={() => {
            // Logic to save the job can be added here
            alert(`Job "${career._id}" saved!`);
          }}
        >
          Save Job
        </Button>
      </div>
    </div>
  );
};

export default Detail;
