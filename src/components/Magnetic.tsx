"use client";
import { PropsWithChildren, useRef } from "react";
export default function Magnetic({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const ref=useRef<HTMLDivElement>(null);
  return <div ref={ref} className={`group relative inline-flex ${className}`} onPointerMove={(e)=>{const r=ref.current?.getBoundingClientRect();if(!r)return;const x=(e.clientX-r.left-r.width/2)*.18;const y=(e.clientY-r.top-r.height/2)*.18;ref.current?.style.setProperty('--tx',`${x}px`);ref.current?.style.setProperty('--ty',`${y}px`)}} onPointerLeave={()=>{ref.current?.style.setProperty('--tx','0px');ref.current?.style.setProperty('--ty','0px')}} style={{transform:'translate3d(var(--tx,0),var(--ty,0),0)',transition:'transform .35s cubic-bezier(.16,1,.3,1)'}}>{children}</div>;
}
