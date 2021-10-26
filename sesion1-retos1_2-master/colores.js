//Creacion de una funcion que muestre el resultado de la suma de dos numeros
const colors = require('colors');

function suma(numero1, numero2) {
  let suma = numero1 + numero2;
  console.log('El resultado de la suma es:'.underline.blue);
  console.log(suma);
}

suma(10, 40);
