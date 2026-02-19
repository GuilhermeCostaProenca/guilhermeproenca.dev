'use client';

import Link from 'next/link';
import { cases } from '@/content/cases';
import { trackEvent } from '@/lib/scroll/analytics';

export function CaseCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
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
