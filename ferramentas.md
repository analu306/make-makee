# HTML : Quais elementos estão sendo usados?
<h1> Usei pra criar um titulo 
 A <div> funciona como um "divisor" para agrupar elementos do meu site
 <nav> usei a class "navbar"  para conectar os links de navegação dentro da barra
usei a tag <ul> para criar uma lista nâo ordenada
usei a tag <li> usei para estruturar o conteúdo, e deve estar sempre entre as tags de abertura e fechamento de uma lista
a tag <a> eu usei para acresentar um link
<link> usei para sincronizar o HTML com o CSS, desse jeito rel="stylesheet" href="/css/style.css"> 

# CSS: Quais  propriedades estâo sendo usadas?
display: flex Isso ativa o Flexbox, que facilita alinhar e distribuir os elementos filhos (itens dentro do container) de forma eficiente.
   
    flex: Faz o elemento ocupar o máximo de espaço disponível dentro do container pai (se esse elemento for um item flex dentro de outro flex container).
Em resumo: ele cresce para preencher o espaço livre.;
   
    gap: 16px Define um espaçamento de 16 px entre os itens filhos do container flex.
É como uma “margem automática” entre eles — bem útil e mais simples que usar margin-right em cada item.;
   
    width: 70% O elemento (container) vai ter 70% da largura do elemento;
   
    justify-content: space-between Os itens filhos serão distribuídos igualmente ao longo do eixo principal (horizontal por padrão), com espaço igual entre eles.
O primeiro item fica grudado à esquerda e o último à direita.;
   
    margin-bottom: 8px; cria espaço abaixo do container.
  
    align-items: cente Isso alinha os itens verticalmente ao centro dentro do container (no eixo cruzado).

    .formulario-campo label: Esse seletor atinge todos os elementos <label> que estão dentro de um elemento com a classe .formulario-campo

    font-family: fantasy:Define a família de fontes usada no texto do label.
fantasy é uma família genérica (como “serif”, “sans-serif”, etc.).
Ela usa uma fonte decorativa, que depende do navegador e do sistema (exemplo: Papyrus, Impact, etc.).
   
   
    font-weight: 400: Define a espessura da fonte.

400 equivale a normal (nem negrito nem fino).

Outros valores comuns:

100 = muito fina

700 = negrito

# JS: Ha algum recurso Javascript?