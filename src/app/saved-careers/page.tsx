"use client";
import React, { useEffect, useState } from "react";
import { useSelectedCareerStore } from "@/lib/store/SelectedCareerStore";
import { CareerType } from "@/app/careers/Types/career";
import Detail from "./components/detail";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import List from "./components/list";

const Page = () => {
  const [showDetail, setShowDetail] = useState(false);
  const { selectedCareer, setSelectedCareer } = useSelectedCareerStore();

  // auth contet
  const auth = useAuthContext();
  const userData = auth?.userData;

  const savedCareers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/saved-careers/" + userData?._id
      );
      const careersData = response?.data?.data;
      const careers = careersData.map((career: any) => career.careerId || []);
      setSelectedCareer(careers[0] || null);
      console.log("Saved careers fetched:", careers);
      return careers;
    } catch (error) {
      toast.error("Failed to fetch saved careers");
      console.log("Error fetching saved careers:", error);
      return [];
    }
  };

  // queries
  const { data: careers, isLoading } = useQuery<CareerType[]>({
    queryKey: ["saved-careers", userData?._id],
    queryFn: savedCareers,
    enabled: !!userData?._id,
  });

  const handleCareerSelect = (career: CareerType) => {
    setSelectedCareer(career);
    setShowDetail(true);
  };
  return (
    <div className="container">
      {careers?.length !== 0 ? (
        <div className="space-y-6">
          {/* Header with job count */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
              Your Saved Positions
            </h2>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {careers?.length}{" "}
              {careers?.length === 1 ? "Position" : "Positions"}
            </span>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8">
            {/* Left: Job List - 2 columns */}
            <div className="lg:col-span-2 space-y-3">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-slate-800">
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
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-800">
                    <h3 className="text-white font-semibold">Job Details</h3>
                  </div>
                  <div className="p-6">
                    <Detail />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {!showDetail ? (
              /* Mobile Job List */
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-slate-800">
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
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
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
                <div className="p-6">{selectedCareer && <Detail />}</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700">
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
            No Saved Positions
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Go to the careers page to find and save positions that interest you.
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
