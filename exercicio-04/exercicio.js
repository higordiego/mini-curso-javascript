// Exercicio 04
// 4.1
const axios = require('axios')

const configura = {
    method: 'get',
    url: 'https://www.receitaws.com.br/v1/cnpj/27865757000102'
}

function validar(sucesso) {
    if(sucesso.data) {
        console.log('tem', sucesso.data)
    } else {
        console.log('não tem')
    }
}

function validarErro(error){
    console.log('Error, url não encontrada!')
}

// axios(configura)
//     .then(validar)
//     .catch(validarErro)


// 4.2
const configuraCep = {
    method: 'get',
    url: 'http://api.postmon.com.br/v1/cep/63050222'
}

axios(configuraCep)
    .then(validar)
    .catch(validarErro)
