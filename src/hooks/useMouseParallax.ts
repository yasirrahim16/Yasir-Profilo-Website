"use client";
import { useEffect, useRef } from "react";
export function useMouseParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const move = (e: PointerEvent) => { tx = (e.clientX / window.innerWidth - 0.5) * 2; ty = (e.clientY / window.innerHeight - 0.5) * 2; };
    const tick = () => { x += (tx - x) * .08; y += (ty - y) * .08; el.style.setProperty("--mx", `${x}`); el.style.setProperty("--my", `${y}`); raf = requestAnimationFrame(tick); };
    window.addEventListener("pointermove", move, { passive: true }); raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return ref;
}
