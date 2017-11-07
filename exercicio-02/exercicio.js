let lista = [
    {
        firstname: 'Higor',
        lastName: 'Diego',
        age: 30
    },
    {
        firstname: 'Rogerio',
        lastName: 'Filho',
        age: 30
    },
    {
        firstname: 'Mikaella',
        lastName: 'Mika',
        age: 20
    },
    {
        firstname: 'Juh',
        lastName: 'Silva',
        age: 17
    },
]

lista.map(function(valor, index){
    if(valor.age > 18) {
        console.log('Map é de maior que 18 ' + valor.age + ' Nome: ' + valor.firstname)
    }
})

lista.forEach(function(valor, index){
    if(valor.age > 18) {
        console.log('ForEach é de maior que 18 ' + valor.age + ' Nome: ' + valor.firstname)
    }
})

for (var index = 0; index < lista.length; index++) {
    if(lista[index].age > 18) {
        console.log('For é de maior que 18 ' + lista[index].age + ' Nome: ' + lista[index].firstname)
    }
    
}