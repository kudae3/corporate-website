import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const careers = [
  {
    type: "Full-Time",
    title: "Full-Time Careers",
    description:
      "Take your career to the next level with our full-time positions. Enjoy benefits, growth, and a dynamic work environment.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=764&q=80",
  },
  {
    type: "Part-Time",
    title: "Part-Time Opportunities",
    description:
      "Flexible hours for those seeking work-life balance. Join us as a part-time team member and grow your career at your own pace.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    type: "Internship",
    title: "Internship Programs for students",
    description:
      "Kickstart your career with hands-on experience. Our internship program is designed for students eager to learn and contribute.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link href={`/careers/${career.type.toLocaleLowerCase()}`}>
                    Apply Now
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  <Link
                    href={`/careers/${career.type.toLocaleLowerCase()}/detail`}
                  >
                    Learn More →
                  </Link>
                </Button>
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
