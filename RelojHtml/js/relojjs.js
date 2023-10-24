export function iniciarReloj() {
    let relojInterval;
    const relojElement = document.getElementById('reloj');

    const actualizarReloj = () => {
        const ahora = new Date();
        const horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const segundos = ahora.getSeconds();
        const amPm = horas >= 12 ? 'PM' : 'AM';

        const horaFormato12 = horas % 12 || 12;
        const horasStr = horaFormato12 < 10 ? `0${horaFormato12}` : horaFormato12;
        const minutosStr = minutos < 10 ? `0${minutos}` : minutos;
        const segundosStr = segundos < 10 ? `0${segundos}` : segundos;

        relojElement.textContent = `${horasStr}:${minutosStr}:${segundosStr} ${amPm}`;
    };

    return {
        iniciar: () => {
            relojInterval = setInterval(actualizarReloj, 1000);
            document.getElementById('iniciarReloj').disabled = true;
            document.getElementById('detenerReloj').disabled = false;
        },
        detener: () => {
            clearInterval(relojInterval);
            document.getElementById('iniciarReloj').disabled = false;
            document.getElementById('detenerReloj').disabled = true;
        },
    };
}