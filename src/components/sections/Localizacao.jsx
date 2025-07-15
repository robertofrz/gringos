import { MapPin } from "lucide-react";

function Localizacao() {
  const funcionamento = [
    { dia: "Segunda", horario: "10:00 - 20:00" },
    { dia: "Terça", horario: "10:00 - 20:00" },
    { dia: "Quarta", horario: "10:00 - 20:00" },
    { dia: "Quinta", horario: "10:00 - 20:00" },
    { dia: "Sexta", horario: "10:00 - 20:00" },
    { dia: "Sábado", horario: "10:00 - 18:00" },
    { dia: "Domingo", horario: "Fechado" },
  ];

  return (
    <section
      id="localizacao"
      className="py-20 mb-20 bg-[#181F29] text-[#FCFDFB]"
    >
      <div className="container mx-auto w-[90vw] sm:max-w-6xl mt-12">
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-[#FCFDFB] exo mb-12">
          A localização mais <br />
          paulistana da cidade
        </h2>

        {/* Grid com dois containers lado a lado no desktop, empilhados no mobile */}
        <div className="flex flex-col items-center lg:flex-row gap-10">
          {/* Container 1 - Endereço + Funcionamento */}
          <div className="flex-1">
            {/* Endereço */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-7 h-7 text-[#CC9253] mt-2 shrink-0" />
              <p className="text-base sm:text-lg leading-relaxed montserrat">
                Carlos Sampaio Mall – Rua Carlos Sampaio, 331 – Bela Vista, São
                Paulo – SP, 01333-021 (ao lado da Estação Brigadeiro, da linha
                verde do Metrô)
              </p>
            </div>

            {/* Horário de funcionamento */}
            <h3 className="text-2xl font-semibold text-[#CC9253] mb-4">
              Horário de Funcionamento
            </h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base montserrat">
              {funcionamento.map(({ dia, horario }) => (
                <div
                  key={dia}
                  className="flex justify-between border-b text-base sm:text-lg border-[#CC9253]/20 pb-1"
                >
                  <span>{dia}</span>
                  <span>{horario}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Container 2 - Mapa */}
          <div className="flex-1 w-full">
            <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden border-4 border-[#CC9253] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.999003803497!2d-46.64925662548724!3d-23.568479261852197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597c7f07dd61%3A0x691a8d858cc11972!2sGRINGO&#39;S%20Barbeshop!5e0!3m2!1spt-BR!2sbr!4v1752527601493!5m2!1spt-BR!2sbr"
                title="Mapa com a localização da Gringo's Barbeshop"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
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

export default Localizacao;
