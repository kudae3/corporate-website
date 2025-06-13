"use client";

import BlcokIcon from "@/components/icons/BlockIcon";
import { JobIcon } from "@/components/icons/JobIcon";
import PaperIcon from "@/components/icons/PaperIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideItems = () => {
  const pathName = usePathname();
  console.log("Current Path:", pathName);

  return (
    <nav className="lg:space-y-2 gap-3 lg:gap-0 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-1">
      <Link
        href="/dashboard"
        className={`flex items-center justify-center lg:justify-start border border-gray-600 lg:border-0 px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary
          ${pathName === "/dashboard" ? "bg-primary" : ""}`}
      >
        <UsersIcon />
        Users
      </Link>
      <Link
        href="/dashboard/careers"
        className={`flex items-center justify-center lg:justify-start border border-gray-600 lg:border-0 px-4 py-2  text-sm font-medium rounded-lg hover:bg-primary
          ${pathName === "/dashboard/careers" ? "bg-primary" : ""}`}
      >
        <JobIcon />
        Careers
      </Link>
      <Link
        href="/dashboard/applications"
        className={`flex items-center justify-center lg:justify-start border border-gray-600 lg:border-0 px-4 py-2  text-sm font-medium rounded-lg hover:bg-primary
          ${
            pathName.startsWith("/dashboard/applications") ? "bg-primary" : ""
          }`}
      >
        <PaperIcon />
        Applications
      </Link>
      <Link
        href="/dashboard/block-list"
        className={`flex items-center justify-center lg:justify-start border border-gray-600 lg:border-0 px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary
          ${pathName === "/dashboard/block-list" ? "bg-primary" : ""}`}
      >
        <BlcokIcon />
        <div className="whitespace-nowrap">Block List</div>
      </Link>
    </nav>
  );
};

export default SideItems;
