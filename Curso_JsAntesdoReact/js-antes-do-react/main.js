//--------------------------------------------------------------------------
//Nullish Coalescing Operator = ?? 
// 0, '', [], false, undefined, null => São valores considerados falsy
// O "??" executa o msmo q o operador "||" mas com valores mais restritivos 
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
//Objetos

const user = {
  name: 'Steph',  //chave = "name" e valor = "Steph"
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
  },
};
/*
document.body.innerText = ('name' in user)
document.body.innerText = Object.keys(user)
*/

//--------------------------------------------------------------------------
//Desestruturação de um objeto

/*const { address, idade } = user

function mostrarIdade({ idade }){
  return idade;
}
document.body.innerText = mostrarIdade(user)*/
//document.body.innerText = JSON.stringify({address, idade})

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, ...x] = array;

document.body.innerText = JSON.stringify({first, x})