import React from "react";
import Careers from "./components/careers";
import { notFound } from "next/navigation";
import { getCareer } from "@/lib/getCareer";
import { Career } from "../Types/career";

const VALID_TYPES: Career["type"][] = ["part-time", "full-time", "internship"];

const page = async ({
  params,
}: {
  params: Promise<{ type: Career["type"] }>;
}) => {
  const { type } = await params;

  if (!VALID_TYPES.includes(type as Career["type"])) {
    notFound();
  }

  const response = await getCareer(type);

  return (
    <div className="container">
      <Careers careers={response} type={type as Career["type"]} />
    </div>
  );
};

export default page;
