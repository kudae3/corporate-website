import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Filter() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-slate-700 border-0 cursor-pointer focus:outline-none focus:ring-0">
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent className="bg-slate-700 border-0">
        <SelectGroup>
          <SelectItem className="cursor-pointer" value="full-time">
            Full-time
          </SelectItem>
          <SelectItem className="cursor-pointer" value="part-time">
            Part-time
          </SelectItem>
          <SelectItem className="cursor-pointer" value="internship">
            Internship
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
