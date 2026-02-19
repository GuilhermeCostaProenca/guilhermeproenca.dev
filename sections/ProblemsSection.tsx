import { Chapter } from '@/components/Chapter';
import { chapterRegistry } from '@/lib/scroll/registry';

const chapter = chapterRegistry[1];

export function ProblemsSection() {
  return (
    <Chapter id={chapter.id} title={chapter.title} analyticsKey={chapter.analyticsKey} ctas={chapter.ctas}>
      <ul className="list-disc space-y-2 pl-6">
        <li>LCP alto em páginas críticas.</li>
        <li>Baixa conversão por fricção de jornada.</li>
        <li>Dívida técnica desacelerando entrega.</li>
      </ul>
    </Chapter>
  );
}
