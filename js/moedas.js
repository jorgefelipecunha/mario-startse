var moedas = 1000000
var ultimoNumerPar = 0

// começa em 1 por causa da ultima pesagem quando tem 3 moedas
var tentativasPraDescobrir = 1

// pego o ultimo numero par
if (moedas % 2 == 0) {
  ultimoNumerPar = moedas
} else {
  ultimoNumerPar = moedas - 1
}

// faz as pesagens até sobrar 3 moedas
while (ultimoNumerPar > 2) {
  ultimoNumerPar = ultimoNumerPar / 2
  tentativasPraDescobrir++
}

console.log(tentativasPraDescobrir)
