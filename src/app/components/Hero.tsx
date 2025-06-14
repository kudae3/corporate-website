import React from "react";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/shiny-text";

const Hero = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900 pt-12 md:pt-18 lg:pt-0">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-0">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Transform Your Business with
            <strong className="text-primary"> Modern Technology </strong>
            Solutions
          </h1>

          <ShinyText
            text="Stay ahead of the competition with cutting-edge digital solutions.
            We help businesses leverage technology to streamline operations,
            enhance customer experiences, and drive sustainable growth."
            disabled={false}
            speed={3}
            className="mt-4"
          />

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Button
              variant="default"
              className="cursor-pointer hover:bg-primary duration-300 transition-colors"
            >
              Get Started
            </Button>

            <Button variant="link" className="cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img src="/hero.gif" alt="Meeting illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
