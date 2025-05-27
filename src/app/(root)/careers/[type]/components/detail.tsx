import React from "react";
import { Career } from "../../Types/career";

const Detail = ({ career }: { career: Career }) => {
  return (
    <section className="pl-4">
      <h3 className="text-2xl font-bold mb-2">{career.title}</h3>
      <div className="mb-2 text-gray-500">
        {career.location} | {career.type}
      </div>
      <div className="mb-4 text-teal-600 font-semibold">{career.salary}</div>
      <div className="mb-6 whitespace-pre-line">{career.description}</div>
      <div className="text-xs text-gray-400">Posted: {career.createdAt}</div>
    </section>
  );
};

export default Detail;
