// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Wawan Hermawan — Fullstack Developer & Digital Growth Builder",
  description:
    "Portfolio of Wawan Hermawan, a fullstack developer specializing in Next.js, Node.js, and NestJS. I build fast, scalable websites and turn them into growth engines that help businesses increase traffic, generate leads, and boost sales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
