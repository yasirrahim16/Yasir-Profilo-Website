"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
export default function CustomCursor() {
  const reduced = useReducedMotion(); const dot = useRef<HTMLDivElement>(null); const ring = useRef<HTMLDivElement>(null);
  useEffect(() => { if (reduced) return; let x=0,y=0,tx=0,ty=0, raf=0; const onMove=(e:PointerEvent)=>{tx=e.clientX;ty=e.clientY}; const tick=()=>{x+=(tx-x)*.16;y+=(ty-y)*.16;if(dot.current){dot.current.style.transform=`translate3d(${tx-2}px,${ty-2}px,0)`}if(ring.current){ring.current.style.transform=`translate3d(${x-18}px,${y-18}px,0)`}raf=requestAnimationFrame(tick)}; window.addEventListener('pointermove',onMove,{passive:true}); raf=requestAnimationFrame(tick); return()=>{window.removeEventListener('pointermove',onMove);cancelAnimationFrame(raf)}; },[reduced]);
  if(reduced) return null;
  return <><div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[90] h-1 w-1 rounded-full bg-white shadow-[0_0_18px_rgba(92,225,255,.95)]"/><div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-9 w-9 rounded-full border border-white/15 bg-white/[.015] md:block"/></>;
}
