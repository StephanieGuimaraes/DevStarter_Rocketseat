// Funcoes aceitam qualquer tipo de dado como argumento
/*
function imprimeDado(dado) {
    console.log(dado)
}
imprimeDado(1)
imprimeDado('texto')
//boolean
imprimeDado(true)
//objeto
imprimeDado({ nome: 'Joao' })
//Array
imprimeDado([1,2,3])
*/

function imprimeDado(dado) {
    console.log('outras tarefas')
    //dado() é a ação de chamar a funcao que foi recebida como argumento, por isso Callback
    console.log(dado())
}

//Em JS é possivel retornar uma funcao como argumento de outra funcao
imprimeDado(function (){
    return 'Olá mundo'
})
