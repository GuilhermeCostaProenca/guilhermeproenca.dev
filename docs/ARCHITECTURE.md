# ARCHITECTURE

## Estrutura de pastas
- `app/`: rotas App Router e páginas.
- `components/`: componentes reutilizáveis de UI e runtime.
- `sections/`: capítulos do storytelling.
- `lib/scroll/`: registry, tipos, engine e analytics local.
- `lib/perf/`: utilidades de carregamento progressivo.
- `content/`: dados de conteúdo (cases fake).
- `docs/`: decisões e guias técnicos.

## Contratos principais
- `chapterRegistry` define metadados narrativos e integrações.
- `useScrollEngine` controla enter/exit + progress por CSS custom property.
- `trackEvent` mantém observabilidade mínima, sem SDK invasivo.
