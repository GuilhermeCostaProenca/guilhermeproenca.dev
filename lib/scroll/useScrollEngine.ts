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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const chapterElements = chapterRegistry
      .map((chapter) => ({
        chapter,
        element: document.querySelector<HTMLElement>(chapter.startMarker),
      }))
      .filter((item): item is { chapter: (typeof chapterRegistry)[number]; element: HTMLElement } =>
        Boolean(item.element),
      );

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

    chapterElements.forEach(({ element }) => observer.observe(element));

    if (prefersReducedMotion) {
      chapterElements.forEach(({ element }) => element.style.setProperty('--chapter-progress', '1'));
      return () => observer.disconnect();
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        for (const { element } of chapterElements) {
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
