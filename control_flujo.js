// TP10 - Parte B: Control de Flujo

// 4. Determinar si un número es par o impar
let numero = 7;

if (numero % 2 === 0) {
  console.log(numero, "es par");
} else {
  console.log(numero, "es impar");
}

// 5. Clasificar una edad
let edad = 16;

if (edad >= 0 && edad <= 11) {
  console.log("Niño");
} else if (edad >= 12 && edad <= 17) {
  console.log("Adolescente");
} else if (edad >= 18) {
  console.log("Adulto");
} else {
  console.log("Edad no válida");
}
