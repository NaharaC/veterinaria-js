const {appendFileSync, writeFileSync, readFileSync, existsSync} = require('fs')

// Función para leer las citas:

const leer = (path) => {
    let respuesta

    if (!existsSync(path)) {
        respuesta = JSON.stringify([], null, 2)
        appendFileSync(path, respuesta)
    } else {
        respuesta = readFileSync(path, 'utf-8')
    }

    return JSON.parse(respuesta)
}

// Función para registrar citas:

const registrar = (path, nombre, edad, tipo, color, enfermedad) => {
    const citasRegistradas = leer(path)
    const cita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    }

    const nuevaLista = [
        ...citasRegistradas,
        cita
    ]

    writeFileSync(path, JSON.stringify(nuevaLista, null, 2))

    console.log('✅ Se ha resgitrado la siguiente cita con éxito: ')
    console.table(cita)
}

// Exportar modulos

module.exports = {
    leer,
    registrar
}