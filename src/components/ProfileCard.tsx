"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[420px] aspect-[.88]"
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
        ref.current?.style.setProperty("--rx", `${rx}deg`);
        ref.current?.style.setProperty("--ry", `${ry}deg`);
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--rx", "0deg");
        ref.current?.style.setProperty("--ry", "0deg");
      }}
      style={{
        transform: "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
        transition: "transform .45s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-br from-cyan/25 via-violet/15 to-lime/20 blur-2xl" />
      <div className="glass relative h-full overflow-hidden rounded-[2.2rem] p-2">
        <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-black/50">
          <Image
            src="/images/profile-placeholder.svg"
            alt="Yasir Rahim profile placeholder"
            fill
            priority
            className="object-cover opacity-85"
            sizes="(max-width: 900px) 90vw, 420px"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,.3),transparent_24%),linear-gradient(180deg,transparent_30%,rgba(3,4,7,.78))]" />
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[.3em] text-white/45">Identity / 01</p>
              <p className="mt-2 font-display text-2xl">Yasir Rahim</p>
            </div>
            <span className="float grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-cyan">
              ↗
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -right-5 top-14 hidden rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[9px] uppercase tracking-[.22em] text-white/45 backdrop-blur-xl sm:block">
        Available / 2026
      </div>
      <div className="absolute -left-5 bottom-20 hidden rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[9px] uppercase tracking-[.22em] text-white/45 backdrop-blur-xl sm:block">
        WebGL / Motion
      </div>
    </motion.div>
  );
}
