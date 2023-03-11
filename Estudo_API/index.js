/* 
* Estudo e testes dos metodos HTTP e API no Backend
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
//Fala para a API q o conteudo recebido pelo post é um json
//.use é um metodo do express para fazer esses middlewares
app.use(express.json())

//Uso do GET-----------
//app.route('/').get( (req,res) => res.send("hello") )
//app.route('/').get( (req,res) => res.send(author))

//Uso do POST----------
//app.route('/').post( (req,resp) => console.log(req.body) )
//app.route('/').post( (req,resp) => resp.send(req.body) )

/*
//Uso do PUT-----------
//Normalmente usado para editar informações
app.route('/').put( (req,resp) => {
    author = req.body.author   //Recebe uma informação para autorar o valor original da variavel
    resp.send(author)
} )
*/

//Uso do DELETE
app.route('/:identificador').delete( (req,resp) => {
    resp.send(req.params.identificador)
})