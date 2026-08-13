"use client";
import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function SiteClient({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  useLenis();
  useEffect(() => { document.documentElement.dataset.motion = reduced ? "reduced" : "full"; }, [reduced]);
  return <>{children}</>;
}
