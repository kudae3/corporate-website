import Link from "next/link";
import React from "react";

const careers = [
  {
    type: "Part-Time",
    title: "Part-Time Opportunities",
    location: "Remote / Flexible",
    description:
      "Flexible hours for those seeking work-life balance. Join us as a part-time team member and grow your career at your own pace.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    type: "Full-Time",
    title: "Full-Time Careers",
    location: "Head Office / Hybrid",
    description:
      "Take your career to the next level with our full-time positions. Enjoy benefits, growth, and a dynamic work environment.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=764&q=80",
  },
  {
    type: "Internship",
    title: "Internship Programs for students",
    location: "Onsite / Remote",
    description:
      "Kickstart your career with hands-on experience. Our internship program is designed for students eager to learn and contribute.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Page = () => {
  return (
    <div>
      <p className="text-title">Careers at Our Company</p>
      <div className="grid gap-8 md:grid-cols-3">
        {careers.map((career) => (
          <article
            key={career.type}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25 flex flex-col h-full"
          >
            <img
              alt={career.type}
              src={career.image}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 sm:p-6 flex flex-col flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {career.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {career.type} | {career.location}
              </p>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400 flex-1">
                {career.description}
              </p>
              <Link
                href={`/careers/${career.type.toLocaleLowerCase()}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
