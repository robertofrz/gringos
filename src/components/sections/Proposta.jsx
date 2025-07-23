import Image from "next/image";

function Proposta() {
  const propostas = [
    {
      titulo: "Corte Personalizado",
      descricao:
        "Seu estilo, sua identidade. Aqui o corte é feito com atenção total ao seu perfil e preferências, garantindo um visual único e alinhado com você.",
      url: "/icons/corte.webp",
      alt: "Ícone representando corte de cabelo personalizado",
    },
    {
      titulo: (
        <>
          Barba e Cabelo <br /> com Alta Técnica
        </>
      ),
      descricao:
        "Os melhores barbeiros de São Paulo aplicam técnicas refinadas e atualizadas para entregar um resultado impecável, seja no corte, fade ou modelagem de barba.",
      url: "/icons/barbeiros.webp",
      alt: "Ícone representando técnica avançada de barba e cabelo",
    },
    {
      titulo: "Sem Espera, Sem Filas",
      descricao:
        "Valorize seu tempo: agende seu horário com facilidade pelo WhatsApp ou Booksy e evite filas. Praticidade e pontualidade são parte da experiência.",
      url: "/icons/agendamento.webp",
      alt: "Ícone representando agendamento sem espera",
    },
    {
      titulo: "Ambiente Premium",
      descricao:
        "Mais que uma barbearia, um espaço pensado para o seu conforto. Ambiente climatizado, bem decorado, com boa música, cerveja gelada ou um cafezinho especial.",
      url: "/icons/cerveja.webp",
      alt: "Ícone representando ambiente premium e confortável",
    },
    {
      titulo: "Localização Privilegiada",
      descricao:
        "No coração de São Paulo. A Gringo's fica a poucos passos da Avenida Paulista, com fácil acesso para quem vive ou trabalha na região.",
      url: "/icons/localizacao.webp",
      alt: "Ícone representando localização central",
    },
    {
      titulo: (
        <>
          Vantagens para <br /> Clientes Regulares
        </>
      ),
      descricao:
        "Fidelidade tem recompensa: com nosso cartão fidelidade, após um número de cortes você ganha um gratuito. É o nosso jeito de valorizar quem está sempre com a gente.",
      url: "/icons/clientes.webp",
      alt: "Ícone representando programa de fidelidade",
    },
  ];

  return (
    <section className="h-min-screen flex items-center justify-center py-40">
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-[#FCFDFB]">
        {propostas.map(({ titulo, descricao, url, alt, index }) => (
          <div
            key={alt}
            className="bg-gradient-to-b from-[#181F29] to-[99%] to-[#5C2B2E] flex flex-col items-center justify-center text-center p-6 rounded-b-2xl"
          >
            <Image
              src={url}
              alt={alt}
              width={60}
              height={60}
              className="invert mb-4"
            />
            <h2 className="text-xl leading-[1] mb-4 font-bold text-[#FCFDFB]">
              {titulo}
            </h2>
            <p className="montserrat font-light text-base">{descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Proposta;
