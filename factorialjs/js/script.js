const numero = 5; 

const calcularFactorial = (numero) => {
    if (numero < 0 || !Number.isInteger(numero)) {
        console.log("El número debe ser un entero no negativo.");
        return;
    }

    let factorial = 1;
    for (let i = numero; i >= 1; i--) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
};

calcularFactorial(numero); 
