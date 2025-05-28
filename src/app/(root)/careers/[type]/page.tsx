import React from "react";
import Careers from "./components/careers";
import { Career } from "../Types/career";
import { notFound } from "next/navigation";

const careers: Career[] = [
  {
    _id: 1,
    type: "internship",
    title: "Mid-Level Data Analyst",
    location: "Onsite / Remote",
    salary: "30$",
    createdAt: "2025-05-01",
    updatedAt: "2025-05-01",
    postedBy: "John Doe",
    description:
      "Kickstart your career with hands-on experience. Our internship program is designed for students eager to learn and contribute.",
  },
  {
    _id: 2,
    type: "internship",
    title: "Mid-Level Data Analyst",
    location: "Onsite / Remote",
    salary: "40$",
    createdAt: "2025-05-01",
    updatedAt: "2025-05-01",
    postedBy: "John Doe",
    description:
      "Kickstart your career with hands-on experience. Our internship program is designed for students eager to learn and contribute.",
  },
  {
    _id: 3,
    type: "internship",
    title: "Mid-Level Data Analyst",
    location: "Onsite / Remote",
    salary: "60$",
    createdAt: "2025-05-01",
    updatedAt: "2025-05-01",
    postedBy: "John Doe",
    description:
      "Kickstart your career with hands-on experience. Our internship program is designed for students eager to learn and contribute.",
  },
];

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

  return <Careers careers={careers} type={type as Career["type"]} />;
};

export default page;
