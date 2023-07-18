
const valorKW = 0.09;

function consumoActual(lActual, lAnteriror) {
    return lActual - lAnteriror
}
function consumoAnterior(tip) {
    if (tip === "1a") return 2
    if (tip === "1d") return 200
    if (tip === "1c") return 5
}
function fechaPago(tip) {
    if (tip === "1a") return "15-03-2011"
    if (tip === "1d") return "22-04-2011"
    if (tip === "1c") return "29-05-2011"
}
function mesPago(tip) {
    if (tip === "1a") return 3
    if (tip === "1d") return 4
    if (tip === "1c") return 5
}
function valorUF(mes) {
    if (mes === 3) return 21603.25
    if (mes === 4) return 21610.11
    if (mes === 5) return 21616.97
}
function factorClimatico(mes) {
    if (mes === 1) return 2.00
    if (mes === 2) return 2.01
    if (mes === 3) return 2.02
    if (mes === 4) return 2.04
    if (mes === 5) return 2.10
    if (mes === 6) return 2.00
    else {
        return "Mes no válido para Factor Climático"
    }
}

function totalApagar(consumoActual, factorClimatico, valorUF) {
    return '$'+Math.floor(consumoActual*valorKW*factorClimatico*valorUF)
}

export function imprimirBoleta(rut, nombre, direccion, comuna, tip, lAnteriror, lActual) {
    
    return document.write(
        `
        <pre>
        ******************BOLETA DE CHILECTRA***************
        
            ********DATOS DEL CLIENTE*********
            Rut del Cliente       :${rut}
            Nombre del Cliente    :${nombre}
            Dirección del Cliente :${direccion}
            Comuna del Cliente    :${comuna}
            **********BOLETA DETALLE**********
            Fecha de Pago         :${fechaPago(tip)}
            Mes de Pago           :${mesPago(tip)}
            Lectura Anteriror     :${lAnteriror}
            Lectura Actual        :${lActual}
            Tipificación          :${tip}
            ***********Consumo KW*************
            Consumo Actual KW     :${consumoActual(lActual, lAnteriror)}
            Consumo Anterior KW   :${consumoAnterior(tip)}
            Valor U.F. a la Fecha :${valorUF(mesPago(tip))}
            Total a Pagar         :${totalApagar(
                                        consumoActual(lActual, lAnteriror),
                                        factorClimatico(mesPago(tip)),
                                        valorUF(mesPago(tip))
                                    )}
        </pre>
        `
    )
}