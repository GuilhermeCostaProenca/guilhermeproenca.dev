'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { cases } from '@/content/cases';
import { useNearViewport } from '@/lib/perf/useNearViewport';
import { trackEvent } from '@/lib/scroll/analytics';

export function CaseCards() {
  const router = useRouter();
  const prefetchRef = useRef<HTMLDivElement>(null);

  const prefetchCases = useCallback(() => {
    for (const item of cases) {
      router.prefetch(`/cases/${item.id}`);
    }
  }, [router]);

  useNearViewport(prefetchRef, prefetchCases, { rootMargin: '320px 0px' });

  return (
    <div ref={prefetchRef} className="grid gap-4 md:grid-cols-3">
      {cases.map((item) => (
        <article key={item.id} className="rounded border border-zinc-700 p-4">
          <h3 className="text-lg font-medium">{item.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{item.summary}</p>
          <p className="mt-2 text-sm text-emerald-300">{item.impact}</p>
          <Link
            href={`/cases/${item.id}`}
            className="mt-3 inline-block text-sm"
            onClick={() =>
              trackEvent({ type: 'case_open', key: `case_${item.id}`, timestamp: Date.now() })
            }
          >
            Abrir case
          </Link>
        </article>
      ))}
    </div>
  );
}
