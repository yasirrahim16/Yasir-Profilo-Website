"use client";
import { useEffect, useState } from "react";
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => { const q = window.matchMedia("(prefers-reduced-motion: reduce)"); const onChange = () => setReduced(q.matches); onChange(); q.addEventListener("change", onChange); return () => q.removeEventListener("change", onChange); }, []);
  return reduced;
}
