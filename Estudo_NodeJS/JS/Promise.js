/* Promise
* É um objeto JavaScript com a promessa de que algo sera realizado
* É usado para operações assincronas
*   .Carregar um arquivo
*   .Leitura de dados de uma API
*/

const { rejects } = require("assert")

/* Uma promise tem 4 estagios
* Pending: Estado inicial, assim que o Objeto da promessa é iniciado
* Fulfilled: A promessa foi rejeitada, houve um erro
* Settled: Seja com sucesso ou com erro, ela foi finalmente concluida
*/

let aceitar = false

console.log('pedir uber')

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('pedido aceito!')
    }
    return reject('pedido negado!')
})
promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))
    
console.log('aguardando')

