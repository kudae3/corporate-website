"use client";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Bin = () => {
  return (
    <div>
      <Link href={"/dashboard/applications/bin"}>
        <Button
          variant="outline"
          className="cursor-pointer hover:bg-gray-500 duration-300 transition-colors"
        >
          <Trash2 className="size-4" />
          Bin
        </Button>
      </Link>
    </div>
  );
};

export default Bin;
