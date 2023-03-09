const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

//Devido a demora da operação de get no endereço da API
//a funcao a baixo sera executada depois da operação mais 
//abaixo "console.log('conectando API')"
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')