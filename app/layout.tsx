import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MinhaAula ✈️ – Aprenda Inglês para sua Viagem aos EUA",
  description:
    "Aplicativo interativo de aprendizado de inglês para brasileiros que estão se preparando para uma viagem aos Estados Unidos. Pratique diálogos, vocabulário e situações reais de viagem.",
  keywords: [
    "aprender inglês",
    "inglês para viagem",
    "English for travel",
    "Brazilian travelers",
    "viagem EUA",
  ],
  authors: [{ name: "MinhaAula" }],
  openGraph: {
    title: "MinhaAula – Inglês para sua Viagem aos EUA",
    description:
      "Pratique inglês com cenários reais de viagem: aeroporto, hotel, restaurante e direções.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
