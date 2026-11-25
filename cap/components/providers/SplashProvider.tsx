"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface SplashCtx {
  splashDone: boolean;
  setSplashDone: (v: boolean) => void;
}

const Ctx = createContext<SplashCtx>({ splashDone: false, setSplashDone: () => {} });

export function SplashProvider({ children }: { children: ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  const handleDone = useCallback((v: boolean) => {
    setSplashDone(v);
  }, []);

  return (
    <Ctx.Provider value={{ splashDone, setSplashDone: handleDone }}>
      {children}
    </Ctx.Provider>
  );
}

export const useSplash = () => useContext(Ctx);
