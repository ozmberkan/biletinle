import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Header from "@/components/Header/Header";
import "./globals.css";

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
      </body>
    </html>
  );
}
