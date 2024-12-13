"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/solid"; // Importa el ícono GlobeAltIcon para el idioma
import { useRouter } from "next/navigation";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (language) => {
    // Cambia la ruta según el idioma
    if (language === "es") {
      router.push("/es");
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container px-4 lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl text-white font-semibold"
        >
          Home
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <button
                onClick={() => handleLanguageChange("es")}
                className="flex items-center gap-2 block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                <GlobeAltIcon className="h-6 w-6" />
                <span>Español</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button onClick={() => setNavbarOpen(false)}>
                <NavLink href={link.path} title={link.title} />
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLanguageChange("es")}
              className="flex items-center gap-2 block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              <GlobeAltIcon className="h-6 w-6" />
              <span>Español</span>
            </button>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
