export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#5C2B2E] text-[#FCFDFB]/80 text-center montserrat py-6">
      <p className="text-xs sm:text-base">
        © {year} Gringos Barbershop. Todos os direitos reservados.
      </p>
    </footer>
  );
}
