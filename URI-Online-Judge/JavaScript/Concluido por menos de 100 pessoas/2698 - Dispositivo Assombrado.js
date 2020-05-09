// Em uma recente viagem a uma escavação arqueológica na ilha caribenha de São Basil, você encontrou um misterioso dispositivo com instruções que lembram um enigma. Seu guia local Vibenas diz que caso você resolva o enigma, o dispositivo talvez lhe mostre o local onde um grande tesouro deixado pelo sanguinário pirata Lyerpes está escondido.

// O dispositivo tem uma fita com L células indexadas de 0 à L-1. Cada célula possui uma cor que pode ser alterado através dos comandos do dispositivo. Cada cor é codificada como um inteiro, e inicialmente todas as células possuem a mesma cor. As instruções que você encontrou representam N passos que devem ser executados antes do dispositivo mostrar o caminho do tesouro. Cada passo é descrito usando 4 inteiros P, X, A e B. As instruções dizem que para completar um passo você deve contar o número de células que atualmente possuem a cor P. Digamos que este número seja S. Então você deve calcular os valores

// M1 = (A + S2 ) mod L ,

// M2 = (A + (S + B)2 ) mod L .

// Finalmente você deve fazer todas as células no intervalo fechado [min(M1,M2, max(M1,M2)] serem da cor de X.

// Após essa exaustiva tarefa de processar os N passos requeridos pelo dispositivo, você tera ainda um trabalho: dada a cor que aparece o maior número de vezes no dispositivo após todos os passos (isto é, a cor mais frequente), você deve ir ao local do naufrágio do navio de Lyerpe e dizer em voz alta o número de celulas que possuem tal cor. Note que este número é único mesmo se mais de uma cor aparecer o maior número de vezes no dispositivo após todos os passos.

// Realizando todos estes cálculos no dispositivo levariam gerações, mas você, um renomado programador, pode criar um programa que rapidamente indica a resposta para o enigma. Após isso, o verdadeiro desafio será encontrar o local do naufrágio do velho navio de Lyerpes.

// Entrada
// O primeiro número contem três inteiros L, C e N (1 ≤ L, C, N ≤ 105 ), representando respectivamente o número de celulas na fita, o número de cores disponíveis e o número de passos nas instruções. Cores são identificadas por inteiros distintos indo de 1 à C e inicialmente todas as células contem 1 cor. Cada uma das próximas N linhas descreve um passo das instruções com 4 inteiros P, X, A e B (1 ≤ P, X ≤ C and 0 ≤ A, B ≤ 108 ), indicando respectivamente a cor a qual o número de celulas é usado para decidir o intervalo dos valores usado para calcular os limites como acima descritos.

// Saída
// Dado uma cor que aparece o maior número de vezes na fita do dispositivo após realizar a sequência de passos descrita na entrada, imprima uma única linha com um inteiro que indica o número de células contendo aquela cor.

var input = '7 5 2\n1 2 5 3\n3 3 0 1' //require('fs').readFileSync('/dev/stdin', 'utf8'); 
var lines = input.split('\n');