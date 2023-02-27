/*
*Funcao Require: 
*é uma forma de chamar modulos que ja sao nativos do node ou modulos criados ou instalados
*Necessita sempre de um argumento
*/

//----------Modulos Nativos do node-----------------------------

//Argumento de nome path, onde "require('path') é um objeto"
//const path = require('path')
//console.log(path)
//Exemplo
//console.log(path.basename(__filename))

//-----------Meus modulos---------------------------------------

//Neste exemplo os arqs JS (require e exports) estão sendo linkados um como outro
const myModule = require('./exports')
console.log(myModule)