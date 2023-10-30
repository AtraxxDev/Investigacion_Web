import { cargarMaterias, mostrarMaterias } from './Ajax.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarMaterias()
        .then((data) => {
            mostrarMaterias(data);
        });
});