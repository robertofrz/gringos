"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const servicos = [
  {
    categoria: "Cabelo",
    items: [
      ["Corte normal", "55"],
      ["Corte à máquina (até 2 pentes)", "40"],
      ["Hidratação", "30"],
      ["Pezinho", "25"],
      ["Camuflagem dos brancos", "40+"],
      ["Alinhamento capilar", "80+"],
      ["Platinado e Colorido", "250"],
      ["Luzes", "100+"],
    ],
  },
  {
    categoria: "Barba",
    items: [
      ["Barba Tradicional", "55"],
      ["Barba à máquina", "45"],
      ["Camuflagem dos brancos", "40"],
    ],
  },
  {
    categoria: "Combo",
    items: [
      ["Corte + Alinhamento (parte superior)", "125+"],
      ["Corte + Alinhamento (todo cabelo)", "150+"],
      ["Corte Normal + Barba + Depilação Nasal", "110"],
      ["Corte Normal + Barba Tradicional", "100"],
      ["Corte à máquina + Barba Tradicional", "85"],
      ["Corte Normal + Barba à Máquina", "85"],
      ["Corte Normal + Sobrancelha na Pinça", "80"],
      ["Corte Normal + Sobrancelha na Navalha", "70"],
      ["Corte Normal + Depilação nasal na Cera", "70"],
    ],
  },
  {
    categoria: "Procedimento Facial",
    items: [
      ["Máscara preta", "40"],
      ["Depilação Orelha com Cera", "30"],
      ["Sobrancelha na pinça", "30"],
      ["Depilação Nasal", "20"],
      ["Sobrancelha na navalha", "20"],
    ],
  },
  {
    categoria: "Pacote – 4 serviços em 30 dias",
    items: [
      ["Cabelo e Barba", "290"],
      ["Corte à Máquina e Barba", "240"],
      ["Cabelo ou Barba", "165"],
      ["Corte à Máquina", "120"],
    ],
  },
];

export default function Servicos() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="servicos"
      className="w-full flex flex-col justify-start items-center bg-[#181F29] py-20 px-4"
    >
      <div className="w-[90vw] sm:max-w-3xl mx-auto mt-12">
        <h2 className="text-4xl sm:text-6xl text-center text-[#FCFDFB] tracking-wide font-bold mb-10">
          Nossos Serviços
        </h2>

        {servicos.map((servico, index) => (
          <div key={index} className="py-1">
            <button
              onClick={() => toggle(index)}
              className="w-full bg-[#5C2B2E]/70 p-3 flex items-center justify-between rounded-lg text-left text-[#FCFDFB] text-xl"
            >
              <span>{servico.categoria}</span>
              <ChevronDown
                className={`cursor-pointer h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <ul className="mt-4 space-y-2 text-[#FCFDFB] text-sm sm:text-lg px-2 montserrat font-light">
                {servico.items.map(([nome, preco], i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-[#CC9253]/20 pb-2"
                  >
                    <span className="exo">{nome}</span>
                    <span className="text-[#FCFDFB] montserrat">
                      R$ {preco}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href={`https://wa.me/5511986112076?text=${encodeURIComponent(
              `Olá! Gostaria de agendar um horário, por favor.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC9253] text-white py-3 px-5 rounded-full font-semibold text-lg shadow-lg border-2 sm:border-3 border-[#b37b40] hover:bg-[#b37b40] cursor-pointer montserrat"
          >
            Agendar Pelo WhatsApp
          </a>
          <a
            href="https://booksy.com/pt-br/73395_gringo-s-barbershop_barbearias_1047773_sao-paulo#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC9253] text-white py-3 px-5 rounded-full font-semibold text-lg shadow-lg border-2 sm:border-3 border-[#b37b40] hover:bg-[#b37b40] cursor-pointer montserrat"
          >
            Agendar Pelo Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
