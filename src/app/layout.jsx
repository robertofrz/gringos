import Header from "@/components/sections/Header";
import "./globals.css";
import { Montserrat, Exo_2 } from "next/font/google";
import Footer from "@/components/sections/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Gringo's Barbershop | Tradição e Estilo no Coração de São Paulo",

  description:
    "A Gringo's Barbershop está há mais de 8 anos no coração de São Paulo, a poucos passos da Av. Paulista. Unimos tradição e modernidade com cortes personalizados, barba de alto nível e um ambiente premium pensado para o seu conforto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  ${exo.className} ${montserrat.className} bg-[#181F29]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
