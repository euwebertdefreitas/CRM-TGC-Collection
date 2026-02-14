# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [0.10.4] - 13/02/2026 22:45

### Fixed
- Redirecionamento de Notícias: Atualizados os links do feed de notícias para apontarem diretamente para os artigos e matérias específicas, em vez de apenas para a página inicial dos veículos de comunicação.


## [0.10.3] - 13/02/2026 22:40

### Changed
- Refinamento de Layout: Reduzido em 50% o espaçamento vertical entre o cabeçalho/feed e os cards de estatísticas para uma interface mais compacta.

### Removed
- Texto "Seu Dashboard": Removida a etiqueta redundante abaixo da saudação para simplificar o cabeçalho.


## [0.10.2] - 13/02/2026 22:35

### Changed
- Redesign do Feed de Notícias: Bloco expandido para dobrar sua largura original, ocupando agora dois terços da grade principal no desktop.
- Otimização de Espaço: Altura reduzida pela metade e remoção do cabeçalho fixo para um visual mais "slim" e integrado.
- Refinamento de UI: Ícone de jornal movido para a lateral esquerda, alinhado diretamente com o texto da notícia.
- Melhoria na Navegação: Otimização do link de redirecionamento para garantir o acesso direto à URL da matéria em nova guia.

### Removed
- Texto redundante "Últimas Notícias Pokémon TCG no Brasil" em favor de um layout minimalista e focado no conteúdo.


## [0.10.1] - 13/02/2026 22:30

### Changed
- Refinamento do Feed de Notícias: Largura ajustada para alinhar perfeitamente com os cards de estatísticas abaixo.
- Identidade Visual: Título do feed alterado para "Últimas Notícias Pokémon TCG no Brasil".
- Enriquecimento de Dados: Removida a tag "AO VIVO" em favor da exibição da fonte original e data de publicação de cada notícia.
- Interatividade: Adicionada funcionalidade de clique nas notícias, abrindo a fonte original em uma nova aba do navegador.
- Persistência de Dados: Lógica de carregamento vinculada ao momento do login, garantindo estabilidade do feed durante a sessão do usuário.


## [0.10.0] - 13/02/2026 22:25

### Added
- Feed de Notícias Pokémon TCG: Implementado um ticker de notícias dinâmico no topo da dashboard.
- Conteúdo Atualizado: O feed exibe em tempo real as 10 notícias mais recentes sobre o universo de Pokémon TCG no Brasil, incluindo eventos de aniversário e novos lançamentos.
- Efeito Visual Dinâmico: Transições suaves entre as notícias e uma barra de progresso visual para indicar o tempo de exibição de cada item.

### Changed
- Refatoração do Cabeçalho: Ajuste no layout do cabeçalho da dashboard para comportar o feed de notícias de forma responsiva.


## [0.9.9] - 13/02/2026 22:20

### Added
- Navegação Interna Funcional: Implementada a lógica de roteamento por estado para os itens do menu.
- Direcionamento para Home: O item de menu "Home" agora reseta a visualização para o Dashboard principal.
- Placeholders de Seções: Adicionadas telas de transição para as seções "Perfil", "Coleção" e "Configurações".
- Interatividade em Cards: Cards de estatísticas agora possuem feedback de clique para navegação rápida.


## [0.9.8] - 13/02/2026 22:15

### Changed
- Refinamento do Menu de Navegação:
    - Aumento do tamanho da fonte para melhor legibilidade (`text-xs`).
    - Cor base dos itens alterada para Branco puro.
    - Adicionado efeito de hover com a cor Dourada do tema (`#fbbf24`) e um sublinhado animado.
    - Ajuste no espaçamento entre os itens do menu.


## [0.9.7] - 13/02/2026 22:10

### Added
- Menu de Navegação: Adicionado menu na barra superior com os itens "Home", "Perfil", "Coleção" e "Configurações".

### Changed
- Estilização do Botão de Logoff: O botão agora permanece sempre com fundo vermelho sólido e sombra, removendo o efeito de transparência anterior.
- Atualização Visual do Rodapé: Removido o prefixo "CRM" do título principal no rodapé.


## [0.9.6] - 13/02/2026 22:05

### Changed
- Simplificação da Saudação: As mensagens de "Bem-Vindo" e saudação adaptativa foram combinadas em uma única linha (ex: "Boa noite, Admin!") para uma interface mais limpa e moderna.
- Refatoração da Lógica de Saudação: Função de saudação simplificada para retornar apenas o período do dia.


## [0.9.5] - 13/02/2026 21:58

### Changed
- Refinamento de Texto: Alterado o subtítulo da dashboard de "Dashboard de Controle TCG" para "Seu Dashboard" para uma comunicação mais direta e pessoal.


## [0.9.4] - 13/02/2026 22:00

### Changed
- Refinamento da Saudação: A mensagem adaptativa foi movida para uma nova linha abaixo do nome do usuário.
- Ajuste de Tipografia: Redução proporcional do tamanho das fontes nas mensagens de boas-vindas e saudação para um visual mais equilibrado.
- Atualização do Rodapé: Removido o texto de monitoramento e adicionada a atribuição "Parametrus.com - Todos os direitos reservados".


## [0.9.3] - 13/02/2026 21:55

### Changed
- Saudação Dinâmica: Implementada mensagem de boas-vindas que se adapta ao horário do dia (Bom dia, Boa tarde, Boa noite).
- Padronização Visual dos Cards: Aplicada a borda dourada (`#fbbf24`) a todos os cards da dashboard (Cartas Raras e Última Captura), unificando a identidade visual premium.
- Refinamento de Layout: Ajustes de cores e pesos de fonte nos cards para melhor legibilidade e contraste.


## [0.9.2] - 13/02/2026 22:55

### Changed
- Rebranding da Dashboard: Nome do sistema atualizado para **TCG Collector App** no cabeçalho.
- Estilização do Card "Coleção Total": Aplicado tema premium com fundo azul, borda dourada e contador em destaque dourado, alinhando visualmente com o tema principal de cartas TCG.
- Tipografia: Ajuste de pesos de fonte para melhor hierarquia visual na barra superior.


## [0.9.1] - 13/02/2026 22:45

### Fixed
- Responsividade Global: Toda a interface foi adaptada para dispositivos desktop e mobile.
- Ajuste no Card de Login: Agora utiliza dimensões proporcionais (`aspect-ratio`) para se adaptar a telas menores sem perder a fidelidade ao verso da carta Pokémon.
- Interface da Home: Refatorada para preencher 100% da área disponível, utilizando flexbox e grids adaptativos.
- Top Bar Adaptativo: Elementos como o relógio e informações detalhadas do usuário são ocultados ou redimensionados dinamicamente em telas pequenas para manter a usabilidade.
- Remoção de restrições de overflow globais para permitir rolagem natural em dispositivos mobile.


## [0.9.0] - 13/02/2026 22:30

### Added
- Implementação de Autenticação Mockada:
    - Criação de usuário de teste `Admin` com senha `Admin`.
    - Lógica de redirecionamento automático para a página principal após login bem-sucedido.
- Nova Página "Home":
    - Desenvolvimento do componente `Home.tsx` como dashboard principal.
    - Barra superior moderna com identificação do usuário, avatar e botão de logoff.
    - Relatório funcional em tempo real exibindo dia da semana, data e horário atualizado por segundo.
    - Layout responsivo e clean mantendo a paleta de cores azul royal e dourado.

### Changed
- Refatoração do `App.tsx` para gerenciar estado de autenticação e navegação entre telas.
- Atualização do componente `Login.tsx` para aceitar as credenciais de teste e fornecer feedback de erro visual.


## [0.8.2] - 13/02/2026 22:15

### Fixed
- Alteração da fonte da logomarca do login para arquivo local (logo-pokemon-tcg.png) para garantir compatibilidade e carregamento.
- Ajuste de alinhamento da pokébola decorativa do login, removendo a rotação para centralizá-la perfeitamente.

## [0.8.1] - 13/02/2026 22:00

### Fixed
- Correção na URL da Logo oficial do Pokémon TCG que apresentava falha de carregamento.
- Atualização do asset da Pokébola do login para as cores tradicionais (Vermelho/Branco), substituindo o ícone simplificado.

## [0.8.0] - 13/02/2026 21:50

### Added
- Automação do Widget de Changelog:
    - O conteúdo do modal "Novidades" agora é lido e atualizado automaticamente a partir do arquivo `CHANGELOG.md` do projeto.
    - Implementação de parser de Markdown customizado para extrair versões, datas e lista de mudanças em tempo de execução.

### Changed
- Refinamento Visual do Login (Tema Oficial):
    - Substituição do texto "POkémON" estilizado pela Logo Oficial do Pokémon TCG.
    - Substituição do ícone de fundo por uma Pokébola Tradicional (Vermelha/Branca) de alta fidelidade.
    - Ajuste de cores para eliminar tons acinzentados indesejados, garantindo uniformidade com o fundo global.
- Atualização do Tema do Widget de Changelog:
    - Alinhamento visual completo com o card de Login: Fundo azul `Royal Blue` (#1e40af), bordas douradas e tipografia contrastante.
    - Adicionado efeito de "Starburst" (Redemoinho) sutil ao fundo do modal.

## [0.7.0] - 13/02/2026 21:30

### Changed
- Redesign Completo da Interface de Login ("Verso da Carta"):
    - O tema "Hyper Rare Gold" foi substituído por uma estética inspirada no verso clássico das cartas Pokémon TCG.
    - Fundo do cartão agora é azul profundo com efeito de redemoinho/estrela (starburst) animado sutilmente.
    - Implementação de borda sólida (amarelo/gold) e tipografia "Pokemon Logo style".
    - Inputs e formulário adaptados com transparência e desfoque (glassmorphism) para se integrarem ao fundo azul.
- Refatoração do Tema Global:
    - Alteração do fundo da aplicação para um tema claro (`light mode`)Minimalista (#f8fafc) para contrastar com o novo cartão azul.
- Melhoria de UX:
    - Implementação de scrollbar moderna e customizada no widget de Changelog e globalmente.

## [0.6.1] - 13/02/2026 21:15

### Changed
- Melhoria no cabeçalho do modal de "Novidades" para incluir explicitamente a data de publicação da versão atual.
- Ajuste de espaçamento e layout dos badges de estatísticas para maior destaque e organização.

## [0.6.0] - 13/02/2026 21:10

### Added
- Implementação de um Widget de "Novidades" (Changelog) interativo:
    - Botão Flutuante (FAB) com efeito "glassmorphism" e ícone de histórico no canto inferior esquerdo.
    - Modal responsivo com animações suaves de entrada (fade/zoom).
    - Exibição organizada do histórico de versões com badges coloridos por tipo de mudança (Added, Changed, Fixed, Removed).
    - Estatísticas visuais (contagem de itens) da versão atual no cabeçalho do modal.
- Criação do componente `ChangelogWidget.tsx` com dados mockados refletindo o histórico real do projeto.

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
