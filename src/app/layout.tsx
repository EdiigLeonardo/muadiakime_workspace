import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muadiakimi Store",
  description: "E-commerce built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={`${inter.className} flex min-h-screen lg:flex-col `}
        style={{ height: "100%" }}
      >
        <Header />
        <main className="min-h-['50%']">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
