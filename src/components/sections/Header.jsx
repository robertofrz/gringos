"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full bg-[#181F29] shadow-lg fixed top-0 left-0 z-50 montserrat">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="scroll-smooth">
          <Image
            src="/logo.webp"
            alt="Logo da barbearia Gringos Barbershop"
            width={100}
            height={60}
          />
        </a>

        {/* Links - Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#servicos"
            className="scroll-smooth text-[#FCFDFB] text-lg hover:text-[#CC9253] transition"
          >
            Serviços
          </a>
          <a
            href="#profissionais"
            className="scroll-smooth text-[#FCFDFB] text-lg hover:text-[#CC9253] transition"
          >
            Profissionais
          </a>

          <a
            href="#depoimentos"
            className="scroll-smooth text-[#FCFDFB] text-lg hover:text-[#CC9253] transition"
          >
            Depoimentos
          </a>
          <a
            href="#localizacao"
            className="scroll-smooth text-[#FCFDFB] text-lg hover:text-[#CC9253] transition"
          >
            Localização
          </a>
          <a
            href={`https://wa.me/5511986112076?text=${encodeURIComponent(
              `Olá! Gostaria de agendar um horário ou obter mais informações sobre os serviços oferecidos pela Gringos Barbershop.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC9253] text-white py-1 px-4 rounded-full font-semibold text-lg shadow-lg border-2 sm:border-3 border-[#b37b40] hover:bg-[#b37b40] cursor-pointer montserrat"
          >
            Contato
          </a>
        </nav>

        {/* Botão Hamburguer - Mobile */}
        <button
          className="md:hidden text-[#FCFDFB]"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden bg-[#181F29] shadow-md">
          <nav className="flex flex-col items-start px-6 py-4 gap-4">
            <a
              href="#servicos"
              className="scroll-smooth text-[#FCFDFB] py-2 text-lg hover:text-[#CC9253] transition"
              onClick={() => setMenuAberto(false)}
            >
              Serviços
            </a>
            <a
              href="#profissionais"
              className="scroll-smooth text-[#FCFDFB] py-2 text-lg hover:text-[#CC9253] transition"
              onClick={() => setMenuAberto(false)}
            >
              Profissionais
            </a>
            <a
              href="#depoimentos"
              className="scroll-smooth text-[#FCFDFB] py-2 text-lg hover:text-[#CC9253] transition"
              onClick={() => setMenuAberto(false)}
            >
              Depoimentos
            </a>
            <a
              href="#localizacao"
              className=" scroll-smooth text-[#FCFDFB] py-2 text-lg hover:text-[#CC9253] transition"
              onClick={() => setMenuAberto(false)}
            >
              Localização
            </a>

            <a
              href={`https://wa.me/5511986112076?text=${encodeURIComponent(
                `Olá! Gostaria de agendar um horário, por favor.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-smooth text-[#FCFDFB] py-2 text-lg hover:text-[#CC9253] transition"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
