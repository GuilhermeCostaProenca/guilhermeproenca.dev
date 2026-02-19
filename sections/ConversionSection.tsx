import { Chapter } from '@/components/Chapter';
import { chapterRegistry } from '@/lib/scroll/registry';

const chapter = chapterRegistry[5];

export function ConversionSection() {
  return (
    <Chapter id={chapter.id} title={chapter.title} analyticsKey={chapter.analyticsKey} ctas={chapter.ctas}>
      <p>CTA final: contato direto + download de CV.</p>
      <div className="mt-4 flex gap-3">
        <a href="mailto:hello@example.com">Contato</a>
        <a href="#" aria-disabled>
          Download CV (placeholder)
        </a>
      </div>
    </Chapter>
  );
}
