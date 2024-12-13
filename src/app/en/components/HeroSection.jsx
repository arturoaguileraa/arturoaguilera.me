"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:m-8 md:m-2">
        {/* Imagen: Orden invertido en pantallas pequeñas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 order-1 sm:order-2 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[trasparent] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative overflow-hidden border border-[#33353F]">
            <Image
              src="/images/profilephoto.png"
              alt="My profile photo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>

        {/* Texto: Orden invertido en pantallas pequeñas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 order-2 sm:order-1 place-self-left text-center sm:text-left sm:mt-8 md:mt-8 lg:ml-16"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Arturo Aguilera",
                2500,
                "Web Developer",
                1300,
                "AI Developer",
                1300,
                "Matemathician",
                1300,
                "Malware Analyst",
                700,

              ]}
              speed={50}
              repeat={Infinity}
              className={({ text }) => {
                const size = text.length > 15 ? "text-3xl" : text.length > 10 ? "text-4xl" : "text-5xl";
                return `inline-block ${size}`;
              }}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Málaga, Spain.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Let&apos;s talk!
            </Link>
            <Link
              href="/cv.pdf"
              className="px-1 inline-block py-1 w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
