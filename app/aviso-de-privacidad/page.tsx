"use client";
import React, { useState, useRef } from "react";

import Script from "next/script";

export default function AvisoDePrivacidad() {
  return (
    <main className="overflow-hidden bg-black text-white pb-48 pt-20">
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 text-center ">
        <p className="text-xl">AVISO DE PRIVACIDAD</p>
        <div className="pt-10 text-left">
          <p className="">
            De conformidad con lo establecido en la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares (en adelante, la
            Ley) y su Reglamento, se emite el siguiente aviso de privacidad:
          </p>
          <p className="">
            <span className="font-bold">
              Responsable de la protección de sus datos personales: Clicker 360
              SA de CV
            </span>
            con domicilio en Fuente de Tritones 20-5, Tecamachalco, 53950,
            Naucalpan, Estado de México, es el responsable del tratamiento de
            sus datos personales.
          </p>
          <p>
            <span className="font-bold">Datos personales que recabamos</span>:
            Los datos personales que recabamos de manera directa a través de
            nuestro formulario de contacto en línea son los siguientes:
          </p>{" "}
          <p>•Nombre </p>
          <p>•Correo electrónico</p> <p>•Teléfono (opcional)</p>
          <p>
            <span className="font-bold">
              Finalidades del tratamiento de sus datos personales:
            </span>
            Los datos personales mencionados son recabados con las siguientes
            finalidades:
          </p>
          <p>
            •Gestionar y dar seguimiento a sus consultas, comentarios o
            solicitudes realizadas a través del formulario de contacto.
          </p>
          <p>
            •Establecer comunicación con usted para responder a sus
            requerimientos.
          </p>
          <p>
            •Enviar información relacionada con nuestros productos, servicios o
            promociones, siempre y cuando haya otorgado su consentimiento
            expreso para ello.
          </p>
          <p>
            <span className="font-bold">
              Transferencias de datos personales:
            </span>
            Le informamos que sus datos personales podrán ser transferidos y
            tratados por personas distintas al responsable, únicamente para las
            finalidades descritas en el presente aviso de privacidad. Dichas
            transferencias se realizarán conforme a lo establecido en la Ley.
          </p>
          <p>
            <span className="font-bold">
              Medios para ejercer sus derechos ARCO:
            </span>
            Usted tiene derecho de acceder, rectificar, cancelar u oponerse al
            tratamiento de sus datos personales, así como revocar el
            consentimiento que haya otorgado para el tratamiento de los mismos,
            a través de los procedimientos que hemos implementado. Para conocer
            dichos procedimientos, los requisitos y plazos, puede ponerse en
            contacto con nosotros a través de [correo electrónico de contacto].
          </p>
          <p>
            <span className="font-bold">
              Modificaciones al aviso de privacidad:
            </span>
            El presente aviso de privacidad puede sufrir modificaciones, cambios
            o actualizaciones derivadas de nuevos requerimientos legales, de
            nuestras propias necesidades por los productos o servicios que
            ofrecemos, de nuestras prácticas de privacidad, de cambios en
            nuestro modelo de negocio o por otras causas. Nos comprometemos a
            mantenerlo informado sobre los cambios que pueda sufrir el presente
            aviso de privacidad, a través de la página web.
          </p>
          <p>
            <span className="font-bold"> Consentimiento:</span>
            Al proporcionar sus datos personales a través de nuestro formulario
            de contacto en línea y al aceptar el presente aviso de privacidad,
            usted otorga su consentimiento para el tratamiento de sus datos
            personales conforme a las finalidades descritas en el mismo.
          </p>
          <p>
            <span className="font-bold">Fecha de última actualización:</span> 22
            de febrero de 2024.
          </p>
        </div>
      </section>
    </main>
  );
}
