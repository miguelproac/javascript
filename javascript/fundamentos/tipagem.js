/**
 * Estudo das variaveis - tipagem dinâmica
 * @author Miguel Azevedo
 */

console.clear()
console.log("strings__________")
let nome = "Miguel Azevedo"
console.log(typeof(nome))
console.log(nome)
//concatenção (unir um texto com um conteúdo de uma variável)
console.log("Professor: " + nome) //evitar concatenar desta forma
console.log(`Professor: ${nome}`)
console.log("números__________________")
let peso = 76
let altura = 1.81
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`imc: ${imc.toFixed(2)}`) //tofixed(2) arredondar 2 casas decimais
//Atenção!! 
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos_____________")
let sw = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lamapda))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)
