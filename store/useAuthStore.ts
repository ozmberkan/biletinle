import {create} from "zustand"



interface AuthState {
  user: UserProps | null;
  loading: boolean;
  setUser: (user: UserProps) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

type UserProps  = {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  claims: string[];
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,
    setUser: (user : UserProps) => set({ user }),
    setLoading: (loading : boolean) => set({ loading }),
    logout: () => set({ user: null }),
}));