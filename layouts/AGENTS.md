# Plantas SVG

Desenhos em escala, UTF-8, `role="img"`. Título em Georgia; resto em system-ui. Fundo `#f4f1ea`.

Copie a planta irmã mais próxima e troque só o que muda. Não invente uma geometria nova.

## Escalas

| Arquivo | Escala | Vista |
|---|---|---|
| `quarto.svg` | **2 px = 1 cm** | planta baixa do quarto (sem cama; posição depende do roupeiro) |
| `belem-carioca.svg` | **2 px = 1 cm** | Belém A: Ponte + Torre azul (`#8ec4d4` / `#5a9cb8`); 36 + 204 = 2,40 m |
| `belem-carioca-porta.svg` | **2 px = 1 cm** | Belém B: 131 na porta; Ponte + Torre azul; quebra vermelho (`#e24b3b`) |
| `altezza-ponte.svg` | **2 px = 1 cm** | Altezza: ponte 170 cm no topo da cabeceira (170 + 70 cm); 4 portas aéreas (altura); colchão centrado no móvel |
| `opcao-N-casal.svg` / `opcao-N-queen.svg` | **2 px = 1 cm** | planta do quarto |
| `sofa-encaixe.svg`, `sofa-comparativo.svg` | **3 px = 1 cm** | vão / barras |
| `geladeira-nicho.svg` | **3 px = 1 cm** | frente do nicho |
| `geladeira-comparativo.svg` | 6 px = 1 cm na largura, 2 px = 1 cm na altura | barras |

## Quarto (`opcao-N-*.svg`)

`viewBox="0 -80 760 900"`. Quarto: `x=80 y=90` tamanho **600 × 480** (3,00 × 2,40 m). Pé direito **2,56 m** (não aparece na planta baixa).

Orientação fixa (não rotacionar):

- Esquerda = cabeceira (parede 2,40 m oposta à janela)
- Direita = janela + mesa
- Janela na 2,40 m: **60 cm** desde cada parede de 3,00 m, vão **1,20 m**. `rect x=676 y=210 width=14 height=240`. Mesa 135 × 55 cm, **15 cm** da parede da porta: `x=570 y=270 width=110 height=270`. Cadeira: `x=480 y=360 width=90 height=90`.
- Cima = roupeiro (parede 3,00 m oposta à porta)
- Baixo = porta 90 cm na 3,00 m: **1,40 m** da cabeceira + **90 cm** vão + **70 cm** até a janela (`x=360` a `x=540`, `y=570`). Cotas em `y=592`. Giro para fora: `M540 570 A180 180 0 0 0 360 750`.

`quarto.svg` não desenha a cama: a posição ao longo da 2,40 m depende da profundidade do roupeiro. Cabeceira continua à esquerda.

Nas plantas de opção, cama com cabeceira em `x=80`; o `y` sai da profundidade do móvel (não copiar `y=294`).

| | Medidas | rect `width × height` | pé até a janela |
|---|---|---|---|
| Casal | larg. 1,38 × comp. 1,88 m | 376 × 276 (comp. · larg.) | 1,12 m |
| Queen | 1,56 × 2,00 m | 400 × 312 | 1,00 m |

Roupeiro: profundidade em px = cm × 2, largura ao longo dos 600 px do topo (`y=90`). Folga na 3,00 m = `600 − largura_px`, retângulo tracejado à direita do móvel.

Aéreo (opções 5–6): faixa na cabeceira, semi-opaca, a cama passa por baixo até `x=80`. Não desenhar ponte de chão.

Paleta: cama `#e8dcc8` · criado `#d4c4a8` · roupeiro `#a67c52` · mesa `#5f8a84` · janela `#8ec4d4` · folga / vão `#2c5a3d` · giro da porta verde tracejado.

Referência: `opcao-1-casal.svg` (reto) e `opcao-6-casal.svg` (L com aéreo e folga de cômoda).

## Sofá e geladeira

`sofa-encaixe.svg`: vão 206 cm = 618 px. Folgas nas pontas em verde. Retrátil aberto em tracejado à frente.

`geladeira-nicho.svg`: nicho 75 × 200 cm = 225 × 600 px. Folgas laterais e topo em `#e6f0e8`. Inverse = refrigerador em cima, freezer embaixo.

Textos com `×` e acentos: gravar UTF-8. Não substituir por `x` nem por `?`.
