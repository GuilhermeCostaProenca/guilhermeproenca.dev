import { Chapter } from '@/components/Chapter';
import { chapterRegistry } from '@/lib/scroll/registry';

const chapter = chapterRegistry[0];

export function HookSection() {
  return (
    <Chapter id={chapter.id} title={chapter.title} analyticsKey={chapter.analyticsKey} ctas={chapter.ctas}>
      <p>Prova rápida: entrego produto digital com foco em métricas, performance e clareza técnica.</p>
    </Chapter>
  );
}
