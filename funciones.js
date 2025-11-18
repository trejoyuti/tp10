// TP10 - Parte C: Funciones

// 6. Calcular el área de un círculo
function areaCirculo(radio) {
  const PI = Math.PI;
  return PI * radio * radio;
}

console.log("Área de círculo (radio 5):", areaCirculo(5));

// 7. Sumar elementos de un array
function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

const lista = [1, 2, 3, 4, 5];
console.log("Suma del array:", sumarArray(lista));
