import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PersistentCTA } from '@/components/PersistentCTA';
import { ScrollRuntime } from '@/components/ScrollRuntime';
import { HookSection } from '@/sections/HookSection';
import { ProblemsSection } from '@/sections/ProblemsSection';
import { MethodSection } from '@/sections/MethodSection';
import { CredibilitySection } from '@/sections/CredibilitySection';
import { ConversionSection } from '@/sections/ConversionSection';

const CasesSection = dynamic(() => import('@/sections/CasesSection'), {
  loading: () => <div className="min-h-[40vh] px-6 py-20">Carregando seção de cases...</div>,
});

export default function HomePage() {
  return (
    <main>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
        Pular para conteúdo principal
      </a>
      <ScrollRuntime />
      <PersistentCTA />
      <nav
        className="sticky top-0 z-40 flex gap-4 border-b border-zinc-800 bg-zinc-950/90 px-6 py-3 text-sm backdrop-blur"
        aria-label="Navegação entre capítulos"
      >
        <a href="#hook">Hook</a>
        <a href="#problemas">Problemas</a>
        <a href="#metodo">Método</a>
        <a href="#cases">Cases</a>
        <a href="#credibilidade">Credibilidade</a>
        <a href="#conversao">Conversão</a>
      </nav>
      <div id="main-content">
        <HookSection />
        <ProblemsSection />
        <MethodSection />
        <Suspense fallback={<div className="min-h-[30vh] px-6 py-8">Preparando casos...</div>}>
          <CasesSection />
        </Suspense>
        <CredibilitySection />
        <ConversionSection />
      </div>
    </main>
  );
}
