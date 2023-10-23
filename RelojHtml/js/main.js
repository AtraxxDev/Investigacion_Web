import { iniciarReloj } from './relojjs.js';

const reloj = iniciarReloj();

document.getElementById('iniciarReloj').addEventListener('click', () => {
    reloj.iniciar();
});

document.getElementById('detenerReloj').addEventListener('click', () => {
    reloj.detener();
});