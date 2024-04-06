import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const baloo2 = Baloo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papaya Fresh",
  description: "Papaya Fresh - Fresh fruits and vegetables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
