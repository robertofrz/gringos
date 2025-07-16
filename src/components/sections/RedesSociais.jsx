import Image from "next/image";

export default function RedesSociais() {
  return (
    <section className="bg-[#5C2B2E] flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-22 p-4 md:p-12 py-22">
      {/* Vídeo estilizado */}
      <div className="relative w-full md:w-[400px] md:h-[400px] aspect-square overflow-hidden rounded-xl shadow-lg">
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
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#FCFDFB] exo ">
          Siga a Gringo's nas <br /> redes sociais!
        </h2>
        <p className="text-[#FCFDFB] text-lg sm:text-xl text-center max-w-md leading-relaxed montserrat mb-8">
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
              width={70}
              height={70}
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
              width={66}
              height={66}
              className="invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
