"use client";
import { useRef } from "react";
import Lottie from "lottie-react";
import { useIntersection } from "@/hooks/useIntersection";

const animationData = {
  v: "5.7.4", fr: 30, ip: 0, op: 90, w: 160, h: 160, nm: "Signal", ddd: 0, assets: [],
  layers: [{ ddd: 0, ind: 1, ty: 4, nm: "signal", sr: 1, ks: { o: { a: 0, k: 100 }, r: { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [360] }] }, p: { a: 0, k: [80,80,0] }, a: { a: 0, k: [0,0,0] }, s: { a: 0, k: [100,100,100] } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "el", s: { a: 0, k: [86,86] }, p: { a: 0, k: [0,0] } }, { ty: "st", c: { a: 0, k: [0.36,0.88,1,1] }, o: { a: 0, k: 90 }, w: { a: 0, k: 2 }, lc: 2, lj: 1 }, { ty: "tr", p: { a: 0, k: [0,0] }, a: { a: 0, k: [0,0] }, s: { a: 0, k: [100,100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 } }] }], ip: 0, op: 90, st: 0, bm: 0 }]
} as const;

export default function LottieSignal() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref, { threshold: 0.15 });
  return <div ref={ref} aria-hidden="true" className="h-20 w-20 opacity-70"><Lottie animationData={animationData} loop autoplay={visible} /></div>;
}
