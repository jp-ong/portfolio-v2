import React from "react";
import { Navbar } from "components/Navbar";
import Head from "next/head";
import { InfoSection } from "./sections/InfoSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AboutSection } from "./sections/AboutSection";

export const Layout = () => {
  return (
    <React.Fragment>
      <Head>
        <title>John Paul Ong | Full Stack Web Developer</title>
        <meta
          name="description"
          content="I'm a front-end and back-end developer from Metro Manila, Philippines. I enjoy taking on complex designs and visualized concepts and implementing them into simple and beautiful systems for production. I love challenging the obstacles I face, while doing it in the most elegant and efficient way I am capable of."
        />
      </Head>
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
