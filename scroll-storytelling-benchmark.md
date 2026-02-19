# Blueprint de storytelling scroll para portfólio pessoal (foco: recrutadores)

> Objetivo: transformar o portfólio em uma experiência narrativa que comunica **clareza de raciocínio, profundidade técnica e resultado de negócio** em poucos minutos de navegação.

## Princípios estratégicos
- Cada capítulo deve responder uma pergunta de recrutador: **o que você resolve, como resolve e qual impacto gera**.
- Scroll como “trilho narrativo”: menos liberdade caótica, mais progressão orientada.
- Provas quantitativas aparecem cedo (não apenas no fim).
- Motion serve entendimento (não decoração).
- Performance e acessibilidade são parte da mensagem de qualidade técnica.

---

## Estrutura em 6 capítulos

## Capítulo 1 — Abertura / Posicionamento (Hook)
**Objetivo emocional**
- Gerar confiança imediata e percepção de senioridade.
- Fazer o recrutador pensar: “essa pessoa tem proposta de valor clara”.

**Mensagem-chave**
- “Eu construo experiências web de alto impacto com foco em métricas reais.”

**Tipo de animação sugerida**
- Entrada curta (800–1200ms) com typographic reveal.
- Parallax sutil de background (amplitude baixa).
- Microinterações de cursor/hover discretas.

**Elementos visuais necessários**
- Headline forte (1 linha).
- Subheadline com especialidades (ex.: Frontend, WebGL, Performance, Product Thinking).
- Avatar/foto opcional + marca pessoal mínima.
- CTA primário: “Ver cases”.
- CTA secundário: “Baixar CV”.

---

## Capítulo 2 — Problemas que eu resolvo
**Objetivo emocional**
- Criar identificação com dores reais de produto e engenharia.
- Demonstrar maturidade de diagnóstico (não só execução).

**Mensagem-chave**
- “Seus desafios mais comuns em produto digital têm padrão — e solução.”

**Tipo de animação sugerida**
- Seção pinned com cards de dor avançando no scroll.
- Transições por opacidade + deslocamento vertical curto.
- Ícones/diagramas minimalistas sincronizados ao progresso.

**Elementos visuais necessários**
- 3–4 dores objetivas (ex.: LCP alto, baixa conversão, inconsistência UX, dívida técnica).
- Para cada dor: impacto no negócio (tempo, receita, churn, CAC etc.).
- Indicador de progresso de capítulo.

---

## Capítulo 3 — Método de trabalho (framework autoral)
**Objetivo emocional**
- Passar segurança operacional e previsibilidade.
- Reduzir risco percebido de contratação.

**Mensagem-chave**
- “Tenho processo claro do discovery à mensuração.”

**Tipo de animação sugerida**
- Timeline scroll-driven em 4 etapas.
- Conexões visuais (linhas/fluxos) sendo “desenhadas” conforme scroll.
- Troca de estado ativa por etapa (highlight + conteúdo lateral).

**Elementos visuais necessários**
- Etapas: Descoberta → Arquitetura → Implementação → Otimização.
- Entradas e saídas por etapa (inputs/outputs).
- Ferramentas por etapa (ex.: analytics, design system, testes, observabilidade).
- Evidência de colaboração cross-funcional (produto, design, dados, backend).

---

## Capítulo 4 — Cases e resultados
**Objetivo emocional**
- Converter percepção em prova concreta.
- Gerar confiança baseada em números e decisões técnicas.

**Mensagem-chave**
- “Eu entrego impacto mensurável, com justificativa técnica.”

**Tipo de animação sugerida**
- Sequência de 3 cases com pin parcial (cada case ocupa 1 bloco de scroll).
- Contadores/indicadores animados com moderação.
- Reveal progressivo: contexto → decisão técnica → resultado.

**Elementos visuais necessários**
- Para cada case:
  - Contexto do problema.
  - Sua responsabilidade.
  - Decisões técnicas-chave e trade-offs.
  - Métricas antes/depois (ex.: +28% CTR, -35% tempo de carregamento).
  - Link opcional para estudo completo/GitHub.

---

## Capítulo 5 — Profundidade técnica e credibilidade
**Objetivo emocional**
- Confirmar que o resultado não foi “sorte”, mas competência repetível.
- Reforçar autoridade técnica e capacidade de escala.

**Mensagem-chave**
- “Consigo operar com qualidade em diferentes níveis: código, arquitetura e produto.”

**Tipo de animação sugerida**
- Motion discreto de badges/stack (sem distração).
- Filtros/tabs com transição curta (stack, arquitetura, práticas).
- Destaque de trechos de decisão técnica (quote blocks).

**Elementos visuais necessários**
- Stack principal e profundidade por domínio.
- Práticas: performance budgets, acessibilidade, testes, CI/CD, monitoramento.
- Depoimentos curtos / logos de contexto / open-source.
- “Como penso trade-offs” (mini seção textual).

---

## Capítulo 6 — Conversão (CTA final)
**Objetivo emocional**
- Transformar admiração em ação prática.
- Reduzir atrito para contato.

**Mensagem-chave**
- “Vamos falar sobre como acelerar seus resultados de produto.”

**Tipo de animação sugerida**
- Redução de estímulo visual (quase estático).
- Ênfase em contraste, legibilidade e foco no formulário/ações.

**Elementos visuais necessários**
- CTA primário: “Agendar conversa”.
- CTAs secundários: “Baixar CV”, “Ver GitHub”, “LinkedIn”.
- Formulário curto (nome, email, contexto, prazo).
- SLA/expectativa de resposta (ex.: “retorno em 48h”).

---

## Sistema de timeline (conceitual)

## 1) Modelo narrativo
- Dividir a página em **blocos de 100–250vh** por capítulo.
- Cada capítulo possui:
  - `intro` (entrada),
  - `focus` (conteúdo central),
  - `resolve` (fechamento/transição).

## 2) Estados de animação
- **Idle**: elemento fora de foco.
- **Entering**: ganha ênfase.
- **Active**: conteúdo principal da viewport.
- **Exiting**: perde ênfase preparando próximo bloco.

## 3) Orquestração
- Um “master progress” de 0–100% da página.
- Subprogressos por capítulo (ex.: C3 = 0–25–50–75–100%).
- Eventos analíticos por marco:
  - capítulo visto,
  - capítulo concluído,
  - clique em CTA.

## 4) Regras de ritmo
- Capítulos 1–2: mais curtos (captura de atenção).
- Capítulos 3–5: mais densos (substância e prova).
- Capítulo 6: direto (conversão sem fricção).

---

## Estratégia de performance

## 1) Orçamento inicial
- Definir budgets de JS/CSS/mídia por capítulo.
- Priorizar render inicial do Capítulo 1 (< LCP competitivo).

## 2) Carregamento progressivo
- Lazy-load de mídia pesada fora da primeira dobra.
- Pré-carregamento apenas do próximo capítulo (“just in time”).
- Adiar assets avançados (3D/vídeo) até intenção de scroll real.

## 3) Animação eficiente
- Priorizar propriedades baratas (`transform`, `opacity`).
- Evitar layouts thrashing e listeners excessivos.
- Reduzir número de elementos simultaneamente animados.

## 4) Estratégia mobile
- Versão com menos animações e menor densidade visual.
- Troca de efeitos complexos por versões estáticas equivalentes.
- Foco em legibilidade e velocidade de decisão.

## 5) Acessibilidade e resiliência
- Suporte a `prefers-reduced-motion`.
- Navegação funcional sem JS crítico (graceful fallback de conteúdo).
- Contraste, foco visível e hierarquia semântica.

---

## Roadmap de implementação (sem código)

## Fase 0 — Descoberta (1 semana)
- Definir proposta de valor e tom narrativo.
- Selecionar 3 cases com métricas verificáveis.
- Coletar depoimentos/ativos de credibilidade.

**Entregáveis**
- Narrative brief (1 página).
- Lista de KPIs do portfólio (engajamento e conversão).

## Fase 1 — Arquitetura de conteúdo (1 semana)
- Estruturar capítulos, mensagens e CTAs.
- Definir mapa de evidências por capítulo (o que prova o quê).

**Entregáveis**
- Content map final.
- Wireflow vertical do scroll.

## Fase 2 — Motion strategy (1 semana)
- Definir sistema de timeline, ritmo e limites de animação.
- Planejar variações desktop/mobile/reduced-motion.

**Entregáveis**
- Motion spec (conceitual).
- Matriz de comportamento por breakpoint.

## Fase 3 — Design de interface (1–2 semanas)
- Produzir layout visual com foco em leitura e prova.
- Validar contraste, hierarquia e densidade informacional.

**Entregáveis**
- UI final por capítulo.
- Guia de componentes críticos (hero, case card, CTA block).

## Fase 4 — Implementação técnica (2–3 semanas)
- Construir a experiência em ordem de impacto:
  1. estrutura semântica,
  2. capítulos e CTAs,
  3. animações,
  4. otimizações.

**Entregáveis**
- Versão funcional completa.
- Checklist de performance e acessibilidade.

## Fase 5 — Medição e iteração contínua (contínuo)
- Instrumentar funil (scroll depth, capítulo concluído, CTA click, contato enviado).
- Rodar ciclos quinzenais de ajuste (copy, ritmo, posição de CTA, simplificação).

**Entregáveis**
- Dashboard de comportamento.
- Backlog de melhorias priorizado por impacto.

---

## Métricas de sucesso recomendadas (recrutadores)
- Taxa de conclusão até Capítulo 4 (cases).
- CTR do CTA “Agendar conversa”.
- Tempo médio até primeiro clique de contato.
- Taxa de download de CV/GitHub click.
- Qualidade do inbound (mensagens com contexto técnico).

## Resultado esperado
Um portfólio que não apenas “mostra trabalhos”, mas **demonstra raciocínio, execução e impacto**, guiando recrutadores da atenção inicial até a decisão de contato com o mínimo de fricção.
