import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bregalia | Control Horario y Gestión de Equipos",
  description: "La solución completa para el registro de jornada, gestión de turnos y cumplimiento normativo. Simple, potente y legal.",
  keywords: ["control horario", "registro de jornada", "gestión de equipos", "recursos humanos", "cumplimiento normativo", "fichaje digital"],
  authors: [{ name: "Bregalia" }],
  creator: "Bregalia",
  publisher: "Bregalia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bregalia.es"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Bregalia | Control Horario y Gestión de Equipos",
    description: "La solución completa para el registro de jornada, gestión de turnos y cumplimiento normativo. Simple, potente y legal.",
    url: "https://bregalia.es",
    siteName: "Bregalia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bregalia | Control Horario y Gestión de Equipos",
    description: "La solución completa para el registro de jornada, gestión de turnos y cumplimiento normativo. Simple, potente y legal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-W7KNR5MF" />
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W7KNR5MF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
