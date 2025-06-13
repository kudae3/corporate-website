import React from "react";
import Table from "./components/table";
import Add from "./components/add";
import { Filter } from "./components/filter";

const page = () => {
  return (
    <div className="flex-1">
      <div className="mb-6 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold dark:text-white mb-2">
            Careers Management
          </h1>
          <p className="dark:text-gray-400">Manage and view all careerss</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter />
          <Add />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default page;
