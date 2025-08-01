import { AuthState } from "@/types/types";
import { create, } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      logout: () => {
        set({ user: null });
      },
      loading: true,
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => {
        return (state) => {
          state?.setLoading(false);
        };
      },
    }
  )
);
