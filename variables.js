// TP10 - Parte A: Variables

// var: puede redeclararse y reasignarse (ya no se usa tanto)
var nombre = "Yutiel";
var nombre = "Trejo"; // ✅ permitido
console.log("var:", nombre);

// let: se puede reasignar, pero NO redeclarar en el mismo bloque
let edad = 17;
edad = 18; // ✅ permitido
console.log("let:", edad);

// const: no se puede reasignar ni redeclarar
const pais = "Argentina";
// pais = "Chile"; ❌ error: no se puede reasignar
console.log("const:", pais);

// Tipos de datos
let texto = "Hola";          // string
let numero = 10;             // number
let booleano = true;         // boolean
let nulo = null;             // null
let indefinido;              // undefined

console.log({ texto, numero, booleano, nulo, indefinido });
