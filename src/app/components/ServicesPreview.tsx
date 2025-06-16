import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/ui/animated-content";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";
import routes from "@/routes";

const ServicesPreview = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and frameworks including React, Vue, Angular, and Node.js. We create responsive, user-friendly interfaces with robust backend systems, ensuring optimal performance, security, and scalability for businesses of all sizes.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="./images/services/website.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="web development demo"
          />
        </div>
      ),
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android using cutting-edge technologies like React Native, Flutter, and Swift. From concept to deployment, we deliver engaging mobile experiences with seamless functionality, intuitive design, and platform-specific optimizations.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="./images/services/mobile-app.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="mobile app demo"
          />
        </div>
      ),
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services leveraging AWS, Azure, and Google Cloud platforms. We help businesses modernize their IT infrastructure, reduce costs, improve reliability, and enable seamless scaling with DevOps practices and containerization technologies.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="./images/services/cloud.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="cloud demo"
          />
        </div>
      ),
    },
    {
      title: "AI & Analytics",
      description:
        "Data-driven insights and artificial intelligence solutions that transform raw data into actionable business intelligence. Our services include machine learning model development, predictive analytics, natural language processing, and custom AI integrations to automate processes and drive innovation.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="./images/services/ai.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ai demo"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className=" text-sm lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We offer comprehensive technology solutions tailored to your business
          needs
        </p>
      </div>

      {/* Services Grid */}
      <AnimatedContent direction="vertical" duration={1}>
        <StickyScroll content={services} />
      </AnimatedContent>

      {/* CTA */}
      <div className="text-center">
        <Link href={routes.Services}>
          <Button variant="link" className="cursor-pointer mt-6">
            View All Services
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
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesPreview;
