"use client";
import { useEffect, useRef } from "react";
export default function NoiseBackdrop() {
  const canvasRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{const c=canvasRef.current;if(!c)return;const ctx=c.getContext('2d');if(!ctx)return;let raf=0;let dpr=Math.min(window.devicePixelRatio,2);const resize=()=>{dpr=Math.min(window.devicePixelRatio,2);c.width=window.innerWidth*dpr;c.height=window.innerHeight*dpr;c.style.width='100%';c.style.height='100%'};resize();window.addEventListener('resize',resize);const render=()=>{const w=c.width,h=c.height;ctx.clearRect(0,0,w,h);for(let i=0;i<90;i++){const x=Math.random()*w,y=Math.random()*h,a=Math.random()*.08;ctx.fillStyle=`rgba(255,255,255,${a})`;ctx.fillRect(x,y,1,1)}raf=requestAnimationFrame(render)};raf=requestAnimationFrame(render);return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize)}} ,[]);
  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full opacity-40 mix-blend-screen pointer-events-none"/>;
}
