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
  title: "TC EXPERTISE - Cabinet d'Expertise Comptable La Réunion",
  description: "TC EXPERTISE, votre partenaire de confiance à La Réunion. Création d'entreprise, gestion comptable, fiscale et juridique, audit fiscal et patrimonial. Réactivité, proximité, qualité.",
  keywords: "expertise comptable, La Réunion, création entreprise, comptabilité, fiscalité, Saint-Denis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
