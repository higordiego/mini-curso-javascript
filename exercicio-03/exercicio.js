// # Exercicio 02
// ### 
//  Pegar array cuja o nome dos objetos internos seja firstname, lastName e age essas variaveis
//  terão que ser o primeiro nome da pessoa o segundo nome da pessoa e a ultima sua idade,a idade terá que ser validada se é maior ou menor de 18 anos caso sim, retorne "você é de maior" caso contratio "você é de menor"..

//     *  Filter
//     * operadores logicos

var lista = [
    {
        firstname: 'Higor',
        lastName: 'Diego',
        age: 30
    },
    {
        firstname: 'Juh',
        lastName: 'Silva',
        age: 19
    },
    {
        firstname: 'Mikaella',
        lastName: 'Iboltt',
        age: 15
    }
]

const ju = (valor) => (valor.age > 18)  ? valor : '';


var resposta = lista.filter(ju)

console.log(resposta)