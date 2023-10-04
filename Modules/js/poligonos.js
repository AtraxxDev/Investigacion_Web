export class Poligono {
    constructor(lados) {
        this.lados = lados;
    }

    calcularPerimetro() {
        return this.lados.reduce((a, b) => a + b, 0);
    }

    calcularArea() {
        return "Área no calculada";
    }
}

export class Triangulo extends Poligono {
    calcularArea() {
        if (this.lados.length === 3) {
            const [a, b, c] = this.lados;
            const l = this.calcularPerimetro() / 2;
            return Math.sqrt(l * (l - a) * (l - b) * (l - c));
        } else {
            return "Área no calculada";
        }
    }

    calcularPerimetro() {
        return this.lados.reduce((a, b) => a + b, 0);
    }
}

export class Cuadrado extends Poligono {
    calcularArea() {
        if (this.lados.length === 4) {
            return this.lados[0] ** 2;
        } else {
            return "Área no calculada";
        }
    }

    calcularPerimetro() {
        return this.lados[0] * 4;
    }
}

export class Pentagono extends Poligono {
    calcularArea() {
        if (this.lados.length === 5) {
            const lado = this.lados[0];
            return (5 * lado ** 2) / (4 * Math.tan(Math.PI / 5));
        } else {
            return "Área no calculada";
        }
    }

    calcularPerimetro() {
        return this.lados[0] * 5;
    }
}