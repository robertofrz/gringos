function Hero() {
  return (
    <section
      className="w-full h-screen sm:mt-14
        bg-cover bg-center
        bg-[url('/hero-mobile.webp')]
        lg:bg-[url('/hero-desktop.webp')]
        relative flex items-end lg:items-center justify-center lg:justify-start"
    >
      <div className="lg:w-1/2 w-full mb-16 md:mb-30 lg:mb-0 lg:ml-45 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        {/* h1 */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl w-[90%] text-[#FCFDFB] font-bold leading-[1] tracking-[-0.0625rem] mb-4 fade-up fade-up-delay-1">
          Seu novo visual <br /> começa aqui
        </h1>

        {/* p */}
        <p className="text-lg w-[90%] sm:w-4/6 mb-8 text-[#FCFDFB] font-medium montserrat fade-up fade-up-delay-2">
          No coração de São Paulo, a poucos passos da Avenida Paulista.
        </p>

        {/* botão */}
        <a
          href="https://booksy.com/pt-br/73395_gringo-s-barbershop_barbearias_1047773_sao-paulo#ba_s=seo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CC9253] tracking-[0.0625rem] text-white py-3 px-5 rounded-full font-semibold text-base shadow-lg border-2 sm:border-3 border-[#b37b40] hover:bg-[#b37b40] cursor-pointer montserrat fade-up fade-up-delay-3"
        >
          Agende Seu Horário
        </a>
      </div>
    </section>
  );
}
export default Hero;
