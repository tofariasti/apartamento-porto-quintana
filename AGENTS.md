# Apartamento Porto Quintana

Site estático em português (pt-BR) para decidir o que cabe no Apartamento Porto Quintana. Sem build, sem framework. Plantas com zoom via `planta-zoom.js` (scroll, botões, arrastar). Abra os HTML no navegador.

Responda em português. Não invente medidas, preços ou estoque: confira no anúncio ou deixe explícito que falta conferir.

## Pesquisa de produtos

Quando o pedido for pesquisar produtos na internet, **passar por estas lojas** (não só as que já estão nas páginas):

- [Colombo](https://www.colombo.com.br)
- [Mercado Livre](https://www.mercadolivre.com.br)
- [Shopee](https://www.shopee.com.br)
- [Magazine Luiza](https://www.magazineluiza.com.br)
- [MadeiraMadeira](https://www.madeiramadeira.com.br)
- [Madesa](https://www.madesa.com)
- [Leroy Merlin](https://www.leroymerlin.com.br)

Busque em cada uma, anote preço à vista/PIX, medidas, estoque e o link do anúncio. Site da marca ou outra loja só entra como extra, depois desse circuito. Se uma loja não tiver o item ou a busca falhar, registre isso — não pule em silêncio.

## Arquivos

| Caminho | Função |
|---|---|
| `index.html` | Capa com cards para as três pesquisas |
| `quarto-casal.html` | Planta baixa e requisitos (cama casal) |
| `sofa.html` | Sofá retrátil, teto 2,06 m |
| `geladeira.html` | Inverse no vão 0,75 × 2,00 m |
| `estilo.css` | Único CSS. Não duplicar `<style>` nas páginas |
| `layouts/` | Plantas SVG em escala |
| `fotos/` | Fotos locais, uma pasta por pesquisa (`quarto-casal/`, `sofa/`, `geladeira/`) |

Nova pesquisa: copie o chrome de `sofa.html` (não o de `index.html`), ligue `estilo.css` + Inter, acrescente o card em `index.html` e o item na `site-bar` de **todas** as páginas.

## Chrome

Páginas de pesquisa usam `body.has-toc`. A capa não.

Ordem do markup: `.chrome` (`.site-bar` + `.nav-bar`) → `header` → `.toc#indice` → `main` → `footer`.

Marque a página atual com `class="here"` na `site-bar`. Mantenha o índice da `.toc` e o da `.nav-bar` alinhados com as âncoras do `main`.

## Opções

Cada candidato é um `<article class="option" id="opcao-N">`. O recomendado leva também `best`.

Dentro: `.option-head` (h3 + `.badge`), `.option-stats` (preço, medidas, folga), `.option-body` (`.thumb` para o anúncio + `ul.specs`), `.layout-note`, plantas em `.pair` quando houver casal e queen.

Specs mínimas: anúncio (link), loja/ref, preço (à vista e PIX se houver), medidas L × A × P, folga no vão, o que falha no filtro.

Comparativo: `.compare` com pílulas `#cmp-N`, grade `.catalog` (`.cN` em cada card) e tabela em colunas (`.cN`). Sem JS. Tabelas de comparativo, `.decisions` em `#resumo` e os artigos usam as mesmas medidas e preços. A opção 1 costuma ser a recomendada (`best` + `best-col`).

Classes de conteúdo: `.facts`, `.note`, `.rec`, `.premissas`, `.gallery`, `.yes` / `.no`.

## Quarto 2,40 × 3,00 m

- Pé direito **2,56 m** (chão ao teto).
- Cabeceira **obrigatória** na parede de 2,40 m **oposta à janela**. Pé aponta para janela e mesa. Não girar a cama para a de 3,00 m.
- Roupeiro largo só na de 3,00 m **oposta à porta**. Não cabe na parede da porta nem na de 2,40 m.
- Porta na de 3,00 m, vão 90 cm, **1,40 m** da cabeceira e **70 cm** da parede da janela. Giro da folha **para fora** — não come o retângulo do quarto.
- Janela na de 2,40 m: **1,20 m** de vão, **60 cm** de parede até cada 3,00 m. Mesa 1,35 × 0,55 m na frente da janela, **15 cm** da parede da porta.
- Cama: **casal — larg. 1,38 m × comp. 1,88 m** (cabeceira na 2,40 m; comprimento aponta para janela/mesa). Posição ao longo da 2,40 m **conforme o guarda-roupa** — não desenhar a cama na planta baixa. Criado 40 × 40 cm só no vão cama–roupeiro.
- Reto: portas **100% de correr**. L: só com **aéreo** (cama até a parede). Ponte de chão na cabeceira mata a mesa.
- A página do quarto tem só a planta e os requisitos — sem opções de produto.

## Sofá

Teto de largura **206 cm**. Retrátil = assento que puxa. Folga útil mínima 2–3 cm; 206 cm no limite fica de fora. Anotar profundidade fechado e aberto.

## Geladeira

Vão **75 × 200 cm**. Obrigatório: inverse (freezer embaixo) · frost free · inverter · bivolt de verdade · inox · luz no refrigerador e no congelador. A Panasonic atual (NR-BT55PV2XB) é duplex 220 V — a troca não é porque ela não entra.

## Plantas

Escala e geometria estão em `layouts/AGENTS.md`. Edite SVG como UTF-8 (preserve `×`). Recalcule folgas a partir das medidas; não copie números de outra opção.

## Fotos

Salve na pasta da pesquisa (`fotos/quarto-casal/opcao-1.jpg`, `fotos/sofa/dozy.jpg`, `fotos/geladeira/midea-416.jpg`). O `.thumb` aponta para o anúncio e usa a foto local.
