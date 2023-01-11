

const disponible = {
    100: 3,
    50: 6,
    20: 10,
    10: 50,
    1: 50,
};

const billetes = Object.keys(disponible);

const totalDisponible = () => {
    let total = 0;
    for (let i = 0; i < billetes.length; i++) {
        total += billetes[i] * disponible[billetes[i]]
    }

    return total;
}


const calcularBilletes = (saldoARetirar, denominacion) => {
    let cantidad = saldoARetirar / denominacion

    if (cantidad > disponible[denominacion]) {
        cantidad = disponible[denominacion]
    }
    disponible[denominacion] -= cantidad

    return cantidad
}


const procesar = valorAretirar => {
    if (valorAretirar > totalDisponible()) {
        console.log("Error, no hay suficiente saldo")

        return
    }

    let saldoARetirar = valorAretirar;
    while (saldoARetirar > 0) {

        let cantidad = 0;
        for (let i = 0; i < billetes.length; i++) {
            cantidad = calcularBilletes(saldoARetirar, billetes[i]);
            console.log(`${cantidad} billetes de denonimacion: ${billetes[i]}`);

            saldoARetirar -= cantidad * billetes[i]
        }
    }
}

procesar(9.5);