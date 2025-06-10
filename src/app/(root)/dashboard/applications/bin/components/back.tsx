"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Back = () => {
  return (
    <Link href={"/dashboard/applications"}>
      <Button
        variant="outline"
        className="cursor-pointer hover:bg-gray-500 duration-300 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        Back
      </Button>
    </Link>
  );
};

export default Back;
