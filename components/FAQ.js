"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "¿Qué es MenúAhora?",
    answer: <div className="space-y-2 leading-relaxed">MenúAhora es un servicio que crea un menú digital
    personalizado para tu negocio. Nosotros diseñamos el menú por ti; solo tienes que subir tus productos 
    y nosotros nos encargamos del resto.</div>,
  },
  {
    question: "¿Cuánto tiempo tarda en estar listo mi menú?",
    answer: (
      <p>
        El menú personalizado se entrega en un plazo de 24 a 72 horas, 
        dependiendo de la cantidad de productos y detalles proporcionados.
      </p>
    ),
  },
  {
    question: "¿Puedo actualizar mi menú después de recibirlo?",
    answer: (
      <div className="space-y-2 leading-relaxed">Sí, puedes editar y actualizar los productos en tu menú 
      en cualquier momento de forma rápida y sencilla, sin necesidad de contactar a un diseñador. 
      El diseño visual del menú no se puede modificar, pero siempre estará alineado con la identidad de tu marca.
      </div>
    ),
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer: (
      <div className="space-y-2 leading-relaxed">Solo necesitas completar un formulario con la información 
      de tu negocio y subir los productos en un archivo Excel. Nosotros nos encargamos del resto. 
      Pronto, contaremos con un portal para facilitar aún más la gestión de tus productos.</div>
    ),
  },
  {
    question: "¿Puedo personalizar el diseño del menú?",
    answer: (
      <div className="space-y-2 leading-relaxed">Sí, un diseñador profesional adaptará el menú a la 
      identidad de tu marca, incluyendo colores, tipografía y estilo visual.</div>
    ),
  },
  {
    question: "¿Qué pasa si necesito ayuda?",
    answer: (
      <div className="space-y-2 leading-relaxed">Nuestro equipo de soporte está disponible para 
      asistirte con cualquier duda o problema que puedas tener.</div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Preguntas Frecuentes
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
