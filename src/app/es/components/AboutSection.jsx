"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades de Desarrollo",
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
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Inteligencia Artificial - Universidad Internacional de La Rioja
          (UNIR), Online
        </li>
        <li>
          Diploma de Experto Universitario en Ingeniería Inversa e Inteligencia
          en Malware - GSEC, Málaga
        </li>
        <li>Matemáticas e Ingeniería Informática - Universidad de Málaga, Málaga</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
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
            Título Cambridge B2 First 🇬🇧 🇺🇸
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
            Bootcamp de Desarrollo Backend y APIs - freeCodeCamp 🔗
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
        <Image
          src="/images/about-image.png"
          width={400}
          height={400}
          className="flex shadow-xl animate-float-3dy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
          <p className="text-base lg:text-lg">
            Soy estudiante de Máster en Inteligencia Artificial con formación en
            Informática y Matemáticas. Con experiencia en
            desarrollo web con tecnologías como React, NestJS y PostgreSQL, y
            actualmente formándome en análisis de malware. Me apasiona aprender
            nuevas tecnologías y siempre busco desarrollarme profesionalmente.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educación
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificaciones
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
