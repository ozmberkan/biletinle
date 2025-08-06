"use client";

import { getMyProfileService } from "@/services/authService";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";

const CheckAccount = ({ children }: { children: React.ReactNode }) => {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    getMyProfileService()
      .then((response) => {
        if (response.data.success) {
          setUser(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>{children}</>;
};

export default CheckAccount;
