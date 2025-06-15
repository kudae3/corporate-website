import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and frameworks.",
      icon: "💻",
      features: ["React/Next.js", "Node.js", "Cloud Integration"],
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      features: ["React Native", "Flutter", "Native Development"],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "☁️",
      features: ["AWS/Azure", "DevOps", "Microservices"],
    },
    {
      title: "AI & Analytics",
      description:
        "Data-driven insights and artificial intelligence solutions.",
      icon: "🤖",
      features: ["Machine Learning", "Data Analytics", "Automation"],
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive technology solutions tailored to your
            business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-slate-950 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white cursor-pointer transition-colors hover:text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-primary-100 mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-300 group-hover:text-primary-200"
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="ghost"
            className="cursor-pointer hover:bg-primary duration-300 transition-colors mt-6"
          >
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
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
