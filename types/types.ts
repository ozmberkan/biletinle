export interface AuthState {
  user: { id: number; email: string; } | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (user: AuthState["user"]) => void;
}


export type UserProps = {
  id: string
  email: string
}
