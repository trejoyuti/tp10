// TP10 - Parte E: Clases y POO

// 10. Clase Persona
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// 11. Instancia de Persona
const persona1 = new Persona("Yutiel", 17);
persona1.saludar();
