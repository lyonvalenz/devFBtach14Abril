'use strict'

//Recibe dos parametros: una funcion y un tiempo de espera
function hola() {
    return console.log('Hola Mundo');
}

//funcion del navegador
//Funcion de orden superior, funcion que ejecuta ese parametro(callback)
//Funcion asincrona
setTimeout(() => {
    console.log('Hola');
}, 3000);


let i = 0
setInterval(() => {
    console.log(i++);
}, 1000);