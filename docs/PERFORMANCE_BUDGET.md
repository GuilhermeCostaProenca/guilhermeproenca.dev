# PERFORMANCE_BUDGET

## Metas iniciais (MVP)
- JS inicial: até ~180KB gzip (rota home).
- LCP mobile (4G mediano): <= 2.8s.
- CLS: <= 0.1.
- TBT: <= 200ms em device intermediário.

## Estratégias adotadas
- Lazy loading da seção de `Cases` com `next/dynamic`.
- Engine de scroll baseada em `IntersectionObserver` + `requestAnimationFrame` leve.
- Sem WebGL no MVP.
- Sem libs de animação pesada na fase inicial.

## Evolução
- Só adicionar GSAP/ScrollTrigger na Fase 2 e apenas para capítulos críticos.
- Medir custo incremental por capítulo antes de promover para produção.
