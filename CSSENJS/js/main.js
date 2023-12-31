document.addEventListener("DOMContentLoaded", () => {

    const informacionPersonal = {
        nombre: "Elliot Reyes",
        foto: "img/Elliot.jpg",
        biografia: "Mi nombre es Elliot Reyes. Tengo 20 años y soy amante de los videojuegos, en especial League of Legends. También me gusta programar y, a lo largo de mi carrera, he desarrollado un gran interés por los juegos de terror.",
        pasatiempos: ["Ir a plazas", "Máquinas de garra", "Jugar videojuegos"],
        contacto: ["Correo: Elliotreyes75@gmail.com", "Redes: @Atraxxdev", "Sitios: https://atraxxdev.github.io/CV_ElliotReyes/"]
    };


    const nombreElement = document.getElementById("nombre");
    const fotoElement = document.getElementById("foto");
    const biografiaElement = document.getElementById("biografia");
    const pasatiemposElement = document.getElementById("pasatiempos");
    const contactoElement = document.getElementById("contacto");


    nombreElement.textContent = informacionPersonal.nombre;
    fotoElement.src = informacionPersonal.foto;
    biografiaElement.textContent = informacionPersonal.biografia;


    fotoElement.classList.add("img-responsive");

    informacionPersonal.pasatiempos.forEach((pasatiempo) => {
        const li = document.createElement("li");
        li.textContent = pasatiempo;
        pasatiemposElement.appendChild(li);
    });

    informacionPersonal.contacto.forEach((contacto) => {
        const li = document.createElement("li");
        if (contacto.startsWith("Sitios:")) {
           
            const link = document.createElement("a");
            link.href = contacto.split("Sitios:")[1].trim(); 
            link.textContent = "Visitar mi sitio"; 
            li.appendChild(link);
        } else {
            li.textContent = contacto;
        }
        contactoElement.appendChild(li);
    });

   
    nombreElement.style.color = "blue";
    biografiaElement.style.fontStyle = "italic";
    pasatiemposElement.style.listStyleType = "square";
    contactoElement.style.listStyleType = "disc";

   
    fotoElement.style.maxWidth = "20%"; 
    nombreElement.style.fontSize = "50px"; 
    biografiaElement.style.fontSize = "30px";
    pasatiemposElement.style.fontSize ="20px"
    contactoElement.style.fontSize = "20px";

});



document.addEventListener("DOMContentLoaded", () => {
    let darkMode = localStorage.getItem("darkMode") === "true";

    function toggleDarkMode() {
        darkMode = !darkMode;
        updateStyles();
        saveModeToLocalStorage();
    }

    function updateStyles() {
        if (darkMode) {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "#fff";
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
        }
    }

    function saveModeToLocalStorage() {
        localStorage.setItem("darkMode", darkMode);
    }

    updateStyles();

    const btnCambiarColor = document.getElementById("btn-cambiar-color");
    btnCambiarColor.addEventListener("click", toggleDarkMode);

    const btnMostrarModo = document.getElementById("btn-mostrar-modo");
    btnMostrarModo.addEventListener("click", mostrarModo);

    function mostrarModo() {
        const modo = darkMode ? "Modo Oscuro" : "Modo Claro";
        alert(`La página está actualmente en ${modo}`);
    }

    saveModeToLocalStorage();
});
