// var => 'Variavel global'
// const => 'Constante'
// let => 'Variavel de ambiente'
// typeof => consultar qual o tipo dessa variavel
// estudar lei da negação, if ternario (execicio: 01)
// == comparação entre variaveis
// === comparação de tipagem de variaveis
// Pure Functions
// side effectorys
// versão antiga
// function soma(primeiroNumero, segundoNumero){
//     return primeiroNumero + segundoNumero
// } 
// versão nova
// const arrowFunction = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero
// var resultado = soma(10, 20)
// var resultado2 = arrowFunction(10,20)
// console.log(resultado)
// console.log(resultado2)
// antiga
// console.log(primeiroNome+'-'+segundoNome)
// nova
// console.log(`${primeiroNome}-${segundoNome}`

// for
// forEach
// map

// let index = 3

// if(nome.length > index){
//     console.log(nome[index])
// }


// for (let index = 0; index < nome.length; index++) {
//     console.log(nome[index])
// }


// nome.forEach(function(element) {
//     console.log(element)
// });

// let nome = ['Higor', 'Ju', 'Mikaella', 'Rogerio']


// nome.map(function(valor, index) {
//     console.log('O index é: ' + index + ' valor é: ' + valor )
// })


// let lista = [
//     {
//         nome: 'Higor',
//         idade: 30
//     },
//     {
//         nome: 'Ju',
//         idade: 19
//     },
//     {
//         nome: 'Mikaella',
//         idade: 23
//     }
// ]

// let index = 0;
// console.log(lista[index].nome)

// for (let index = 0; index < lista.length; index++) {
//     if(lista[index].idade > 20){
//         console.log('é maior que 20' + ' Nome: ' + lista[index].nome)
//     }
// }

// lista.forEach(function(element, index) {
//     if(element.idade > 20){
//         console.log('é maior que 20 de index: ' +index + ' Nome: ' + element.nome)
//     }
// });

// lista.map(function(valor, index){
//     if(valor.idade > 20){
//         console.log('é maior que 20 de index: ' + index  + ' Nome: ' + valor.nome)
//     }
// })

// var lista = [1,2,3,4,5,6,7]


// var resposta = lista.filter(function(valor, index) {
//     if(valor > 3){
//         return valor
//     }
// })





