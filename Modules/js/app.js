
import { Triangulo, Cuadrado, Pentagono } from './poligonos.js';
import { mostrarRelojDigital } from './reloj.js';
import { calcularFactorial } from './factorial.js';



// Polígonos Regulares
const triangulo = new Triangulo([3, 4, 5]);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);
console.log(`Perímetro del triángulo: ${triangulo.calcularPerimetro()}`);

const cuadrado = new Cuadrado([4, 4, 4, 4]);
console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);
console.log(`Perímetro del cuadrado: ${cuadrado.calcularPerimetro()}`);

const pentagono = new Pentagono([5, 5, 5, 5, 5]);
console.log(`Área del pentágono: ${pentagono.calcularArea()}`);
console.log(`Perímetro del pentágono: ${pentagono.calcularPerimetro()}`);

// Reloj Digital
mostrarRelojDigital();

// Factorial
const numero = 5;
calcularFactorial(numero);