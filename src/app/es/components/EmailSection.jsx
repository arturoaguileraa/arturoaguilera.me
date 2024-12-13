"use client";
import React, { useState } from "react";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Mensaje enviado.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          ¡Conectemos!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estoy activamente explorando nuevas oportunidades y siempre feliz de conectar. ¡No dudes en ponerte en contacto si tienes alguna pregunta o simplemente quieres charlar! ¡Haré todo lo posible por responder pronto!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/arturoaguileraa" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Icono de Github" />
          </Link>
          <Link href="https://www.linkedin.com/in/arturoaguileraglez/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Icono de Linkedin" />
          </Link>
          <Link href="mailto:arturoaguileraglez@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={"https://img.icons8.com/?size=100&id=94652&format=png&color=FFFFFF"} width={49} height={49} alt="Icono de correo" />
          </Link>

        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ¡Correo enviado con éxito!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Tu correo
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="¡Quería saludarte!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hablemos de..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
