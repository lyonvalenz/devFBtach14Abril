'use strict'

//Declarar una función
function saludo() {
    return console.log('Hola');
}

//Ejecutar una función
saludo()


//Funcion anonima = funcion sin nombre
// funcion con una => es una funcion de flecha (arroy function)
//this no funciona en arrow functions

const saludo = () => {
    return console.log('Hola');
}

//Esta igual funciona porque solo hay un parametro
const saludo = nombre => console.log('Hola' + nombre);

nombre(Leonardo)

//---------------------------------------------------
//crean las funciones para restar, multiplicar, y divivir dos numeros
function suma(num1, num2) {
    return console.log(num1 + num2)
    
}

function resta(num1, num2){
    return console.log(num1 - num2)
}

function divivir(num1, num2){
    return console.log(num1 / num2)
}

function multiplicar(num1, num2){
    return console.log(num1 * num2)
}


//funcion de orden superior = funcion que recibe como parametro otra funcion
function calculadora (num1, num2, computo){
    //callback = funcion de orden superior que invoca 
    return computo(num1, num2)
}

calculadora (2, 2, multiplicar)

