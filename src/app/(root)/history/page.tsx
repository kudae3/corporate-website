import React from "react";

const page = () => {
  const milestones = [
    {
      year: "2021",
      title: "Company Foundation",
      description:
        "Started as a small tech startup with a vision to transform businesses through innovative digital solutions.",
      achievements: [
        "Established headquarters",
        "Launched first MVP",
        "Secured seed funding",
      ],
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description:
        "Expanded our team and client base, establishing ourselves as a trusted technology partner.",
      achievements: [
        "Grew team to 25+ professionals",
        "Served 50+ clients",
        "Developed proprietary framework",
      ],
    },
    {
      year: "2023",
      title: "Market Expansion",
      description:
        "Entered new markets and launched cutting-edge solutions that revolutionized client operations.",
      achievements: [
        "International expansion",
        "AI-powered solutions launch",
        "ISO 27001 certification",
      ],
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description:
        "Became industry leaders in digital transformation with award-winning solutions and exceptional client satisfaction.",
      achievements: [
        "100+ successful projects",
        "Industry awards recognition",
        "Advanced cloud infrastructure",
      ],
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Continuing to pioneer next-generation technologies and expand our global footprint.",
      achievements: [
        "Next-gen platform launch",
        "Global partnerships",
        "Sustainable tech initiatives",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our <span className="text-primary">Journey</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From humble beginnings to industry leadership, explore the milestones
          that shaped our company's evolution and commitment to technological
          excellence.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-3 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 z-10"></div>

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                } md:w-1/2`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  {/* Year badge */}
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full font-bold text-sm mb-3">
                    {milestone.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                    {milestone.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-1">
                    <h4 className="font-semibold text-secondary dark:text-secondary mb-1 text-sm">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {milestone.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us as we continue to innovate and shape the future of
            technology. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Started
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
