function Hero() {
  return (
    <section
      className="w-full h-screen sm:h-screen sm:mt-10
        bg-cover bg-center
        bg-[url('/hero-mobile.webp')]
        sm:bg-[url('/hero-desktop.webp')]
        relative flex items-end sm:items-center justify-center sm:justify-start"
    >
      <div className="sm:w-1/2 w-full mb-16 sm:mb-0 sm:ml-45 flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
        {/* h1 */}
        <h1 className="text-5xl sm:text-7xl text-[#FCFDFB] mb-6 font-semibold fade-up fade-up-delay-1">
          Seu novo visual <br /> começa aqui
        </h1>

        {/* p */}
        <p className="text-xl w-4/6 text-[#FCFDFB] sm:font-medium font-semibold montserrat fade-up fade-up-delay-2">
          No coração de São Paulo, a poucos passos da Avenida Paulista.
        </p>

        {/* botão */}
        <a
          href="https://booksy.com/pt-br/73395_gringo-s-barbershop_barbearias_1047773_sao-paulo#ba_s=seo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CC9253] text-white py-3 px-5 rounded-full font-semibold text-lg shadow-lg border-2 sm:border-3 border-[#b37b40] hover:bg-[#b37b40] cursor-pointer montserrat mt-16 fade-up fade-up-delay-3"
        >
          Agende Seu Horário
        </a>
      </div>
    </section>
  );
}
export default Hero;
