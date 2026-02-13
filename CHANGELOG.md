# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [0.5.1] - 13/02/2026 21:00

### Fixed
- Correção crítica no arquivo `tailwind.config.js`: restauração da estrutura correta do objeto de configuração. O erro de sintaxe impedia o processamento do CSS e causava falha na renderização da aplicação.
- Restauração do bloco `keyframes` que havia sido removido acidentalmente durante a refatoração anterior.

## [0.5.0] - 13/02/2026 20:45

### Removed
- Remoção completa do componente "Marquee" (Carrossel de Cartas) do background global (`App.tsx`).
- Exclusão dos assets locais de cartas Pokémon (`public/cards/`).
- Remoção das configurações de animação `marquee` no `tailwind.config.js`.
- Remoção dos logos do Vite (`public/vite.svg`) e React (`src/assets/react.svg`).

### Changed
- Renomeação do componente e arquivo principal de login de `LoginCard` para `Login` (refatoração de nomenclatura).
- Limpeza do layout global, removendo distrações visuais de fundo.

## [0.4.3] - 13/02/2026 20:35

### Changed
- Substituição do método de carregamento de imagens do background (Marquee) para utilizar assets locais em `public/cards/`.
- Configuração de uma estrutura de arquivos placeholder (`.svg`) para Mega Dragonite ex, Mega Charizard Y ex, Pikachu ex e Mewtwo ex, garantindo a exibição do carrossel mesmo sem os arquivos finais do usuário.
- Aumento da duplicação dos itens no array do carrossel para garantir uma animação mais fluida e contínua em telas largas.

## [0.4.2] - 13/02/2026 20:30

### Fixed
- Correção na URL das imagens do background animado (Marquee), atualizando os assets para a coleção "Ascended Heroes" (ASC).
- Substituição dos placeholders quebrados por URLs válidas seguindo o padrão da coleção oficial (ASC_PT-BR).

## [0.4.1] - 13/02/2026 20:25

### Changed
- Atualização do título da página (aba do navegador) de "crm-tgc-collection" para "TCG Collection".
- Substituição do favicon padrão (Vite) por um ícone SVG de Pokébola personalizado.

## [0.4.0] - 13/02/2026 20:20

### Added
- Implementação de um "Marquee" (Carrossel Infinito) de fundo na página global (`App.tsx`).
- Exibição de cartas da coleção recente "Surging Sparks" (TBD/SV8) como background animado.
- Adição de keyframes `marquee` e `marquee-reverse` no `tailwind.config.js`.

### Changed
- Remoção da animação intensa de rotação (`spin`) do background do card de login ("retangulo dourado"), mantendo apenas o gradiente sutil.
- Ajuste na opacidade e grayscale do background global para não competir visualmente com o componente de login.

## [0.3.3] - 13/02/2026 20:15

### Changed
- Redução adicional de 5% nas dimensões do card de login.
- Padronização do fundo da página (`index.css` e `App.tsx`) para tom claro (`#f5f5f5`) garantindo uniformidade em todos os viewports.

## [0.3.2] - 13/02/2026 20:10

### Fixed
- Remoção de texto de comentário residual ("// removed sparkles icon") equivocadamente exibido na interface.

### Changed
- Redução de ~10% nas dimensões do card de login para otimização da visualização em telas menores (viewport).
- Atualização do tema de fundo da aplicação (App.tsx) para um tom claro suave, harmonizando com o card dourado.

## [0.3.1] - 13/02/2026 20:05

### Changed
- Substituição do ícone de raio (Zap) por uma Pokébola dourada estilizada no cabeçalho do card.
- Alteração do subtítulo de "Acesso Premium" para "Acesso do Colecionador".
- Remoção do ícone de estrela (sparkle) próximo ao botão de login para limpar a interface.

## [0.3.0] - 13/02/2026 19:57

### Changed
- Redesign completo da interface de Login para o tema "Hyper Rare Gold Edition".
- Nova paleta de cores douradas (Gold/Amber) substituindo o tema Rainbow.
- Adição de efeitos de partículas douradas (estrelas) e texturas de folha de ouro.
- Ajuste de contraste par fundo escuro profundo (`#0a0a0a`) com tipografia dourada para legibilidade.

## [0.2.1] - 13/02/2026 19:55

### Changed
- Padronização do formato de data no CHANGELOG.md para o padrão brasileiro (DD/MM/AAAA HH:mm).
- Revisão e tradução completa das entradas anteriores.

## [0.2.0] - 13/02/2026 19:50

### Added
- Link para recuperação de senha ("Esqueci minha senha").
- Efeitos visuais de "Hyper Rare" (Rainbow Rare) com gradientes cônicos e animações de ruído.

### Changed
- Refatoração completa da UI de Login para tema "Rainbow Rare" com glassmorphism avançado.
- Localização completa para Português do Brasil (Labels, Botões, Títulos).
- Atualização do rodapé para copyright dinâmico (Parametrus.com).

## [0.1.1] - 13/02/2026 19:40

### Changed
- Documentação do projeto (README.md) atualizada e traduzida integralmente para Português do Brasil.

## [0.1.0] - 13/02/2026 19:35

### Added
- Interface de Login (LoginCard) estilizada como carta TCG com efeitos holográficos.
- Configuração inicial do Tailwind CSS v3 com tema personalizado (Dark Mode, cores vibrantes).
- Tipografia: Integração com Google Fonts (Inter e Poppins).
- Dependências de UI: `lucide-react`, `clsx`, `tailwind-merge`.

### Changed
- Refatoração do `App.tsx` para layout centralizado com background animado.
- Atualização do `index.css` para reset de estilos e variáveis globais.
