import { create } from "zustand";
import { persist } from "zustand/middleware";

type FontScale = 1 | 1.15 | 1.3;

interface UiPrefsState {
  fontScale: FontScale;
  liteMode: boolean;
  highContrast: boolean;
  cycleFontScale: () => void;
  toggleLiteMode: () => void;
  toggleHighContrast: () => void;
}

export const useUiPrefsStore = create<UiPrefsState>()(
  persist(
    (set, get) => ({
      fontScale: 1,
      liteMode: false,
      highContrast: false,
      cycleFontScale: () => {
        const next: Record<FontScale, FontScale> = { 1: 1.15, 1.15: 1.3, 1.3: 1 };
        const scale = next[get().fontScale];
        document.documentElement.style.setProperty("--font-scale", String(scale));
        set({ fontScale: scale });
      },
      toggleLiteMode: () => set((s) => ({ liteMode: !s.liteMode })),
      toggleHighContrast: () => {
        const next = !get().highContrast;
        document.documentElement.classList.toggle("contrast-high", next);
        set({ highContrast: next });
      },
    }),
    {
      name: "nurtura-ui-prefs",
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        document.documentElement.style.setProperty("--font-scale", String(state.fontScale));
        document.documentElement.classList.toggle("contrast-high", state.highContrast);
      },
    }
  )
);