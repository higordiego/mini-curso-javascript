const name = 'Juh'
const lastname = 'silva'
const age = 19

function validarSeEDeMenor(age) {
    if(age < 18) {
        console.log('você é de menor')
    } else {
        console.log('você é de maior')
    }
}

validarSeEDeMenor(age)