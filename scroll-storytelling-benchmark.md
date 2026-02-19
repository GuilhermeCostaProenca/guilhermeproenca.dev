# Benchmark de storytelling scroll (referências externas)

## Método
- Análise qualitativa de narrativa e mecânicas visíveis no front.
- Sondagem técnica via HTML inicial (títulos, headings, presença de `canvas`/`video` e indícios de libs como GSAP/ScrollTrigger/Lenis/Webflow).
- Observação adicional em browser headless quando possível.

## 1) farmminerals.com/promo
1. **Estrutura de narrativa**: jornada em blocos longos (problema agrícola → descoberta tecnológica → prova visual → adesão ao programa).
2. **Pinned sections**: uso aparente de trechos “segurados” para sustentar texto enquanto mídia evolui no fundo.
3. **Tipo de animação**: forte uso de timeline vinculada ao scroll (indícios de GSAP + ScrollTrigger + Lenis), com transições suaves e parallax discreto.
4. **3D/WebGL**: presença de `canvas` e vídeos, sugerindo cena interativa/visualização animada.
5. **Ritmo**: inicia com contexto amplo, acelera em “provas” e desacelera no CTA final.
6. **CTA**: CTA primário antecipado e repetido (“apply/join”), com reforço no encerramento.
7. **Condução emocional**: de fricção (desperdício) para esperança (eficiência e impacto positivo).

## 2) studiodialect.com
1. **Estrutura de narrativa**: manifesto de estúdio + credenciais + portfólio, com tom editorial.
2. **Pinned sections**: provável predominância de camadas fixas/overlays para navegação e transições.
3. **Tipo de animação**: transições cinemáticas de cena, motion tipográfico, mudanças de estado por scroll.
4. **3D/WebGL**: presença forte de render em `canvas` na inspeção dinâmica.
5. **Ritmo**: cadenciado e contemplativo, com pausas para leitura de posicionamento de marca.
6. **CTA**: CTA de contato/entrada em projetos, menos agressivo e mais “curatorial”.
7. **Condução emocional**: exclusividade, sofisticação e autoridade criativa.

## 3) moblinks.fr
1. **Estrutura de narrativa**: narrativa híbrida marca + coleção/produto + prova social.
2. **Pinned sections**: seções de produto com foco central e mudanças contextuais ao rolar.
3. **Tipo de animação**: hero animado, reveals por blocos, microinterações em cards/produtos.
4. **3D/WebGL**: múltiplos `canvas` e vídeo sugerem uso visual rico.
5. **Ritmo**: alternância entre impacto visual rápido e trechos objetivos de conversão.
6. **CTA**: foco comercial (produto/newsletter), CTAs frequentes e claros.
7. **Condução emocional**: energia de marca, pertencimento social e impulso de compra.

## 4) lightweight.info/en
1. **Estrutura de narrativa**: produto premium por capítulos técnicos (engenharia, fabricação, tecnologia proprietária).
2. **Pinned sections**: sticky técnico para manter visual do produto enquanto argumentos mudam.
3. **Tipo de animação**: reveals progressivos, troca de cenas de produto e elementos técnicos.
4. **3D/WebGL**: presença de múltiplos `canvas`, indicando visualização avançada.
5. **Ritmo**: ritmo metódico, quase documental, com foco em credibilidade.
6. **CTA**: CTAs secundários distribuídos (explorar linhas, detalhes, contato).
7. **Condução emocional**: admiração por performance e precisão artesanal.

## 5) chaingpt.org/#solutions
1. **Estrutura de narrativa**: hero de valor + métricas + catálogo de soluções + ecossistema.
2. **Pinned sections**: menor ênfase em “filme de scroll”; mais seções modulares com transições.
3. **Tipo de animação**: GSAP/ScrollTrigger/Lenis aparentes, com counters, reveals e gradientes dinâmicos.
4. **3D/WebGL**: sem evidência forte de WebGL no HTML inicial (predominância de vídeo/2D animado).
5. **Ritmo**: rápido e orientado a informação, com escaneabilidade.
6. **CTA**: múltiplos CTAs (produto, docs, comunidade, ações de funil).
7. **Condução emocional**: FOMO + escala + confiança por números.

## 6) lusion.co
1. **Estrutura de narrativa**: estúdio/showcase orientado a “wow effect” + assinatura de expertise.
2. **Pinned sections**: provável uso de camadas fixas para compor transições de cenas.
3. **Tipo de animação**: foco em motion e transições de alto acabamento; interface minimal para destacar visual.
4. **3D/WebGL**: presença de múltiplos `canvas` com provável pipeline WebGL.
5. **Ritmo**: impacto alto no início, seguido de vitrines curadas.
6. **CTA**: CTA de relacionamento (newsletter/contato), mais branding que performance direta.
7. **Condução emocional**: encantamento e confiança em capacidade técnica-artística.

## 7) directionless.webflow.io
1. **Estrutura de narrativa**: storytelling autoral em capítulos textuais curtos (quase poema-manifesto).
2. **Pinned sections**: sticky para manter composição enquanto frases evoluem com scroll.
3. **Tipo de animação**: GSAP/ScrollTrigger + base Webflow, com tipografia em sequência e transições suaves.
4. **3D/WebGL**: presença de `canvas`, possivelmente para efeitos ambiente.
5. **Ritmo**: lento, respirado, com foco em frase por frase.
6. **CTA**: CTA implícito (engajamento emocional), não necessariamente transacional.
7. **Condução emocional**: identificação, vulnerabilidade e inspiração.

---

## Padrão comum entre os sites
- Estrutura em **capítulos de scroll** com uma ideia central por viewport.
- Combinação de **âncoras fixas (pinned/sticky)** + conteúdo que muda ao redor.
- **Animação guiada por scroll** (timeline), evitando autoplay excessivo.
- Uso de **mídia imersiva** (canvas/video) para elevar percepção de qualidade.
- **Ritmo intencional**: alternância entre momentos de impacto e momentos de leitura.
- **CTAs contextualizados** por etapa narrativa (não só no rodapé).

## Arquitetura genérica recomendada (storytelling scroll)
1. **Capítulo 0 — Hook (0–100vh)**
   - Tese em 1 frase + sinal visual forte.
   - CTA leve (“ver casos”, “explorar”).
2. **Capítulo 1 — Problema/Contexto (100–250vh)**
   - 2–3 dores do público.
   - Pinned visual com texto sequencial.
3. **Capítulo 2 — Método (250–450vh)**
   - Como você resolve (framework próprio em 3 passos).
   - Timeline scroll-synced (cards/diagramas).
4. **Capítulo 3 — Provas (450–750vh)**
   - Cases com métricas antes/depois.
   - Alternância entre vídeo curto, quote e dado objetivo.
5. **Capítulo 4 — Autoridade (750–900vh)**
   - Stack técnica, clientes, depoimentos.
   - Motion discreto para não competir com conteúdo.
6. **Capítulo 5 — Conversão (900+vh)**
   - CTA primário claro + CTA secundário.
   - Fricção baixa (agenda, email, formulário curto).

### Stack técnica base (agnóstica)
- Orquestração de scroll: **GSAP ScrollTrigger** ou alternativa equivalente.
- Suavização de navegação: **Lenis** (ou nativo, se performance exigir).
- Seções pinned: CSS `position: sticky` + triggers JS para estados.
- Camada visual avançada: WebGL (Three.js) **somente** onde agrega narrativa.
- Observabilidade: eventos por capítulo (view, completion, CTA click) para otimização de funil.

## Aplicação para portfólio técnico pessoal (recrutadores)
### Objetivo
Transformar “lista de projetos” em **narrativa de competência comprovada**.

### Estrutura sugerida
1. **Hero**: “Eu projeto e entrego experiências web de alto impacto com foco em resultado”.
2. **Capítulo Problema**: gargalos comuns de produto (LCP alto, baixa conversão, UX inconsistente).
3. **Capítulo Solução**: seu processo (Descoberta → Arquitetura → Implementação → Mensuração).
4. **Capítulo Cases**: 3 cases com métricas reais (ex.: +28% CTR, -35% tempo de carregamento).
5. **Capítulo Profundidade Técnica**: stack, padrões, decisões de arquitetura e trade-offs.
6. **Capítulo Credibilidade**: depoimentos/colaborações/open-source.
7. **Final CTA**: “Agendar conversa” + “baixar CV” + “ver GitHub”.

### Diretrizes de UX para recrutadores
- Cada viewport deve responder: **“o que esse profissional resolve?”**
- Dados e resultados sempre visíveis (sem esconder em hover).
- CTA persistente, porém não intrusivo.
- Versão mobile com animação reduzida e legibilidade máxima.
- Acessibilidade: suporte a `prefers-reduced-motion` e foco em contraste.
