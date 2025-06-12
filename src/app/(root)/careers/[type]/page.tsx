import React from "react";
import Careers from "./components/careers";
import { notFound } from "next/navigation";
import { getCareer } from "@/lib/getCareer";
import Link from "next/link";
import routes from "@/routes";
import { CareerType } from "../Types/career";

const VALID_TYPES: CareerType["type"][] = [
  "part-time",
  "full-time",
  "internship",
];

const page = async ({
  params,
}: {
  params: Promise<{ type: CareerType["type"] }>;
}) => {
  const { type } = await params;

  if (!VALID_TYPES.includes(type as CareerType["type"])) {
    notFound();
  }

  const response = await getCareer(type);

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div>
        <nav className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-8">
          <Link href={routes.Careers} className="hover:underline">
            Careers
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="font-semibold">{type.replace("-", " ")}</span>
        </nav>
      </div>
      <Careers careers={response} type={type as CareerType["type"]} />
    </div>
  );
};

export default page;
