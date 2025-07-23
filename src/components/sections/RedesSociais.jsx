import Image from "next/image";

export default function RedesSociais() {
  return (
    <section className="bg-[#5C2B2E] flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-22 p-4 md:p-12 py-22">
      {/* Vídeo estilizado */}
      <div className="relative w-full lg:w-[400px] lg:h-[400px] aspect-square overflow-hidden rounded-xl shadow-lg">
        <video
          src="/video-instagram.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover shadow-lg rounded-xl"
        />
      </div>

      {/* Redes Sociais */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl leading-[1] tracking-[-0.0625rem] text-center text-[#FCFDFB] font-bold mb-8">
          Siga a Gringo's nas redes sociais!
        </h2>
        <p className="text-[#FCFDFB] text-base text-center max-w-md font-light montserrat mb-8">
          Lá você encontra vídeos e fotos dos cortes feitos nos nossos clientes,
          vê como é o dia a dia na barbearia e fica por dentro de avisos
          importantes e novidades.
        </p>
        <div className="flex gap-10">
          <a
            href="https://www.instagram.com/gringosbarbeshop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.webp"
              alt="Instagram"
              width={60}
              height={60}
              className="invert"
            />
          </a>
          <a
            href="https://www.facebook.com/gringosbarbeshop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.webp"
              alt="Facebook"
              width={56}
              height={56}
              className="invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
