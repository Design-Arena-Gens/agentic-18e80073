import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartJus • Legal tech de alta performance",
  description:
    "SmartJus combina IA proprietária e rede de advogados parceiros para captar, qualificar e operar casos jurídicos em escala.",
  openGraph: {
    title: "SmartJus • Legal tech de alta performance",
    description:
      "Direito em escala, inteligência em cada caso. Conheça a SmartJus, plataforma jurídica digital com IA e rede nacional de advogados.",
    url: "https://agentic-18e80073.vercel.app",
    siteName: "SmartJus",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartJus • Legal tech de alta performance",
    description:
      "Plataforma jurídica digital que combina IA e rede de advogados parceiros para casos com performance máxima.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
