import Hero from "@/components/sections/Hero";
import Proposta from "@/components/sections/Proposta";
import Atendimento from "@/components/sections/Atendimento";
import Servicos from "@/components/sections/Servicos";
import Equipe from "@/components/sections/Equipe";

import Depoimentos from "@/components/sections/Depoimentos";
import Localizacao from "@/components/sections/Localizacao";
import AtendimentoVideo from "@/components/sections/RedesSociais";

export default function Home() {
  return (
    <>
      <Hero />
      <Proposta />
      <Atendimento />
      <Servicos />
      <Equipe />
      <Depoimentos />
      <Localizacao />
      <AtendimentoVideo />
    </>
  );
}
