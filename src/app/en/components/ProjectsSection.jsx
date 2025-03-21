"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "VTSearch",
    description: "AI-powered translator from natural language to Virus Total (Google Thread Intelligence) query language",
    image: "/images/projects/VTSearch.gif",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/arturoaguileraa/vtsearch",
    previewUrl: "/",
    onlyCode: true,
  },
  {
    id: 2,
    title: "Bachelor's Thesis in Mathematics",
    description: "Mathematical Paper on Integration in Manifolds and Stokes’ Theorem.",
    image: "/images/projects/tfg.png",
    tag: ["All", "Research"],
    gitUrl: "/",
    previewUrl: "/TFG-Aguilera-González-Arturo.pdf",
    onlySee: true,
  },
  {
    id: 3,
    title: "buche - Bachelor's Thesis in Computer Science",
    description: "Web application for real-time order management, menu organizers for establishments, and menu visualization.",
    image: "/images/projects/buche.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arturoaguileraa/buche-frontend",
    previewUrl: "https://bucheapp.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Web",
    description: "This website!",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arturoaguileraa/arturoaguilera.me",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Research"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onlySee={project.onlySee}
              onlyCode={project.onlyCode}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
