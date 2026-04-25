import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/components/providers/ModalProvider";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise",
  description: "Accredian Enterprise Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo2.variable} antialiased h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-primary text-text-primary">
        <Toaster position="top-center" reverseOrder={false} />
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
