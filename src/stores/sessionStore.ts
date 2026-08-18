import { create } from "zustand";

interface SessionState {
  userId: string | null;
  role: "parent" | "admin" | "institution" | null;
  setSession: (userId: string, role: SessionState["role"]) => void;
  clear: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  userId: null,
  role: null,
  setSession: (userId, role) => set({ userId, role }),
  clear: () => set({ userId: null, role: null }),
}));