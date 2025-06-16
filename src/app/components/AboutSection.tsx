import { PinContainer } from "@/components/ui/3d-pin";
import AnimatedContent from "@/components/ui/animated-content";
import CountUp from "@/components/ui/count-up";
import ShinyText from "@/components/ui/shiny-text";
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedContent direction="horizontal" reverse={true} duration={1}>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Leading Innovation in
                <span className="text-primary"> Technology Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are a forward-thinking technology company dedicated to
                delivering cutting-edge solutions that transform businesses and
                drive digital innovation. With years of expertise, we help
                organizations navigate the complex technological landscape.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our team of expert developers, designers, and strategists work
                collaboratively to create solutions that not only meet today's
                challenges but anticipate tomorrow's opportunities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <CountUp
                      from={0}
                      to={30}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {" "}
                    <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {" "}
                    <CountUp
                      from={0}
                      to={5}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Image/Visual */}
          <AnimatedContent direction="horizontal" duration={1}>
            <PinContainer title="Our Core Mission">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] lg:w-[30rem] h-[20rem] ">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Our Mission
                </h3>
                <ShinyText
                  speed={3}
                  className="mb-6"
                  text="To empower businesses through innovative technology solutions
                  that drive growth, efficiency, and competitive advantage in
                  the digital age."
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className=" border rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-white">
                      Innovation
                    </h4>
                    <p className="text-sm text-primary-100 text-white">
                      Cutting-edge solutions
                    </p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-white">Quality</h4>
                    <p className="text-sm text-primary-100 text-white">
                      Excellence in delivery
                    </p>
                  </div>
                </div>
              </div>
            </PinContainer>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
