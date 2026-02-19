'use client';

import { useEffect, useRef } from 'react';
import { chapterRegistry } from './registry';
import { trackEvent } from './analytics';

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function useScrollEngine(): void {
  const activeKeys = useRef<Set<string>>(new Set());

  useEffect(() => {
    const sections = chapterRegistry
      .map((chapter) => document.querySelector<HTMLElement>(chapter.startMarker))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = entry.target.getAttribute('data-analytics-key');
          if (!key) continue;

          if (entry.isIntersecting && !activeKeys.current.has(key)) {
            activeKeys.current.add(key);
            trackEvent({ type: 'chapter_enter', key, timestamp: Date.now() });
          }

          if (!entry.isIntersecting && activeKeys.current.has(key)) {
            activeKeys.current.delete(key);
            trackEvent({ type: 'chapter_exit', key, timestamp: Date.now() });
          }
        }
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        for (const chapter of chapterRegistry) {
          const element = document.querySelector<HTMLElement>(chapter.startMarker);
          if (!element) continue;
          const rect = element.getBoundingClientRect();
          const progress = clamp(1 - rect.top / window.innerHeight, 0, 1);
          element.style.setProperty('--chapter-progress', progress.toFixed(3));
        }
        raf = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
