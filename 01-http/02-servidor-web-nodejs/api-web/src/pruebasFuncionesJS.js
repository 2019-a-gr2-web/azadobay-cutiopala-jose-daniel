/*
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
*/

if (true) { // Truty
    console.log('Verdadero');
} else {
    console.log('Falso');
}

if (false) { // Falsy
    console.log('Verdadero');
} else {
    console.log('Falso');
}

if ("") { //  Falsy
    console.log('Verdadero "" ');
} else {
    console.log('Falso "" ');
}

if ("a") { // Truty
    console.log('Verdadero "a" ');
} else {
    console.log('Falso "a" ');
}

if (0) { // Falsy
    console.log('Verdadero "0" ');
} else {
    console.log('Falso "0" ');
}

if ("0") { // Truty
    console.log('Verdadero "0" ');
} else {
    console.log('Falso "0" ');
}

if (-1) { // Truty
    console.log('Verdadero "-1" ');
} else {
    console.log('Falso "-1" ');
}

if (1) { // Truty
    console.log('Verdadero "1" ');
} else {
    console.log('Falso "1" ');
}


if (undefined) { //  Falsy
    console.log('Verdadero "undefined" ');
} else {
    console.log('Falso "undefined" ');
}

if (null) { //  Falsy
    console.log('Verdadero "null" ');
} else {
    console.log('Falso "null" ');
}

if ({}) { //  Truty
    console.log('Verdadero "{}" ');
} else {
    console.log('Falso "{}" ');
}

// Operadores de Arreglos en JS

let arreglo = [
    function () {
        return '0'
    },
    1
    ,
    'A', true, null, {}, []];

const arregloNumeros = [1, 2, 3, 4, 5, 6];

// 1) Impriman en consola todos los elementos

const arregloNumerosForEach = [1, 2, 3, 4, 5, 6];

const rForEach = arregloNumerosForEach
    .forEach(
        function (valorActual) {
            console.log(`Valor: ${valorActual}`);
        }
    );


const r2ForEach = arregloNumerosForEach
    .forEach(n => console.log(`${n}`));


console.log(`RESPUESTA FOREACH: ${rForEach}`);

// 2) Sumen 2 a los pares y 1 a los impares
const arregloNumerosMap = [1, 2, 3, 4, 5, 6];

const rMap = arregloNumerosMap
    .map(  // Devolver el nuevo VALOR de ese elemento
        (valorActual) => {
            const esPar = valorActual % 2 == 0;
            if (esPar) {
                const nuevoValor = valorActual + 2;
                return nuevoValor;
            } else {
                const nuevoValor = valorActual + 1;
                return nuevoValor;
            }
        }
    );

console.log(`RESPUESTA MAP: ${rMap}`); // Nuevo Arreglo

// 3) Encuentren si hay el numero 4

const arregloNumerosFind = [1, 2, 3, 4, 5, 6];

const rFind = arregloNumerosFind
    .find( // CONDICION para devolver ese ELEMENTO
        (valorActual) => {
            return valorActual == 4;
        }
    );
console.log(`Respuesta FIND: ${rFind}`);

// 4) Filtren los numeros menores a 5


const arregloNumerosFilter = [1, 2, 3, 4, 5, 6];

const rFilter = arregloNumerosFilter
    .filter(  // CONDICION TRUE  -> Agrega al arreglo
        //       CONDICION FALSA -> Se omite del arreglo
        (valorActual) => {
            return valorActual < 5;
        }
    );


console.log(`Respuesta FILTER: ${rFilter}`);


// 5) TODOS los valores que son positivos
const arregloNumerosEvery = [1, 2, 3, 4, 5, -6]

//Every es como el operador AND
const respuestaEvery = arregloNumerosEvery
    .every( //Si todos cumplen es True
        // Si no cumplen todos devuelve False
        (valorActual) => { return valorActual > 0 }
    )

console.log(`Respuesta Every: ${respuestaEvery}`);


// 6) ALGUN valor es menor que 2
const arregloNumerosSome = [1, 2, 3, 4, 5, 6]
const respuestaSome = arregloNumerosSome
    .some( // Si alguno cumple la condicion devuelve TRUE
        (valorActual) => {
            return valorActual > 5
        })
console.log(respuestaSome);


// 7) Sumen todos los valores
const arregloNumeroReduce = [1, 2, 3, 4, 5, 6];
const valorIncial = 100;

const respuestaResduce = arregloNumeroReduce
    .reduce((vAcumulado, vActual) => {
        return vAcumulado + vActual;
    },
        valorIncial
    )

console.log(respuestaResduce);

const repuestaReduceAvanzado = arregloNumeroReduce
    .reduce( //Recordar que hay el reduceRigth
        (vAcumulado, vActual) => {
            if (vActual < 4) {
                return vAcumulado + (vActual * 1.1) + 5
            } else {
                return vAcumulado + (vActual * 1.15) + 3
            }
        }, 0
    )
console.log(repuestaReduceAvanzado);

// 8) Resten todos los valores de 100

const respuestaResduceResta = arregloNumeroReduce
    .reduce((vAcumulado, vActual) => {
        return vAcumulado - vActual;
    },
        valorIncial
    )
console.log(respuestaResduceResta);

// 1.1) Sumen 10 a todos
// 1.2) Filtren a los mayores a 15
// 1.3) Si hay algun numero mayor a 30

const arregloEjercicio = [1, 2, 3, 4, 5, 6]

const respuestaEjercicio = arregloEjercicio
    .map((valorActual) => {return valorActual + 10})
    .filter((valorActual) => { return valorActual > 15 })
    .some((valorActual) => { return valorActual > 30 })

    console.log(respuestaEjercicio);