"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShinyText from "@/components/ui/shiny-text";
import AnimatedContent from "@/components/ui/animated-content";
import { GlareCard } from "@/components/ui/glare-card";

const page = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and frameworks for optimal performance and user experience.",
      features: [
        "React/Next.js Development",
        "Full-Stack Solutions",
        "Cloud Deployment",
        "Performance Optimization",
      ],
      pricing: "Starting at $5,000",
      timeline: "4-12 weeks",
      popular: false,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "Flutter Development",
        "Offline Functionality",
      ],
      pricing: "Starting at $8,000",
      timeline: "6-16 weeks",
      popular: true,
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses.",
      features: [
        "AWS/Azure Migration",
        "Microservices Architecture",
        "Container Orchestration",
        "Cloud Security",
      ],
      pricing: "Starting at $3,000",
      timeline: "2-8 weeks",
      popular: false,
    },
    {
      title: "AI & Data Analytics",
      description:
        "Data-driven insights, machine learning solutions, and artificial intelligence implementations.",
      features: [
        "Machine Learning Models",
        "Data Pipeline Development",
        "Business Intelligence",
        "Predictive Analytics",
      ],
      pricing: "Starting at $10,000",
      timeline: "8-20 weeks",
      popular: false,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: [
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Analytics Dashboard",
      ],
      pricing: "Starting at $7,000",
      timeline: "6-14 weeks",
      popular: false,
    },
    {
      title: "Digital Transformation",
      description:
        "Comprehensive digital transformation consulting and implementation for legacy systems.",
      features: [
        "Legacy System Modernization",
        "Process Automation",
        "Digital Strategy Consulting",
      ],
      pricing: "Custom Quote",
      timeline: "12-24 weeks",
      popular: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, goals, and current systems to create a comprehensive project roadmap.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team creates detailed designs and technical architecture tailored to your specific needs.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices, with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support, maintenance, and optimization.",
    },
  ];

  const benefits = [
    {
      title: "Expert Team",
      description:
        "Work with experienced developers and technology consultants",
      icon: "👥",
    },
    {
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients",
      icon: "📈",
    },
    {
      title: "Modern Technology",
      description: "Latest tools and frameworks for cutting-edge solutions",
      icon: "⚡",
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance and support after project delivery",
      icon: "🛠️",
    },
  ];

  return (
    <div className="container space-y-36">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our{" "}
          <span className="text-primary" style={{ fontWeight: "600" }}>
            Services
          </span>
        </h2>
        <ShinyText
          text="Expert guidance to help you make informed digital decisions. Technology audits, digital roadmaps, and strategic planning tailored to your business goals. Ready to ride the digital tide? Let's discuss how we can help your business thrive in the digital age"
          disabled={false}
          speed={3}
          className="max-w-3xl mx-auto"
        />
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <GlareCard key={index}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {service.description}
            </p>

            <div className="space-y-2 mb-3">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 text-primary mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-lg font-bold text-primary">
                    {service.pricing}
                  </div>
                  <div className="text-sm text-gray-500">
                    {service.timeline}
                  </div>
                </div>
              </div>
            </div>
          </GlareCard>
        ))}
      </div>

      {/* Process Section */}
      <AnimatedContent duration={1}>
        <section className="bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Benefits Section */}
      <AnimatedContent duration={1}>
        <section className="bg-gray-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="text-primary">Us</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through expertise, innovation,
                and dedication
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center  rounded-xl p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>
    </div>
  );
};

export default page;
