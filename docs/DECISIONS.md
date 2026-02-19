# DECISIONS

## D-001: Sem WebGL no MVP
**Motivo**: reduzir risco de performance e complexidade antes de validar narrativa.

## D-002: Engine própria mínima para scroll
**Motivo**: preparar contrato estável (`registry`, `enter/exit`, `progress`) antes de acoplar GSAP.

## D-003: Cases em rota leve
**Motivo**: manter home focada e permitir expansão incremental de conteúdo detalhado.

## D-004: Prefetch de cases por proximidade
**Motivo**: melhorar tempo de navegação para detalhes sem prefetch agressivo no carregamento inicial.

## D-005: Scroll progress com fallback para reduced motion
**Motivo**: manter observabilidade de capítulos e reduzir estímulo de movimento para quem pede menos animação.
