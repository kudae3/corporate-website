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

  useEffect(() => {
    if (careers && careers.length > 0) {
      setSelectedCareer(careers[0]);
    }
  }, [careers]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Job List */}
      <aside className="border-r border-gray-200 dark:border-gray-700 pr-4 max-h-[70vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 capitalize">{type} Jobs</h2>
        <ul>
          {/* Map jobs here */}
          {careers?.map((career) => (
            <List
              key={career._id}
              career={career}
              selected={selectedCareer?._id === career._id}
              onSelect={() => setSelectedCareer(career)}
            />
          ))}
        </ul>
      </aside>
      {/* Right: Job Details */}
      {selectedCareer && <Detail career={selectedCareer} />}
    </div>
  );
};

export default Careers;
