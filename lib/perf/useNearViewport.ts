'use client';

import { RefObject, useEffect } from 'react';

type NearViewportOptions = {
  rootMargin?: string;
  once?: boolean;
};

export function useNearViewport(
  ref: RefObject<Element | null>,
  onNear: () => void,
  options?: NearViewportOptions,
): void {
  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    let called = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (called && options?.once !== false) continue;

          called = true;
          onNear();

          if (options?.once !== false) {
            observer.disconnect();
          }
        }
      },
      { rootMargin: options?.rootMargin ?? '200px 0px' },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [onNear, options?.once, options?.rootMargin, ref]);
}
