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
import { useFilteredRoleStore } from "@/lib/store/FilteredRoleStore";

export function Filter() {
  const { role, setRole } = useFilteredRoleStore();
  return (
    <Select
      value={role ?? undefined}
      onValueChange={(val: string) => setRole(val)}
    >
      <SelectTrigger className="w-[180px] bg-slate-700 border-0 cursor-pointer focus:outline-none focus-visible:ring-0 focus:ring-0">
        <SelectValue placeholder="Filter By Role" />
      </SelectTrigger>
      <SelectContent className="bg-slate-700 border-0">
        <SelectGroup>
          <SelectItem value="all" className="cursor-pointer">
            All
          </SelectItem>
          <SelectItem value="admin" className="cursor-pointer">
            Admins
          </SelectItem>
          <SelectItem value="user" className="cursor-pointer">
            Users
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
