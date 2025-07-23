function Depoimentos() {
  const depoimentos = [
    {
      avaliacao:
        '"Todo time acolhedor em ambiente clean, climatizado e confortável, água, café, cerveja oferecidos logo que chego, lugar que relaxo e saio sempre com mais energia que antes de entrar! Time Porreta que admiro muito e agradeço pelo carinho, respeito e profissionalismo!"',
      autor: "- Henrique G.",
    },
    {
      avaliacao:
        '"Artur arrasa como sempre, só elegios mesmo. Estava meio perdido pra achar barbeiro aqui na região, optei pela Gringos, por avaliação no app e realmente é fora da curva. O cara quando curte o que faz, é outra coisa."',
      autor: "- Bruno M.",
    },
    {
      avaliacao:
        '"Local agradável, com profissionais extremamente preparados para o melhor atendimento e experiência possível. Eu e meus filhos de 10 e 7 frequentamos a mais de 3 anos."',
      autor: "- Thiago F.",
    },
    {
      avaliacao:
        '"Fiz questão de externalizar minha satisfação. Foi a primeira vez que cortei lá, mas eles ganharam um novo cliente. Fui muito bem recebido por todos. Parabenizo o Vagner, que fez um excelente trabalho e agregou grandes conhecimentos no curto espaço de tempo que conversamos."',
      autor: "- Sidney S.",
    },
    {
      avaliacao:
        '"Excelente barbearia na região da Bela Vista, corte excepcional, preço justo, atendimento alegre, rápido e no detalhe. Cachaça top, cerveja, água ou café de cortesia. Um dos melhores do ramo. Parabéns à Gi pelo excelente trabalho."',
      autor: "- André P.",
    },
    {
      avaliacao:
        '"Sou cliente fiel há 8 anos. Isso já diz tudo... Muito profissionais e competentes, espaço bonito, equipe bacana. Às vezes passo só pra um café e um oi. Nota 1000!"',
      autor: "- Flávio G.",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="h-min-screen flex flex-col items-center justify-center pt-30 pb-20"
    >
      <h2 className="text-3xl sm:text-6xl leading-[1] tracking-[-0.0625rem] text-center text-[#FCFDFB] font-bold mb-8 mt-12">
        Experiências que <br /> valem 5 estrelas
      </h2>
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-[#FCFDFB]">
        {depoimentos.map(({ avaliacao, autor }) => (
          <div
            key={autor}
            className="bg-gradient-to-b from-[#181F29] to-[99%] to-[#5C2B2E] flex flex-col items-center justify-end text-center p-6 rounded-b-2xl"
          >
            <p className="montserrat text-base font-light italic mb-4 text-[#FCFDFB]">
              {avaliacao}
            </p>
            <p className="text-lg tracking-wide font-bold text-[#FCFDFB]">
              {autor}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Depoimentos;
