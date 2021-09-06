const lista = []
const outraLista = [5,6,8,3,10]

for (let i = 0; i <outraLista.length; i++) {
    const numeroOutraLista = outraLista[i]
    lista.push(numeroOutraLista *2);

}

const resultadoDoMap = outraLista.map(function(value, index,array){
    return array[1];
})

console.log(resultadoDoMap)