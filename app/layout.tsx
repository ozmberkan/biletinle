import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.className}`}>
      <body className={`antialiased`}>
        <NextTopLoader color="#DB292C" showSpinner={false} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
