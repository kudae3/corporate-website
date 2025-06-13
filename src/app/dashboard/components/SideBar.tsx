import React from "react";
import SideItems from "./SideItems";

const SideBar = () => {
  return (
    <div className="w-full lg:w-[20%] shadow-sm mb-10 lg:mb-0">
      <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">
        Dashboard
      </h2>
      <SideItems />
    </div>
  );
};

export default SideBar;
