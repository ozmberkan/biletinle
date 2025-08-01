export interface AuthState {
  user: { id: number; email: string; } | null;
  loading: boolean;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setUser: (user: AuthState["user"]) => void;
}


export type UserProps = {
  id: string
  email: string
}
