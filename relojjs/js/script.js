function mostrarRelojDigital() {
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

        const relojDigital = `${horasStr}:${minutosStr}:${segundosStr} ${amPm}`;
        console.clear(); 
        console.log(relojDigital);
    };

    setInterval(actualizarReloj, 1000);
}

mostrarRelojDigital();