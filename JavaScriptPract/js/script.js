
let miInformacion = {
    nombre: "Elliot Johan Reyes Mendoza",
    edad: 22,
    contacto: {
        email: "elliotreyes75@gmail.com",
        telefono: "55-14-69-98-97"
    },
    pasatiempos: ["Jugar", "Cocinar", "Bailar"],
    librosFavoritos: [
        {
            titulo: "Lucas y yo",
            paginas: 109,
            leido:true,
            autor: "Audrey O'Hearn",
            genero: "Ficción",
            fichaBibliografica: function () {
                console.log(`Título: ${this.titulo}`);
                console.log(`paginas: ${this.paginas}`);
                console.log(`leido: ${this.leido}`);
                console.log(`Autor: ${this.autor}`);
                console.log(`Género: ${this.genero}`);
            }
        },
        {
            titulo: "League of Legends. Los Reinos de Runeterra",
            paginas: 109,
            leido:true,
            autor: "Riot Games",
            genero: "Ficción",
            fichaBibliografica: function () {
                console.log(`Título: ${this.titulo}`);
                console.log(`paginas: ${this.paginas}`);
                console.log(`leido: ${this.leido}`);
                console.log(`Autor: ${this.autor}`);
                console.log(`Género: ${this.genero}`);
            }
        },
        {
            titulo: "El principito",
            paginas: 109,
            leido:false,
            autor: "Antoine de Saint-Exupéry",
            genero: "Literatura infantil, Fábula, Novela corta, Ficción especulativa",
            fichaBibliografica: function () {
                console.log(`Título: ${this.titulo}`);
                console.log(`paginas: ${this.paginas}`);
                console.log(`leido: ${this.leido}`);
                console.log(`Autor: ${this.autor}`);
                console.log(`Género: ${this.genero}`);
            }
        }
    ],
    
};


console.log("Información Personal:");
console.log(`Nombre: ${miInformacion.nombre}`);
console.log(`Edad: ${miInformacion.edad}`);
console.log(`Email: ${miInformacion.contacto.email}`);
console.log(`Teléfono: ${miInformacion.contacto.telefono}`);
console.log("Pasatiempos: ", miInformacion.pasatiempos.join(", "));

console.log("\nLibros Favoritos:");
console.log("\n");

miInformacion.librosFavoritos.forEach(libro => {
    libro.fichaBibliografica();
    console.log("");
});


