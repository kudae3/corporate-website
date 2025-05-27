"use client";
import React, { useState } from "react";
import { Career } from "../../Types/career";

const List = ({
  career,
  selected,
  onSelect,
}: {
  career: Career;
  selected: Boolean;
  onSelect: () => void;
}) => {
  return (
    <>
      <li
        onClick={onSelect}
        className={`p-4 mb-2 rounded cursor-pointer dark:hover:bg-teal-800 ${
          selected ? "bg-teal-700 text-white" : "bg-gray-100 dark:bg-gray-800"
        }`}
      >
        <div className="font-medium">{career.title}</div>
        <div
          className={` ${selected ? "text-white" : "text-gray-200"} text-xs`}
        >
          {career.location}
        </div>
      </li>
    </>
  );
};

export default List;
