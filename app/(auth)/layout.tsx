import { Toaster } from "@/components/ui/sonner";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Toaster richColors />
      {children}
    </section>
  );
};

export default AuthLayout;
