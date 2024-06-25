/**
 * Calculo d média de 2 notas
 * @author Miguel Azevedo
 */

// importar o pacote readline-sync (input no console)
const input = require('readline-sync')

//variáveis
let nota1, nota2, media

console.clear()
console.log("calculo da média")
//captura da nota pelo pacote readline-sync
//entrada
nota1 = Number(input.question("Digite a nota 1: "))
console.log(nota1)
