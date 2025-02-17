# Universidade Federal do Ceará

## Curso de Sistemas e Mídias Digitais

### Trabalho de Autoração Multimídia 2

**Equipe:** Cava uma falta  
**Integrantes:**

- Levi de Sousa Alves - 552634
- Carlos Renan Carrilho Lopes Junior - 552292
- Gabriel Silva Alves dos Santos - 558248

---

## Pergunta 1

- `<!DOCTYPE html>`: Declara que o documento segue a especificação HTML5.
- `<html lang="pt-BR">`: Define a raiz do documento e especifica o idioma principal como português do Brasil.
- `<head>`: Contém metadados e configurações da página.
  - `<meta charset="UTF-8">`: Define a codificação de caracteres para suporte a acentos e caracteres especiais.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Garante que a página seja responsiva.
  - `<title>`: Define o título exibido na aba do navegador.
- `<body>`: Contém o conteúdo visível da página.
  - `<h1>`: Define o título principal da página.
  - `<p>`: Adiciona um parágrafo de introdução.
  - `<a href="https://solar.virtual.ufc.br/" target="_blank">`: Cria um link para o site "Solar", abrindo-o em uma nova aba devido ao atributo `target="_blank"`.

## Pergunta 2

### HTML

- Cada bloco de texto é envolvido por `<div>` para separação visual e semântica.
- O arquivo CSS foi separado do HTML usando `<link rel="stylesheet" href="styles.css">`.

### CSS

- `.bloco`: Define padding, margem, borda e borda arredondada.
- `.bloco1`: Fundo vermelho claro e fonte de 18px.
- `.bloco2`: Fundo verde claro e fonte de 20px.
- `.bloco3`: Fundo azul claro e fonte de 22px.

## Pergunta 3

### Usar **padding-top** no conteúdo principal

**Vantagens:**

- Simples e direto. Adicionar `padding-top` no corpo do conteúdo cria um espaçamento suficiente para que o conteúdo não fique escondido atrás da barra fixa.
- Fácil de ajustar, bastando alterar o valor de `padding-top` caso a altura da barra de navegação mude.

**Desvantagens:**

- Requer ajuste manual do valor de `padding-top` se a altura da barra for alterada.
- Pode afetar outros elementos na página, principalmente se houver componentes adicionais que não sejam ajustados da mesma forma.

### Usar **position: relative** e **z-index** no conteúdo principal

**Vantagens:**

- Permite um controle maior sobre a sobreposição dos elementos, garantindo que o conteúdo não seja coberto pela barra de navegação.
- Não afeta o layout interno do conteúdo, apenas ajusta a sua posição visual.

**Desvantagens:**

- Requer uma compreensão mais detalhada do uso de `z-index` e como ele interage com outros elementos na página.
- Se houver outros elementos com `position: fixed` ou `absolute`, pode ser necessário ajustar o `z-index` para garantir que tudo fique na camada correta.

## Pergunta 4

### Mobile First

Na abordagem Mobile First, o design é inicialmente criado para dispositivos móveis, usando estilos básicos sem media queries. Depois, são aplicadas media queries para dispositivos com telas maiores.

**Vantagens:**

- Otimiza a experiência para dispositivos móveis, garantindo carregamento mais rápido.
- As melhorias para dispositivos maiores são adicionadas de forma gradual.

**Desvantagens:**

- Pode exigir mais ajustes ao adaptar o layout para telas grandes.

### Desktop First

Na abordagem Desktop First, o design começa com estilos para telas maiores e depois são adicionadas media queries para telas menores.

**Vantagens:**

- Permite criar um layout mais detalhado para desktops.

**Desvantagens:**

- Pode levar ao desperdício de recursos para dispositivos móveis.
- Requer ajustes consideráveis para garantir uma boa experiência em telas pequenas.

### Media Queries

Em qualquer abordagem, é importante aplicar corretamente as media queries:

- No Mobile First, as media queries são aplicadas conforme a tela aumenta.
- No Desktop First, as media queries reduzem o layout para dispositivos menores.

### Unidades Relativas e Especificidade

- Utilizar unidades relativas como `%`, `vw`, `vh`, `em` ao invés de `px` para maior flexibilidade.
- Atenção à especificidade das regras CSS para evitar sobrescritas indesejadas.

## Pergunta 5

### Importância das Tags Semânticas

Usar tags semânticas no HTML5, como `<header>`, `<nav>`, `<section>` e `<article>`, é essencial para acessibilidade e SEO. Elas estruturam melhor o conteúdo, tornando-o mais compreensível para usuários e motores de busca.

### Acessibilidade

- Facilita a navegação para leitores de tela.
- Permite atalhos eficientes para o conteúdo principal.
- Melhora a experiência do usuário.

### SEO (Search Engine Optimization)

- Ajuda motores de busca a indexarem melhor a página.
- Indica a hierarquia do conteúdo ao Google.
- Melhora o ranqueamento em pesquisas.

### Como validar acessibilidade e SEO?

#### Testes de Acessibilidade

- Utilizar o Lighthouse (Chrome DevTools).
- Testar com a ferramenta WAVE (WCAG).
- Verificar navegação só pelo teclado.

#### Validação de SEO

- Utilizar o Google Search Console.
- Testar com Screaming Frog SEO Spider.
- Usar meta tags e cabeçalhos bem estruturados.


## Pergunta 6

### Você quer adicionar um botão na página que, quando clicado, exibe um alerta (alert box) no navegador.

- HTML:

- O botão é criado com a tag <button> e recebe um ID (meuBotao) para que possamos identificá-lo no JavaScript.

- JavaScript:

- Usamos document.getElementById('meuBotao') para selecionar o botão pelo ID.

- Em seguida, adicionamos um "ouvinte" de evento (addEventListener) que fica "escutando" o evento de clique (click).

- Quando o botão é clicado, a função dentro do addEventListener é executada, exibindo o alerta com a mensagem "Olá, mundo!".

## Pergunta 7

### Seu site possui um formulário com campos de nome, e-mail e mensagem. Você deseja validar esses campos antes de enviar os dados para o servidor, exibindo mensagens de erro embaixo de cada campo, caso estejam vazios ou preenchidos de forma incorreta.
- Para implementar uma validação de formulário com JavaScript, você pode usar a manipulação de DOM e eventos da seguinte maneira:

- Manipulação de DOM: Primeiro, você acessa os elementos do formulário, como campos de texto, botões e mensagens de erro, usando funções como document.getElementById().

- Eventos: Você adiciona um ouvinte de evento (addEventListener) ao formulário ou ao botão de envio, para interceptar a ação de envio e realizar a validação antes de permitir que o formulário seja enviado.

- Validação: A validação verifica se os campos do formulário estão preenchidos corretamente. Caso algum campo seja inválido (por exemplo, vazio), você exibe uma mensagem de erro e impede o envio do formulário, usando métodos como event.preventDefault().

## Pergunta 8

### Explique como você gerenciaria a inserção de componentes ou seções da página usando JavaScript, garantindo que o conteúdo seja carregado corretamente e que eventuais eventos ou scripts associados às novas seções sejam configurados adequadamente.

- Para gerenciar a inserção de componentes ou seções de uma página em uma aplicação Single Page, você pode seguir estas etapas:

- Carregamento Dinâmico: Substitua o conteúdo da página de forma dinâmica, alterando o innerHTML do elemento contêiner, sem recarregar a página inteira.

- Manutenção de Estado: Após a mudança de conteúdo, reconfigure os eventos (como cliques ou formulários) associados aos novos elementos, pois o uso de innerHTML remove os eventos - antigos.

- Uso de Funções Reutilizáveis: Crie funções para lidar com o carregamento e reconfiguração de seções específicas, garantindo que cada nova seção carregue o conteúdo correto e reative os eventos associados.

- Melhorias no Fluxo: Sempre limpe erros ou eventos anteriores e garanta que o estado da página esteja consistente após a inserção de novas seções.

- Com esse processo, o conteúdo é carregado e os scripts ou eventos necessários para cada seção são aplicados corretamente.

## Pergunta 9

### Descreva como funcionam as principais funções do History API (e.g., pushState, replaceState, popstate) e como você as utilizaria para criar um sistema de rotas simples. Cite as precauções de compatibilidade com navegadores antigos e eventuais fallback strategies.

- Explicação sobre o History API e Navegação SPA
 
 - pushState(state, title, url): Adiciona um novo estado ao histórico do navegador sem recarregar a página.
- replaceState(state, title, url): Substitui o estado atual no histórico sem criar um novo.
 - popstate: Ocorre quando o usuário navega pelo histórico do navegador (botões voltar/avançar).
 - Compatibilidade: Funciona na maioria dos navegadores modernos, mas um fallback comum é usar `location.hash` para manipular URLs em navegadores antigos.
 ## Pergunta 10

 ### Quais técnicas você pode empregar para melhorar o desempenho de carregamento, considerando a divisão de código (code splitting), lazy loading e uso de módulos JavaScript nativos? Explique como essas técnicas funcionam em conjunto para reduzir o tempo de carregamento inicial e aumentar a performance geral.

1. Divisão de Código (Code Splitting)
- A divisão de código é uma técnica onde o código JavaScript é quebrado em múltiplos pacotes, ou "chunks", que são carregados sob demanda, em vez de carregar todo o código de uma vez durante o carregamento inicial da página.

- Como funciona: Em vez de carregar um único arquivo de script grande, você divide o código em partes menores, geralmente com base nos diferentes módulos da aplicação. O Webpack (ou outra ferramenta de bundling) é frequentemente usado para realizar essa divisão automaticamente.
Exemplo prático: Ao usar a divisão de código, você pode separar o código da interface do usuário do código do backend ou de funcionalidades específicas, carregando somente o código necessário para cada seção da aplicação conforme o usuário navega.
2. Lazy Loading
Lazy loading é a técnica de adiar o carregamento de módulos JavaScript até o momento em que realmente sejam necessários, ou seja, o código só é carregado quando o usuário interage com a parte da aplicação que exige aquele módulo.

- Como funciona: Ao usar lazy loading, você pode, por exemplo, carregar certos componentes da UI ou módulos JavaScript apenas quando o usuário chega a uma determinada página ou interage com um botão específico. Isso ajuda a reduzir a quantidade de código carregado na inicialização.
Integração com code splitting: A combinação de code splitting e lazy loading é poderosa. Você pode dividir a aplicação em chunks menores e, dentro desses chunks, carregar os módulos de forma "preguiçosa" (lazy), carregando-os apenas quando necessários, sem sobrecarregar o carregamento inicial.
3. Uso de Módulos JavaScript Nativos
Os módulos JavaScript nativos permitem que você use a funcionalidade de módulos diretamente no navegador, sem precisar de ferramentas de bundling como Webpack ou Babel.

- Como funciona: Ao usar módulos nativos (ES Modules - ESM), você pode estruturar o código JavaScript em pequenos arquivos separados e importar/exportar funcionalidades entre eles. O navegador faz o trabalho de carregar e executar esses módulos conforme necessário, sem a necessidade de incluir tudo no mesmo arquivo de script.
Exemplo prático: Ao usar import e export, você pode fazer com que diferentes módulos sejam carregados de forma independente, permitindo ao navegador carregar e executar apenas o necessário de cada módulo na ordem correta.
- Como essas técnicas trabalham juntas:
Redução do código inicial: A combinação de code splitting e lazy loading permite que a SPA carregue apenas o código necessário para a página ou módulo inicial. Isso reduz o tempo de carregamento inicial da aplicação, uma vez que você não está forçando o carregamento de tudo ao mesmo tempo.

- Melhoria na performance do navegador: O uso de módulos nativos permite que o navegador lide com o carregamento dos módulos de forma eficiente. Ele pode carregar, armazenar em cache e reutilizar os módulos de maneira mais otimizada, sem sobrecarregar a memória ou o processamento.

- Redução do tráfego de rede: Com a divisão de código e lazy loading, você está carregando apenas os chunks de código necessários no momento exato da navegação do usuário, evitando o download de scripts que não são imediatamente necessários. Isso reduz o uso de banda e melhora a experiência do usuário, especialmente em conexões mais lentas.

- Em resumo, essas técnicas — divisão de código, lazy loading e módulos nativos — se combinam para reduzir o tempo de carregamento inicial, diminuir a quantidade de código que precisa ser baixada e executada de uma vez, e otimizar o desempenho geral da aplicação. Isso resulta em uma experiência mais rápida e fluida para o usuário.

## Pergunta 11

### Descreva o uso de setInterval para atualizar esse valor a cada segundo.

 - O `setInterval(updateTime, 1000)` serve para **chamar a função `updateTime` automaticamente a cada 1 segundo (1000 milissegundos)**. Isso faz com que a data e hora sejam atualizadas em tempo real, sem precisar recarregar a página.  

 - Ou seja, o `setInterval` cria um **ciclo contínuo** onde a função roda de novo a cada segundo, pegando o horário atual e exibindo no `<span>`. Isso é o que faz o relógio ficar sempre atualizado.

## Pergunta 12

### Interação de Mouse com um dropdown

 - O código cria um **menu dropdown** que funciona no computador e no celular. O submenu fica escondido por padrão e aparece quando o usuário passa o mouse em cima (graças aos eventos `mouseenter` e `mouseleave`) ou toca na tela, no caso do celular (usando o evento `touchstart`). O `event.preventDefault()` impede ações padrão do toque, como rolagem indesejada. O CSS controla a aparência e o JavaScript ativa ou desativa o submenu com classes (`hover` e `active`).

 - O código está presente na pasta "questão 12"

## Pergunta 13

### Consumo da API (fetch)

 - A lógica começa com o uso do fetch(url) para fazer a requisição dos dados da API. É ideal criar uma função específica para isso, como buscarDados(), facilitando a reutilização e a organização do código.
 - Exemplo de lógica: chamar essa função ao carregar a página ou em eventos específicos (como um clique).

### Tratamento da Resposta (JSON)

 - Após o fetch, usamos .then(response => response.json()) para converter a resposta em JSON. Antes disso, é importante verificar se a resposta foi bem-sucedida com response.ok. Isso evita tentar processar respostas com erros (como 404 ou 500).
 - Se o response.ok for false, podemos lançar um erro personalizado para tratar depois.

### Exibição dos Dados no DOM

 - Com os dados em JSON, usamos o DOM para exibir as informações. Isso pode ser feito com document.querySelector ou getElementById para selecionar onde o conteúdo será exibido.
 - Se os dados forem uma lista, usamos forEach para criar dinamicamente elementos (como li ou div) e adicioná-los ao HTML.

### Tratamento de Erros

Erros podem acontecer por problemas de rede ou no formato dos dados. Para isso:

 - Erros de rede: usamos .catch() ou try...catch (em funções async/await) para capturar falhas na conexão.
 - Erros de parsing: verificamos se o JSON está correto e, se falhar, mostramos uma mensagem de erro amigável para o usuário, como “Falha ao carregar dados. Tente novamente mais tarde.”

## Pergunta 14

### Volume de Dados Suportado

 - localStorage / sessionStorage: Limitados (5–10 MB).
 - IndexedDB: Suporta grandes volumes (centenas de MB).

### Forma de Armazenamento

- localStorage / sessionStorage: Simples, formato chave/valor.
- IndexedDB: Estruturado, tipo banco NoSQL, aceita objetos complexos.

### Persistência

- localStorage: Dados permanentes até serem apagados.
- sessionStorage: Dura apenas enquanto a aba está aberta.
- IndexedDB: Dados permanentes, como o localStorage.

### Possíveis Casos de Uso

- localStorage: Preferências do usuário (tema, idioma).
- sessionStorage: Dados temporários (sessões de login, formulários).
- IndexedDB: Apps complexos (dados offline, listas grandes, jogos).

## Pergunta 15

### Cachear Arquivos Estáticos (HTML, CSS, JS, Imagens)

O Service Worker é uma tecnologia que funciona como um "assistente" entre o navegador e a internet. Ele permite que o site continue funcionando mesmo quando o usuário estiver sem conexão. Para isso, o Service Worker armazena (ou cacheia) arquivos importantes, como páginas HTML, folhas de estilo (CSS), scripts (JS) e imagens.

Esse armazenamento acontece quando o Service Worker é instalado no site. A partir daí, sempre que o usuário abrir o aplicativo, o navegador verifica se esses arquivos já estão guardados. Se estiverem, eles são carregados diretamente do cache, o que torna o acesso mais rápido e eficiente, mesmo sem internet.

### Oferecer uma Experiência Offline Básica
Com os arquivos armazenados, o Service Worker pode oferecer uma experiência básica de uso mesmo quando o usuário estiver offline. Isso significa que, ao tentar acessar o app sem conexão, o navegador não precisa buscar as informações na internet, pois já possui uma cópia salva.

Se o usuário tentar acessar algo que não está no cache e não houver conexão, o Service Worker pode exibir uma página personalizada informando que o conteúdo não está disponível no momento. Isso é melhor do que simplesmente mostrar uma mensagem de erro, pois mantém uma experiência de uso mais amigável.

### Atualizar o Cache Quando Houver Nova Versão dos Arquivos
Quando o aplicativo recebe atualizações, como mudanças no design ou novas funcionalidades, é importante que o usuário veja a versão mais recente. O Service Worker faz isso automaticamente, verificando se existem novas versões dos arquivos que estão no cache.

Se ele encontrar arquivos atualizados, ele apaga a versão antiga e salva a nova. Esse processo garante que, na próxima vez que o usuário abrir o app, ele verá o conteúdo mais atual, sem precisar limpar o cache do navegador manualmente.
