import React from "react";
import { Navbar } from "components/Navbar";
import { InfoSection, MeSection } from "./sections/InfoSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AboutSection } from "./sections/AboutSection";

export const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <InfoSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </React.Fragment>
  );
};
