import { Chapter } from '@/components/Chapter';
import { chapterRegistry } from '@/lib/scroll/registry';

const chapter = chapterRegistry[4];

export function CredibilitySection() {
  return (
    <Chapter id={chapter.id} title={chapter.title} analyticsKey={chapter.analyticsKey} ctas={chapter.ctas}>
      <p>Como trabalho: colaboração com design/produto, foco em acessibilidade e performance budget.</p>
      <p className="mt-2">Links (placeholder): GitHub, LinkedIn, artigos técnicos.</p>
    </Chapter>
  );
}
