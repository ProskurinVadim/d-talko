import {ReactNode} from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "./components/shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  weight: ['300', '400','500','600' ,'700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor Talko",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter bg-white px-2.5 lg:px-5`}
      >
      <Navbar />
        <main>
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
