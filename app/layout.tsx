import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FletesFlex - Fletes & Mudanzas en Quilmes, CABA y GBA",
  description: "Servicio profesional de fletes y mudanzas en Quilmes, CABA y GBA. Cargas generales con equipo profesional. Atención de 7 a 22 hs todos los días.",
  keywords: ["fletes", "mudanzas", "quilmes", "caba", "gba", "transporte", "logística"],
  openGraph: {
    title: "FletesFlex - Tu solución en logística",
    description: "Fletes & Mudanzas profesionales en Quilmes, CABA y GBA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
