"use client";
import Image from "next/image";
import { useState } from "react";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData]: any = useState({
    tipo: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="overflow-hidden pb-20">
      <Script
        id="mi-script-unico"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
        w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
        m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://campaigns.clicker360.com/mtc.js','mt');

        mt('send', 'pageview');
      `,
        }}
      />
      <section className="bg-black">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="/img/logo-brillos.png"
            alt="TMBC"
            width={222}
            height={140}
            className="object-contain sm:w-56 sm:h-auto"
          ></Image>
        </div>
        <div className="w-full">
          <Image
            src="/img/2.jpg"
            alt="TMBC"
            width={1522}
            height={340}
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-lg mx-auto">
            <div className="py-10 sm:py-15 md:py-20">
              <div
                className="text-xl sm:text-2xl md:text-3
              2xl font-bold text-white"
              >
                <p className="my-2 sm:my-3 md:my-4">
                  ¡La conferencia/fiesta más exitosa para tocar el valioso tema
                  de los peligros del alcohol!
                </p>
                <p className="my-2 sm:my-3 md:my-4">
                  Impartida por el orador{" "}
                  <span className="text-lfs font-bold">Rudy Tercero</span> que
                  cuenta con una gran trayectoria y experiencia en el tema.
                </p>
                <p className="my-2 sm:my-3 md:my-4">
                  + de{" "}
                  <span className="text-lfs font-bold">2,000 conferencias</span>{" "}
                  para un{" "}
                  <span className="text-lfs font-bold">millón de personas</span>
                </p>
                <p className="my-2 sm:my-3 md:my-4">
                  + de{" "}
                  <span className="text-lfs font-bold">
                    22 años de experiencia
                  </span>{" "}
                  en vida nocturna
                </p>
                <p className="my-2 sm:my-3 md:my-4">
                  Conferencias especializadas para tres públicos específicos.
                  SECUNDARIA, PREPARATORIA Y PADRES DE FAMILIA.
                </p>
                <p className="my-2 sm:my-3 md:my-4 text-lfs font-bold">
                  ¡Preparemos juntos a los jóvenes para un mejor futuro!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <video loop className="w-full" controls>
            <source src="/img/la-fiesta.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto py-20">
          <div className="max-w-screen-lg mx-auto text-center">
            <h1 className="text font-bold text-4xl text-white">Contacto</h1>
            <div className="my-2 text-2xl font-bold text-white">
              <span className="text-lfs font-bold">Contáctanos</span> hoy mismo
              y agenda la conferencia en{" "}
              <span className="text-lfs font-bold">tu escuela.</span>
            </div>
            <div className="flex justify-center items-center my-14 text-left">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 glass-bg text-white"
              >
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="tipoUsuario"
                  >
                    Soy
                  </label>
                  <select
                    id="tipoUsuario"
                    name="tipoUsuario"
                    value={formData.tipoUsuario}
                    onChange={handleChange}
                    className="bg-black w-full py-2 px-3"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="colegio">Colegio</option>
                    <option value="padre">Padre de familia</option>
                    <option value="asociacion">
                      Asociación de padres de familia
                    </option>
                    <option value="alumno">Alumno</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="nombre"
                  >
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-black w-full py-2 px-3 mb-2"
                    placeholder="Nombre"
                  />
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="bg-black w-full py-2 px-3"
                    placeholder="Apellido"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black w-full py-2 px-3"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="telefono"
                  >
                    Teléfono (opcional)
                  </label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-black w-full py-2 px-3"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="pink-bg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex columns-2 gap-6 justify-center">
          <Link
            href="https://www.instagram.com/rudytercerof/?hl=es"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                width="30px"
                height="30px"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
          </Link>

          <Link
            href="https://www.tiktok.com/@rudytercerof"
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
