---
id: v1-to-v0-migration-updates
title: V1 to V0 Migration Updates
description: Registro das atualizações e otimizações de conversão (UX/UI) implementadas no projeto v1 (Espanhol) para homologação e replicação no projeto v0 (Inglês).
status: pending
---

# Atualizações do V1 para o V0 (Inglês)

Este documento registra as principais otimizações de Funil e UI/UX (muitas baseadas nos dados do Microsoft Clarity) realizadas no repositório `infid_v1`. O intuito é garantir que o projeto `infid_v0` (em inglês) receba as mesmas melhorias de conversão.

## 1. Otimização do Upload de Foto (Prevenção de "Dead Clicks")
Os mapas de calor do Clarity indicaram frustração no botão de upload de fotos (mobile). A solução foi englobar toda a área (incluindo ícone e texto) em uma tag `<label>` expansiva, com classes responsivas e de feedback de interação.

**Mudanças chaves (em `step-2/page.tsx`):**
- Uso de `cursor-pointer relative flex flex-col items-center justify-center gap-3 group overflow-hidden active:scale-[0.98]`.
- Adição imediata de estado de carregamento `isFetchingProfile = true` dentro da função `handleImageChange`, prevenindo cliques repetidos, antes da inicialização do `FileReader`.
- Modificação na UI pós-upload para feedback positivo visual (borda verde, "FOTO SUBIDA CON ÉXITO").

## 2. Momentum e Auto-Scroll no Formulário
Com diversos passos exigidos antes da submissão (idade, gênero, status, suspeita, etc), implementamos uma rolagem automática suave entre as seções para manter o engajamento do usuário ("Momentum").

**Implementação:**
- Inclusão do `useRef` para referenciar o DOM de cada passo do formulário (ex: `ageRef`, `relationshipRef`, etc).
- Criação da função auxiliar `scrollToSection`:
```tsx
const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  setTimeout(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 200)
}
```
- E na seleção de botões usamos, por exemplo: `onClick={() => { setSelectedGender(g); scrollToSection(ageRef); }}`.

## 3. Gatilho de Escassez e UI do Call-to-Action (CTA) Final
Para encorajar a finalização do escaneamento, o botão principal do passo 2 ("RUN DEEP SCAN") foi enriquecido.

**Mudanças chaves:**
- Adição de animações `active:scale-95` aos botões de todo o funil, fornecendo resposta tátil.
- Ao alcançar a condição de form completado (`isFormComplete === true`), o botão ganha:
  - Estilo premium: `bg-gradient-to-r from-cyan-600 to-blue-600 shadow-[0_0_25px_rgba(6,182,212,0.5)] animate-pulse-subtle`
  - Uma animação sobreposta (`animate-shimmer`), imitando um brilho passando pelo botão.
- Mensagem de Escassez dinâmica aparecendo em conformidade: `⚠️ Solo 3 escaneos disponibles en su región hoy.` (ou equivalente em inglês: "Only 3 scans available in your region today.")

## 4. Rastreamento e Eventos de Conversão (EasyTracker e Meta Pixel)
Melhorias no firing de `InitiateCheckout` e inclusão do `CompleteRegistration`.

- **Event: Complete Registration:** Acionado quando o lead clica no botão "INICIAR ESCANEO PROFUNDO" no formulário pré-carregamento (quando form completo).
- **Event: Initiate Checkout (IC):** Assegurou-se que o IC continuasse a disparar corretamente através do clique do botão de checkout final no `step-3` (página final de escaneamento antes da monetização), redirecionando via url parameter ou fetch manual da URL do postback `etr.tindercheck.xyz`.

## 5. Seletor de País Avançado para Input do WhatsApp
Para o formulário de Input do WhatsApp (`activeInputTab === 'whatsapp'`), o `v1` recebeu um dropdown customizado com barra de pesquisa para otimizar conversões internacionais. 

**Componentes chave a importar:**
- Array de `COUNTRIES` contendo `{ code: string, iso: string, name: string, placeholder: string }`.
- Lógica de estado e menu dropdown para `isCountryDropdownOpen`, `selectedCountry` e `countrySearch`.

## 6. Otimizações Guiadas pelo Microsoft Clarity (Prevenção de Abandono)
Ao analisar as sessões (Dead Clicks e Rage Clicks) e as quedas na home e na página de resultados, implementamos:

- **Touch-Targets Maior em Abas Mobile:** As opções (Instagram, Foto, WhatsApp) receberam mais padding (`py-4`), `active:scale-95`, manipulando `touch-manipulation` com as bordas ativas ampliando a área clicável.
- **Trigger de Auto-Scroll no "Perfil Encontrado":** O bloco de texto com pseudo-resultado gerava *rage clicks* no mobile. Convertê-lo em um grande botão via `cursor-pointer relative flex flex-col items-center justify-center gap-3 group active:scale-98 hover:bg-[#0f172a]` para rolar automaticamente até o call to action reduziu a frustração.
- **Pílulas (Notificações Flutuantes) no Results:** Injetadas notificações contínuas como "Extrayendo 14 chats eliminados..." no topo (`top-12`) via lógica local para prender atenção nos 7 minutos de escassez.
- **CTA Flutuante de Fundo na Landing Page (Home):** Adicionado elemento fixo no rodapé para dispositivos móveis (`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%]`) facilitando a conversão sem a necessidade de retornar ao topo.

## Resumo e "To-Do" para Migração ao V0
- [ ] Incorporar as atualizações de DOM e CSS de `renderInputStep` no arquivo correspondente do `V0`.
- [ ] Aplicar função `scrollToSection`.
- [ ] Copiar dicionário de metadados e input de países (`COUNTRIES`).
- [ ] Verificar eventos EasyTracker.
- [ ] Embeber o novo componente de subida de fotos, traduzindo para o inglês.
- [ ] Ampliar os alvos de toque nas abas e opções (`Instagram/WhatsApp`).
- [ ] Adicionar suporte a scroll via clique no container `Profile Found`.
- [ ] Copiar a lógica de notificação virtual flutuante (Pills) para a visualização de Resultados, **tanto** em `app/results/page.tsx` quanto embarcado em `app/step-2/page.tsx`.
- [ ] Adicionar a barra Flutuante CTA na home (`app/page.tsx`) e na página de Resultados (`app/step-2/page.tsx` e `app/results/page.tsx`).
