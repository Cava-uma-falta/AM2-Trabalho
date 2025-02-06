# Universidade Federal do Ceará

## Curso de Sistemas e Mídias Digitais

### Trabalho de AUTORAÇÃO MULTIMÍDIA 2

**Equipe:** Cava uma falta  
**Integrantes:**

- LEVI DE SOUSA ALVES - 552634
- CARLOS RENAN CARRILHO LOPES JUNIOR - 552292
- GABRIEL SILVA ALVES DOS SANTOS - 558248

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

- **HTML**:

  - Cada bloco de texto é envolvido por `<div>` para separação visual e semântica.
  - O arquivo CSS foi separado do HTML usando `<link rel="stylesheet" href="styles.css">`.

- **CSS**:
  - `.bloco`: Define padding, margem, borda e borda arredondada.
  - `.bloco1`: Fundo vermelho claro e fonte de 18px.
  - `.bloco2`: Fundo verde claro e fonte de 20px.
  - `.bloco3`: Fundo azul claro e fonte de 22px

## Pergunta 3

Usar **padding-top** no conteúdo principal:

Vantagens: Simples e direto. Adicionar padding-top no corpo do conteúdo cria um espaçamento suficiente para que o conteúdo não fique escondido atrás da barra fixa. É fácil de ajustar, bastando alterar o valor de padding-top caso a altura da barra de navegação mude.
Desvantagens: Requer ajuste manual do valor de padding-top se a altura da barra for alterada. Também pode afetar outros elementos na página, principalmente se houver componentes adicionais que não sejam ajustados da mesma forma.

Usar **position: relative** e \*_z-index_ no conteúdo principal:

Vantagens: Permite um controle maior sobre a sobreposição dos elementos, garantindo que o conteúdo não seja coberto pela barra de navegação. Não afeta o layout interno do conteúdo, apenas ajusta a sua posição visual.
Desvantagens: Requer uma compreensão mais detalhada do uso de z-index e como ele interage com outros elementos na página. Se houver outros elementos com position: fixed ou absolute, pode ser necessário ajustar o z-index para garantir que tudo fique na camada correta.

Ambas as abordagens resolvem o problema de forma eficiente, sendo a escolha entre elas dependente do controle desejado sobre a estrutura da página e a complexidade do layout.

## Pergunta 4

Mobile First
Na abordagem Mobile First, o design é inicialmente criado para dispositivos móveis, usando estilos básicos sem media queries. Em seguida, são aplicadas media queries para dispositivos com telas maiores. A principal vantagem dessa abordagem é a otimização para dispositivos móveis, garantindo que a página carregue rapidamente e funcione bem em telas pequenas. Além disso, as melhorias para dispositivos maiores são adicionadas de forma gradual. No entanto, pode exigir mais cuidado ao modificar o layout à medida que o design se adapta para telas maiores, já que o layout básico foi projetado para telas menores.

Desktop First
Já na abordagem Desktop First, o design começa com os estilos para dispositivos de maior tela, geralmente com layouts mais complexos e detalhados, e depois são adicionadas media queries para ajustar o layout conforme a tela diminui. Essa abordagem é útil quando o foco principal é um layout mais robusto para desktops, mas pode levar a desperdício de recursos para dispositivos móveis, já que regras de estilo complexas para desktops são aplicadas inicialmente, mesmo que não sejam necessárias para telas menores. Além disso, a adaptação para dispositivos menores pode exigir ajustes consideráveis para garantir que a experiência do usuário não seja comprometida.

Vantagens e Desvanta gens
Mobile First:

Vantagem: O design é otimizado para dispositivos móveis, o que melhora a performance e a experiência do usuário em telas pequenas.
Desvantagem: Pode exigir mais cuidado ao fazer ajustes para telas maiores, já que o layout básico foi projetado para dispositivos pequenos.
Desktop First:

Vantagem: Permite criar um layout mais detalhado e robusto para telas grandes.
Desvantagem: Pode resultar em desperdício de recursos para dispositivos móveis e exigir ajustes consideráveis para telas menores.
Media Queries
Quando se utiliza qualquer uma dessas abordagens, é importante garantir que as media queries sejam aplicadas corretamente. No caso do Mobile First, as media queries começam com os estilos básicos para telas pequenas e vão sendo modificadas conforme a tela aumenta. No Desktop First, o processo é invertido: começa-se com o layout para telas grandes e depois ajusta-se para telas menores.

Unidades Relativas e Especificidade
Além disso, ao utilizar valores de largura e altura, é fundamental optar por unidades relativas, como %, vw, vh, ou em, em vez de unidades fixas como px, para garantir um layout mais flexível. Outro ponto a se considerar é a especificidade das regras CSS, para evitar que uma media query mais específica sobrescreva outra de forma indesejada.

## Pergunta 5
