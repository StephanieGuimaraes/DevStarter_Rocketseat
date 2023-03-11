/* 
* Estudo de parametros nas requisições
* q são formas de se passar dentro do codigo informações q nao existiam antes
*/

//criacao de uma constante q vai receber o modulo express
//o require puxa esse modulo
//assim  o modulo do express é gurdado nessa costante
const express = require('express')
//A constante do express é inicializada e guardada dentro da constante app
//Assim sempre que se deseje usar qualquer coisa do express é só usar app.e_o_metodo_desejado_do_express
const app = express()
//o listen fica ouvindo o navegador e quando a gente entrar na porta 3000
//fica ouvindo uma porta para poder rodar no navegador (server)
app.listen('3000')
console.log("Servidor Rodando");

let author = "StephCG"  //definição de uma variavel para exemplo

//MIDDLEWARE (ponte entre as requisições)
app.use(express.json())

//Uma forma de passar parametros (nesse caso o nome Steph) pela requisição: http://localhost:3000/?name=Steph
//Outra forma de se passar parametros é pelo body

//app.route('/').get( (req,res) => res.send(req.query.name) )

//Os parametros do tipo body é uma forma de se enviar informacoes para a API
//sem que essas informacoes fiquem na url
//app.route('/').get( (req,res) => res.send(req.body.author) )
app.route('/').post( (req,res) => {
    res.send(req.body)
})

//app.route('/').get( (req,res) => res.send(req.params.parametro) )

/*
* Como pegar parametros pela route ou url
*/
//Uma forma de enviar informacoes atraves da rota ex: /:nome
//app.route('/:nome').get( (req,res) => res.send(req.params.nome) )

/*QUERY PARAMS*/
//Os querys sao identificados na url pela interrogacao ex: localhost:3000?nome=StephanirCG
app.route('/').get( (req,res) => res.send(req.query) )