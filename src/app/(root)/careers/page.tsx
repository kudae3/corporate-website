"use client";

import { Button } from "@/components/ui/button";
import { Alert } from "../components/AlertDialog";
import Link from "next/link";
import React from "react";
import FullTime from "./[type]/detail/components/fullTime";
import Internship from "./[type]/detail/components/internship";
import PartTime from "./[type]/detail/components/partTime";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const careers = [
  {
    type: "full-time",
    title: "Full-Time Careers",
    description:
      "Take your career to the next level with our full-time positions. Enjoy benefits, growth, and a dynamic work environment.",
    image: "./full-time.jpg",
  },
  {
    type: "part-time",
    title: "Part-Time Opportunities",
    description:
      "Flexible hours for those seeking work-life balance. Join us as a part-time team member and grow your career at your own pace.",
    image: "part-time.jpg",
  },
  {
    type: "internship",
    title: "Internship Programs for students",
    description:
      "Kickstart your career with hands-on experience. Our internship program is designed for students eager to learn and contribute.",
    image: "intern.jpg",
  },
];

const Page = () => {
  return (
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Join{" "}
          <span className="text-primary" style={{ fontWeight: "600" }}>
            Our Team
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We offer a range of career opportunities to suit your lifestyle and
          professional goals. Whether you're looking for part-time flexibility,
          full-time commitment, or an internship to kickstart your career, we
          have something for you.
        </p>
      </div>
      <div className="space-y-14">
        {careers.map((career, index) => (
          <div
            key={career.type}
            className={`group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  alt={career.type}
                  src={career.image}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6">
                <div className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {career.type}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {career.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {career.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="default"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      Apply Now
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Link href={`/careers/${career.type.toLocaleLowerCase()}`}>
                      Apply Now
                    </Link>
                  </Button>
                </SignedIn>
                <Alert
                  title={`${career.title} Details`}
                  action="Got it!"
                  trigger={
                    <Button
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
                    >
                      Learn More →
                    </Button>
                  }
                >
                  {career.type === "full-time" ? (
                    <FullTime />
                  ) : career.type === "part-time" ? (
                    <PartTime />
                  ) : career.type === "internship" ? (
                    <Internship />
                  ) : null}
                </Alert>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
