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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <body className="min-h-full overflow-x-hidden" style={{ maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>{children}</body>
    </html>
  );
}
