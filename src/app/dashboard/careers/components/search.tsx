"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useDebounce } from "use-debounce";

import React, { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = { ...currentQuery, search: debouncedSearch };

    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  }, [debouncedSearch, router]);
  return (
    <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search..."
    />
  );
};

export default Search;
