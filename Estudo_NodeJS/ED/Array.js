const pilotos = ['Senna', 'Prost', 'schumacher', 'Hamilton']

//Indexação comeca por 0
console.log(pilotos[0])
//tamanho do array
console.log(pilotos.length)
//Iteravel
for (let piloto of pilotos){
    console.log(piloto)
}
//adiciona elemento
pilotos.push('Alonso')
console.log(pilotos)

for (let piloto of pilotos){
    console.log(piloto)
}

//Encontra um elemento
const senna = pilotos.find(piloto => piloto === 'Alonso')
console.log(senna)

//Deletar um elemento
pilotos.splice(2,1)
console.log(pilotos)