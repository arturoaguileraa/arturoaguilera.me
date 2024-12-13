"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Dev Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>NestJS</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>...</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Artificial Intelligence - Universidad Internacional de La Rioja
          (UNIR), Online
        </li>
        <li>
          University Expert Diploma in Reverse Engineering and Malware
          Intelligence - GSEC, Málaga
        </li>
        <li>Mathematic & Computer Science - University of Málaga, Málaga</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://verificationservice.cambridgeenglish.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2 text-blue-400 hover:underline"
          >
            Cambridge B2 First Title 🇬🇧 🇺🇸
          </a>
          {" "}(REF: 187ES0650049)
        </li>

        <li>

          <a
            href="https://www.freecodecamp.org/certification/arturoaguilera/back-end-development-and-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2 text-blue-400 hover:underline"
          >
            Backend Development and APIs Bootcamp - freeCodeCamp 🔗
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Master&apos;s student in Artificial Intelligence with a
            background in Computer Science and Mathematics. Experienced in web
            development with technologies like React, NestJS, and PostgreSQL,
            and currently training in malware analysis. I am passionate about
            learning new technologies and always looking to further develop
            professionally.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
