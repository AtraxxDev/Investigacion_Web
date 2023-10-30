export function cargarMaterias() {
    return fetch("Data.json")
        .then((response) => response.json());
}

export function mostrarMaterias(data) {
    const materiasContainer = document.getElementById("materias-container");

    data.forEach((materia) => {
        const materiaDiv = document.createElement("div");
        materiaDiv.classList.add("materia");

        const nombreMateria = document.createElement("h2");
        nombreMateria.textContent = materia.nombreMateria;

        const docente = document.createElement("p");
        docente.textContent = `Docente: ${materia.docente}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = `Descripción: ${materia.descripcion}`;

        materiaDiv.appendChild(nombreMateria);
        materiaDiv.appendChild(docente);
        materiaDiv.appendChild(descripcion);

        materiasContainer.appendChild(materiaDiv);
    });
}