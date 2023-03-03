const express = require('express')

const app = express()
//o listen fica ouvindo o navegador e quando a gente entrar na porta 3000
//fica ouvindo uma porta para poder rodar no navegador (server)
app.listen('3000')
console.log("Servidor Rod");

//middleware
app.use(express.json())

//app.route('/').get( (req,res) => res.send("hello") )
app.route('/').post( (req,resp) => console.log(req.body) )
