"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const proyectosData = [
  {
    id: 1,
    titulo: "VTSearch",
    descripcion: "Traductor con IA de lenguaje natural a lenguaje de consulta de VirusTotal (Google Thread Intelligence).",
    imagen: "/images/projects/VTSearch.gif",
    etiqueta: ["Todos", "Web", "IA"],
    gitUrl: "https://github.com/arturoaguileraa/vtsearch",
    previewUrl: "/",
    soloCodigo: true,
  },
  {
    id: 2,
    titulo: "Trabajo de Fin de Grado en Matemáticas",
    descripcion: "Trabajo matemático sobre integración en variedades y el teorema de Stokes.",
    imagen: "/images/projects/tfg.png",
    etiqueta: ["Todos", "Investigación"],
    gitUrl: "/",
    previewUrl: "/TFG-Aguilera-González-Arturo.pdf",
    soloVer: true,
  },
  {
    id: 3,
    titulo: "buche - Trabajo de Fin de Grado en Ingeniería Informática",
    descripcion: "Aplicación web para la gestión de pedidos en tiempo real, organizadores de menús para establecimientos y visualización de menús.",
    imagen: "/images/projects/buche.png",
    etiqueta: ["Todos", "Web"],
    gitUrl: "https://github.com/arturoaguileraa/buche-frontend",
    previewUrl: "https://bucheapp.vercel.app/",
  },
  {
    id: 4,
    titulo: "Portafolio Web",
    descripcion: "¡Este sitio web!",
    imagen: "/images/projects/portfolio.png",
    etiqueta: ["Todos", "Web"],
    gitUrl: "https://github.com/arturoaguileraa/arturoaguilera.me",
    previewUrl: "/",
  },
];

const SeccionProyectos = () => {
  const [etiqueta, setEtiqueta] = useState("Todos");
  const ref = useRef(null);
  const estaEnVista = useInView(ref, { once: true });

  const manejarCambioEtiqueta = (nuevaEtiqueta) => {
    setEtiqueta(nuevaEtiqueta);
  };

  const proyectosFiltrados = proyectosData.filter((proyecto) =>
    proyecto.etiqueta.includes(etiqueta)
  );

  const variantesTarjeta = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="proyectos">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={manejarCambioEtiqueta}
          name="Todos"
          isSelected={etiqueta === "Todos"}
        />
        <ProjectTag
          onClick={manejarCambioEtiqueta}
          name="Web"
          isSelected={etiqueta === "Web"}
        />
        <ProjectTag
          onClick={manejarCambioEtiqueta}
          name="Investigación"
          isSelected={etiqueta === "Investigación"}
        />
        <ProjectTag
          onClick={manejarCambioEtiqueta}
          name="IA"
          isSelected={etiqueta === "IA"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {proyectosFiltrados.map((proyecto, index) => (
          <motion.li
            key={index}
            variants={variantesTarjeta}
            initial="initial"
            animate={estaEnVista ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={proyecto.id}
              title={proyecto.titulo}
              description={proyecto.descripcion}
              imgUrl={proyecto.imagen}
              gitUrl={proyecto.gitUrl}
              previewUrl={proyecto.previewUrl}
              onlySee={proyecto.soloVer}
              onlyCode={proyecto.soloCodigo}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SeccionProyectos;
