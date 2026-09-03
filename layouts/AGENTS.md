# Plantas SVG

Desenhos em escala, UTF-8, `role="img"`. Título em Georgia; resto em system-ui. Fundo `#f4f1ea`.

Copie a planta irmã mais próxima e troque só o que muda. Não invente uma geometria nova.

## Escalas

| Arquivo | Escala | Vista |
|---|---|---|
| `opcao-N-casal.svg` / `opcao-N-queen.svg` | **2 px = 1 cm** | planta do quarto |
| `sofa-encaixe.svg`, `sofa-comparativo.svg` | **3 px = 1 cm** | vão / barras |
| `geladeira-nicho.svg` | **3 px = 1 cm** | frente do nicho |
| `geladeira-comparativo.svg` | 6 px = 1 cm na largura, 2 px = 1 cm na altura | barras |

## Quarto (`opcao-N-*.svg`)

`viewBox="0 -150 760 830"`. Quarto: `x=80 y=90` tamanho **600 × 480** (3,00 × 2,40 m).

Orientação fixa (não rotacionar):

- Esquerda = cabeceira (parede 2,40 m oposta à janela)
- Direita = janela + mesa + recuo da porta
- Baixo = roupeiro (parede 3,00 m oposta à porta)
- Cima, fora do retângulo = recuo 0,85 m e giro da porta 90 cm

Cama a partir de `(80, 90)`:

| | L × C | rect `width × height` | pé até a janela |
|---|---|---|---|
| Casal | 1,38 × 1,88 m | 376 × 276 | 1,12 m |
| Queen | 1,56 × 2,00 m | 400 × 312 | 1,00 m |

Roupeiro: profundidade em px = cm × 2, largura ao longo dos 600 px da base. Folga na 3,00 m = `600 − largura_px`, retângulo tracejado à direita do móvel.

Aéreo (opções 5–6): faixa na cabeceira, semi-opaca, a cama passa por baixo até `x=80`. Não desenhar ponte de chão.

Paleta: cama `#e8dcc8` · criado `#d4c4a8` · roupeiro `#a67c52` · mesa `#5f8a84` · janela `#8ec4d4` · folga / vão `#2c5a3d` · recuo da porta verde tracejado.

Referência: `opcao-1-casal.svg` (reto) e `opcao-6-casal.svg` (L com aéreo e folga de cômoda).

## Sofá e geladeira

`sofa-encaixe.svg`: vão 206 cm = 618 px. Folgas nas pontas em verde. Retrátil aberto em tracejado à frente.

`geladeira-nicho.svg`: nicho 75 × 200 cm = 225 × 600 px. Folgas laterais e topo em `#e6f0e8`. Inverse = refrigerador em cima, freezer embaixo.

Textos com `×` e acentos: gravar UTF-8. Não substituir por `x` nem por `?`.
