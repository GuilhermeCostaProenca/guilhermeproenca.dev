import { ReactNode } from 'react';

type ChapterProps = {
  id: string;
  title: string;
  analyticsKey: string;
  children: ReactNode;
  ctas?: { label: string; href: string }[];
  pinned?: boolean;
};

export function Chapter({ id, title, analyticsKey, children, ctas, pinned }: ChapterProps) {
  return (
    <section
      id={id}
      data-analytics-key={analyticsKey}
      className="relative min-h-screen border-b border-zinc-800 px-6 py-20 md:px-10"
    >
      <div className={pinned ? 'md:sticky md:top-20' : undefined}>
        <p className="text-xs uppercase tracking-widest text-zinc-400">{id}</p>
        <h2 className="mt-2 text-3xl font-semibold">{title}</h2>
        <div className="mt-6 max-w-4xl text-zinc-300">{children}</div>
        {ctas && ctas.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <a
                key={`${id}-${cta.href}`}
                href={cta.href}
                className="rounded border border-zinc-600 px-3 py-2 text-sm no-underline hover:border-zinc-300"
              >
                {cta.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
