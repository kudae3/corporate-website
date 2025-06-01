"use client";
import React, { useEffect, useState } from "react";
import { Career } from "../../Types/career";
import List from "./list";
import Detail from "./detail";

const Careers = ({
  careers,
  type,
}: {
  careers: Career[] | null;
  type: Career["type"];
}) => {
  const [selectedCareer, setSelectedCareer] = useState<Career | undefined>();
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (careers && careers.length > 0) {
      setSelectedCareer(careers[0]);
    }
  }, [careers]);

  const handleCareerSelect = (career: Career) => {
    setSelectedCareer(career);
    setShowDetail(true);
  };

  return (
    <>
      {careers?.length !== 0 ? (
        <div className="space-y-6">
          {/* Header with job count */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
              {type} Positions
            </h2>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {careers?.length} jobs available
            </span>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8">
            {/* Left: Job List - 2 columns */}
            <div className="lg:col-span-2 space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-primary to-secondary">
                  <h3 className="text-white font-semibold">
                    Available Positions
                  </h3>
                </div>
                <div className="max-h-[70vh] overflow-y-auto p-4 space-y-3">
                  {careers?.map((career) => (
                    <List
                      key={career._id}
                      career={career}
                      selected={selectedCareer?._id === career._id}
                      onSelect={() => handleCareerSelect(career)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Job Details - 3 columns */}
            <div className="lg:col-span-3">
              {selectedCareer && (
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-secondary to-primary">
                    <h3 className="text-white font-semibold">Job Details</h3>
                  </div>
                  <div className="p-6">
                    <Detail career={selectedCareer} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {!showDetail ? (
              /* Mobile Job List */
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-primary to-secondary">
                  <h3 className="text-white font-semibold">
                    Available Positions
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {careers?.map((career) => (
                    <List
                      key={career._id}
                      career={career}
                      selected={false}
                      onSelect={() => handleCareerSelect(career)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Mobile Job Detail */
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-secondary to-primary flex items-center justify-between">
                  <h3 className="text-white font-semibold">Job Details</h3>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  {selectedCareer && <Detail career={selectedCareer} />}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center p-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            No {type} jobs available
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Please check back later for new opportunities.
          </p>
        </div>
      )}
    </>
  );
};

export default Careers;
