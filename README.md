# Portfolio Storytelling MVP

MVP de portfólio com narrativa por scroll voltada para recrutadores.

## Rodando localmente
```bash
npm install
npm run dev
```
Abra `http://localhost:3000`.

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`

## O que já existe no MVP
- Estrutura de 6 capítulos com anchors e placeholders.
- CTA persistente + CTAs contextuais.
- `Chapter Registry` e `Scroll Engine` com eventos `chapter_enter`, `chapter_exit`, `case_open`.
- Rota leve de cases em `/cases/[id]`.
- Base documental: arquitetura, roadmap, budget e decisões.

## Evolução para animações (Fase 2)
1. Plugar GSAP/ScrollTrigger no contrato atual do `chapterRegistry`.
2. Aplicar animações apenas em capítulos 1, 3 e 4.
3. Preservar fallback para `prefers-reduced-motion`.
