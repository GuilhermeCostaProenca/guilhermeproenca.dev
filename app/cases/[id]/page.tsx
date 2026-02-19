import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cases } from '@/content/cases';

type PageProps = {
  params: { id: string };
};

export default function CaseDetailPage({ params }: PageProps) {
  const item = cases.find((entry) => entry.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm">
        ← Voltar
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{item.title}</h1>
      <p className="mt-4 text-zinc-300">{item.summary}</p>
      <p className="mt-3 text-emerald-300">{item.impact}</p>
      <p className="mt-8 text-sm text-zinc-400">Case detalhado em construção (placeholder do MVP).</p>
    </main>
  );
}
