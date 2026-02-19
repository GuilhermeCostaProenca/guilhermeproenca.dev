import { Chapter } from '@/components/Chapter';
import { CaseCards } from '@/components/CaseCards';
import { chapterRegistry } from '@/lib/scroll/registry';

const chapter = chapterRegistry[3];

export default function CasesSection() {
  return (
    <Chapter id={chapter.id} title={chapter.title} analyticsKey={chapter.analyticsKey} ctas={chapter.ctas}>
      <p className="mb-4">Três mini-cases com contexto, decisão técnica e impacto.</p>
      <CaseCards />
    </Chapter>
  );
}
