const nombre = "Jose"

//console.log(nombre);

const arregloNumeros = [1,2,3,4,5,6,7];

const rForEach = arregloNumeros.forEach(
    function(valorActual,indice,[arreglo])
    {
        console.log(`valor : ${valorActual}`);
        console.log(`indice : ${indice}`);
        console.log(`Arreglo : ${arreglo}`);
    }
);

console.log(`R ${rForEach}`)


//Operador MAp