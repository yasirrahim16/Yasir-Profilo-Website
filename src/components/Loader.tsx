"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = window.setTimeout(() => setShow(false), 1200); return () => window.clearTimeout(t); }, []);
  if (!show) return null;
  return <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: .82, duration: .4 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#030407] pointer-events-none"><div className="w-[180px]"><div className="flex items-center justify-between text-[10px] uppercase tracking-[.32em] text-white/45"><span>Yasir</span><span>01</span></div><div className="mt-3 h-[1px] overflow-hidden bg-white/10"><motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: .78, ease: 'easeInOut' }} className="h-full w-full bg-gradient-to-r from-cyan via-violet to-lime" /></div></div></motion.div>;
}
