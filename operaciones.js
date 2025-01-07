const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const cita = { nombre, edad, animal, color, enfermedad };
    const citasActuales = JSON.parse(fs.readFileSync('./citas.json', 'utf-8') || '[]');
    citasActuales.push(cita);

    fs.writeFileSync('./citas.json', JSON.stringify(citasActuales, null, 2));
    console.log("Cita creada")
}

const leer = () => {
    const salida = fs.readFileSync('./citas.json', 'utf-8')
    console.log("Citas agendadas")
    console.log(salida)
}

module.exports = {registrar, leer}