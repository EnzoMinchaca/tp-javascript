//1. Introducción a JavaScript
//Ejercicio 2:
console.log("1. Introducción a JavaScript");
let a = 5;
let b = 10;
let c = a + b;
console.log("La suma de a y b es: " + c);

//Ejercicio 3:
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombre + "!");


//2. Operadores lógicos y condicionales
//Ejercicio 1:
console.log("\n2. Operadores lógicos y condicionales");
console.log("Ejercicio 1:");
let d = 10;
let e = 20;
let f = 30;
console.log("El mayor de los tres numeros es: " + Math.max(d, e, f));

//Ejercicio 2:
console.log("Ejercicio 2:");
let numero = prompt("Ingresa un número:");
if (numero % 2 === 0) {
    console.log("El número " + numero + " es par");
} else {
    console.log("El número " + numero + " es impar");
}

//3. Operadores de asignación y bucles
//Ejercicio 1:
console.log("\n3. Operadores de asignación y bucles");
console.log("Ejercicio 1:");
let numero2 = 10;
while (numero2 > 0) {
    console.log(numero2);
    numero2--;
}

//Ejercicio 2:
let numero3;
do {
    numero3 = prompt("Ingresa un número mayor a 100:");
    if (numero3 > 100) {
        console.log("Ingresaste un numero mayor a 100: " + numero3);
    }
} while (numero3 <= 100);

//4. Funciones de JavaScript
//Ejercicio 1:
console.log("\n4. Funciones de JavaScript");
console.log("Ejercicio 1:");
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("El número 8 es par: " + esPar(8));
console.log("El número 7 es par: " + esPar(7));

//Ejercicio 2:
console.log("Ejercicio 2:");
function convertirCelsiusAFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
console.log("30°C son equivalentes a " + convertirCelsiusAFahrenheit(30) + "°F"); 

//5. Objetos en JavaScript
//Ejercicio 1:
console.log("\n5. Objetos en JavaScript");
console.log("Ejercicio 1:");
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    cambiarCiudad(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};
persona.cambiarCiudad("Barcelona");
console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

//Ejercicio 2:
console.log("Ejercicio 2:");
let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    esAntiguo() {
        return (new Date().getFullYear() - this.año) > 10;
    }
};
console.log("El libro '" + libro.titulo + "' es antiguo: " + libro.esAntiguo());

//6. Arrays
//Ejercicio 1:
console.log("\n6. Arrays");
console.log("Ejercicio 1:");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = numeros.map(numero => numero * 2);
console.log("Números originales: " + numeros);
console.log("Números multiplicados por 2: " + numerosMultiplicados);

//Ejercicio 2:
console.log("Ejercicio 2:");
let pares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
console.log("Primeros 10 números pares: " + pares);

//7. Introducción al DOM
