import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import routes from "@/routes";
import AnimatedContent from "@/components/ui/animated-content";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A scalable e-commerce solution with advanced analytics management.",
      image: "./e-commerce.jpg",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      metrics: "300% increase in sales",
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      description:
        "HIPAA-compliant mobile application for patient management and telemedicine.",
      image: "./health-care.jpg",
      technologies: ["React Native", "Firebase", "AWS"],
      metrics: "50K+ active users",
    },
    {
      title: "Analytics Dashboard",
      category: "Data Solutions",
      description:
        "Real-time business intelligence dashboard with predictive analytics.",
      image: "./dashboard.jpg",
      technologies: ["React", "Python", "Apache Kafka"],
      metrics: "90% faster insights",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedContent direction="horizontal" duration={1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-sm lg:text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              Discover how we've helped businesses transform through technology
            </p>
          </div>
        </AnimatedContent>

        {/* Projects Grid */}
        <AnimatedContent duration={1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image/Icon */}
                <div className="h-48 flex items-center justify-center text-6xl">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt=""
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-secondary font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="bg-primary-50 rounded-lg mb-4">
                    <div className="font-semibold text-sm">
                      Result: {project.metrics}
                    </div>
                  </div>

                  {/* View Project Link */}
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition-colors"
                  >
                    View Details
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="ghost"
            asChild
            className="cursor-pointer hover:bg-primary duration-300 transition-colors"
          >
            <Link href="#">
              View All Projects
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
