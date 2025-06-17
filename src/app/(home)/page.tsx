import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesPreview from "../components/ServicesPreview";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactCTA from "../components/ContactCTA";

const page = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
};

export default page;
