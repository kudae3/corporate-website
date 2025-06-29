"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

export function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "all";

  const handleChange = (val: string) => {
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = { ...currentQuery, type: val };

    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <Select value={type ?? undefined} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px] bg-slate-700 border-0 cursor-pointer focus:outline-none focus-visible:ring-0 focus:ring-0">
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent className="bg-slate-700 border-0">
        <SelectGroup>
          <SelectItem value="all" className="cursor-pointer">
            All
          </SelectItem>
          <SelectItem value="full-time" className="cursor-pointer">
            Full-time
          </SelectItem>
          <SelectItem value="part-time" className="cursor-pointer">
            Part-time
          </SelectItem>
          <SelectItem value="internship" className="cursor-pointer">
            Internship
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
