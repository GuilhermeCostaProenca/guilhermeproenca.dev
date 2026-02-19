export type CaseItem = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  stack: string[];
};

export const cases: CaseItem[] = [
  {
    id: 'case-a',
    title: 'Case A (placeholder)',
    summary: 'Redução de fricção no checkout com foco em conversão.',
    impact: '+18% conversão em 8 semanas',
    stack: ['Next.js', 'A/B testing', 'Analytics'],
  },
  {
    id: 'case-b',
    title: 'Case B (placeholder)',
    summary: 'Otimização de performance em home de alto tráfego.',
    impact: '-34% LCP médio no mobile',
    stack: ['Core Web Vitals', 'Image optimization', 'Caching'],
  },
  {
    id: 'case-c',
    title: 'Case C (placeholder)',
    summary: 'Reestruturação de design system e consistência UX.',
    impact: '-22% tempo de entrega de novas features',
    stack: ['Design System', 'TypeScript', 'Storybook'],
  },
];
