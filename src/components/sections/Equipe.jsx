function Equipe() {
  return (
    <section
      id="profissionais"
      className="w-full h-min-screen flex items-center justify-between mt-6 "
    >
      <div className="bg-[#5C2B2E] w-full flex flex-col lg:flex-row items-center gap-12 mt-22">
        <div
          className="

            w-screen h-[220px]
            lg:w-[50vw] lg:h-[110vh]
            
            bg-[url('/equipe-mobile.webp')]
            lg:bg-[url('/equipe-desktop.webp')]
            bg-cover bg-center flex-shrink-0
          "
        ></div>
        <div className="text-center lg:text-left w-full px-6 pb-12 lg:pb-0 sm:px-0 sm:max-w-xl">
          <h2 className="text-3xl sm:text-6xl leading-[1] tracking-[-0.0625rem] text-[#FCFDFB]  mb-4 font-bold">
            Barbeiros de <br /> Excelência
          </h2>
          <p className="text-[#FCFDFB] text-base sm:text-xl font-light  montserrat">
            Na nossa barbearia, você pode contar com os melhores barbeiros de
            São Paulo. Nossa equipe é formada por profissionais altamente
            qualificados, apaixonados pelo que fazem e sempre atentos às
            tendências e ao estilo de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Equipe;
