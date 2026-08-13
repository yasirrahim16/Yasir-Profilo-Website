"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLenis() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 0.9 });
    const ticker = (time: number) => lenis.raf(time * 1000);
    const sync = () => ScrollTrigger.update();
    lenis.on("scroll", sync);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.off("scroll", sync); gsap.ticker.remove(ticker); lenis.destroy(); };
  }, []);
}
