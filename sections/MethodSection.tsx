import { Chapter } from '@/components/Chapter';
import { chapterRegistry } from '@/lib/scroll/registry';

const chapter = chapterRegistry[2];

export function MethodSection() {
  return (
    <Chapter
      id={chapter.id}
      title={chapter.title}
      analyticsKey={chapter.analyticsKey}
      ctas={chapter.ctas}
      pinned={chapter.enablePin}
    >
      <ol className="list-decimal space-y-2 pl-6">
        <li>Descoberta e leitura de contexto.</li>
        <li>Arquitetura de solução e trade-offs.</li>
        <li>Implementação incremental testável.</li>
        <li>Medição e otimização contínua.</li>
      </ol>
    </Chapter>
  );
}
