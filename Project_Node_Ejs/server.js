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
    //Passando itens de um objeto de arquivo JS para q o EJS renderize
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "migável"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/about", function(req, res){
    res.render("pages/about");
})

//roda o servidor
//carrega tudo no express e o listen é um funcao dentro do express
//que fica ouvindo uma porta, nesse caso essa porta é 8080
//OBS: para orodar os projetos no proprio pc a porta usada é o localhost
//o localhost possui varias portas incluindo 8080 e quando o endereco
//localhost:8080 for usado no navegador, o conteudo no arquivo server.js sera executado
app.listen(8080);
console.log("Rodando");