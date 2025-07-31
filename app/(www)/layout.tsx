import Footer from "@/components/Footer/Footer";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
