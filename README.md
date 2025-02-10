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
