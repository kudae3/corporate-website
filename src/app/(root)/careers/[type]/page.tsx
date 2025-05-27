import React from "react";
import Careers from "./components/careers";

const careers = [
  {
    _id: 1,
    type: "Internship",
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
    type: "Internship",
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
    type: "Internship",
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

const page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;

  return <Careers careers={careers} type={type} />;
};

export default page;
