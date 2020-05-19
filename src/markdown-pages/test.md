---
slug: estruturas-de-dados/
title: "Estruturas de dados"
order: 0
---
## O que são estruturas de dados? Onde vivem? De que se alimentam?
O exercício da programação pode ser pensado fundamentalmente como 
uma forma de manipulação de informação. Mais especificamente, todo
programa tem o objetivo de implementar alguma **computação**: Uma
transformação de algum dado de entrada em algum dado de saída.

Todavia, a computação que um programa implementa pode ser arbitrariamente
complexa e exigir qualquer número de computações intermediárias.

Alguns exemplos:

- Em um banco de dados, ao responder a um pedido, podemos precisar percorrer
grande quantidade de dados armazenados para construir a resposta.
- Em um compilador, precisamos saber todas as variáveis que existem em um 
determinado ponto do programa para gerar o código de saída corretamente.
- Em um sistema web, podemos precisar combinar dados armazenados em vários 
bancos de dados diferentes para construir uma resposta.
- Em um jogo, é necessário, a cada novo frame, percorrer o estado de dezenas
de objetos com os quais o jogador pode interagir.
- Em um sistema estatístico, precisamos armazenar dados de várias observações
de algum conjunto de variáveis e depois percorrê-los para extrair dados 
agregados dessas observações.

O que todos os exemplos dados têm em comum é que, para executar nossa
computação, precisamos de uma forma de armazenar informações para 
posteriormente acessá-las.

Não apenas isso, mas precisamos que esse acesso seja feito de forma 
__eficiente__:

- Se o banco de dados demorar demais para percorrer as informações armazenadas,
todo o sistema que depende dele irá demorar para responder.
- Se o compilador demorar para checar se uma variável existe ou não, a 
compilação do seu programa irá demorar horas.
- Se o sistema web demorar para buscar os dados, o cliente que acessa ele
(seja uma página web, um app ou outro sistema) irá deixar seu usuário esperando.
- Se o jogo demorar para calcular todas as interações do jogador, nunca iremos
atingir aqueles deliciosos 60 FPS.
- Se o sistema estatístico demorar para percorrer os dados, o pobre do cientista
vai passar um tempão esperando os resultados do seu modelo.

A solução de todas essas questões passa pelas estruturas de dados. Uma estrutura
de dados define um formato de armazenamento, gestão e organização de dados que
permite que acesso e modificação eficientes.

Não existe uma única estrutura de dados que resolva todos os casos de uso.
Para cada padrão de acesso à informação, é necessária uma forma diferente de
armazenamento. Muita vezes não existe um único formato que seja "o melhor" -
é necessária uma análise cuidadosa dos prós e contras de cada representação.

Iremos analisar diversas estruturas de dados para entender os prós e contras
de cada uma e quando o uso de cada uma é adequado.

- [Listas encadeadas (EM CONSTRUÇÃO)](#)
