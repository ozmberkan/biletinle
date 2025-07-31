import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthState } from "@/types/types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: true, // başlangıçta true
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),

      // Hydration başlar
      onRehydrateStorage: () => {
        return (state) => {
          if (state) {
            state.setLoading(false);
          }
        };
      },
    }
  )
);
