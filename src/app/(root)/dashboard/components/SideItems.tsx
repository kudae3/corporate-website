"use client";

import BlcokIcon from "@/components/icons/BlockIcon";
import { JobIcon } from "@/components/icons/JobIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideItems = () => {
  const pathName = usePathname();
  console.log("Current Path:", pathName);

  return (
    <nav className="space-y-2">
      <Link
        href="/dashboard"
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary
          ${pathName === "/dashboard" ? "bg-primary" : ""}`}
      >
        <UsersIcon />
        Users
      </Link>
      <Link
        href="/dashboard/block-list"
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary
          ${pathName === "/dashboard/block-list" ? "bg-primary" : ""}`}
      >
        <BlcokIcon />
        Block List
      </Link>
      <Link
        href="/dashboard/careers"
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary
          ${pathName === "/dashboard/careers" ? "bg-primary" : ""}`}
      >
        <JobIcon />
        Careers
      </Link>
    </nav>
  );
};

export default SideItems;
