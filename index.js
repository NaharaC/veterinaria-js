// Importar modulos

const {leer, registrar} = require('./operaciones')

// Definir ubicación

const path = './citas.json'

// Detallo lo que entregaré por consola

const [func, ...arg] = process.argv.slice(2)
const [nombre, edad, tipo, color, enfermedad] = arg;

// Condiciones que evalúan lo que se está solicitando en consola

switch (func) {

    case 'leer':
        leer(path).forEach((cita) => {
            console.log(cita)
        })
        break;
    
    case 'registrar':
        registrar(path, nombre, edad, tipo, color, enfermedad)
        break;

    default:
        console.log('Lo sentimos, esta función no exite. Intenta nuevamente')
}