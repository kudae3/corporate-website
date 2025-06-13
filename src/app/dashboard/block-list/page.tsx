import React from "react";
import { Table } from "./components/table";

const page = () => {
  return (
    <div className="flex-1">
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-white mb-2">
          Block User Management
        </h1>
        <p className="dark:text-gray-400">Manage and view all block users</p>
      </div>
      <Table />
    </div>
  );
};

export default page;
