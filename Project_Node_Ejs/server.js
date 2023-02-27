//Require no modulo instalado express
//O express cria um servidor capaz de mostrar no 
//navegador o conteudo dos arquivos ejs
//O express vai renderizar todos os codigos ejs e mostrar no navegador
const express = require('express');
const app = express();

//avisa o express q o ejs vai ser usado
//a ferramenta (view engine) usada para renderizar html é o ejs
app.set("view engine", "ejs");

//"app.get" cria rota
//get é um método dentro do express
app.get("/", function (req, res){
    res.render("index");
})