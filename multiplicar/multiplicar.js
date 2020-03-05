//requireds
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
    console.log("-----------".green);
    console.log(`Tabla del ${base}`.green);
    console.log("-----------".green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número`);
            return;
        }

        let tabla = "";
        for (var i = 1; i <= limite; i++) {
            tabla += `${base} x ${i} = ${base * i}\n`;
        }
        resolve(tabla);
    });
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};