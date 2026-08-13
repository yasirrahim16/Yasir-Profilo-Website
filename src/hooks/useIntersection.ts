"use client";
import { RefObject, useEffect, useState } from "react";

export function useIntersection<T extends Element>(ref: RefObject<T | null>, options?: IntersectionObserverInit) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options]);
  return visible;
}
