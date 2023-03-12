/* 
* Estudo sobre o consumo de API com NodeJS
* Consumindo com axios
*/

/* O express nao faz requisicao em API ele é usado para criar uma API
*ou seja o express nao tem um metodo para ir e buscar um resultado em uma API
* Por isso é necessario a instalação do modulo axios
*/

//criacao de uma constante q vai receber o modulo express
//o require puxa esse modulo
//assim  o modulo do express é gurdado nessa costante
const express = require('express')
const axios = require('axios')
//A constante do express é inicializada e guardada dentro da constante app
//Assim sempre que se deseje usar qualquer coisa do express é só usar app.e_o_metodo_desejado_do_express
const app = express()
//o listen fica ouvindo o navegador e quando a gente entrar na porta 3000
//fica ouvindo uma porta para poder rodar no navegador (server)
app.listen('3000')
console.log("Servidor Rodando");

//MIDDLEWARE (ponte entre as requisições)
app.use(express.json())

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/StephanieGuimaraes')
    //O axios trabalha com promise
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    //mostra se tem algum erro com a url
    .catch(error => console.error(error))
})