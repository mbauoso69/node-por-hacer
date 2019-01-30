const fs = require('fs');

const db = require('../DB/db');

let listadoPorHAcer = [];

const crear = (descripcion) => {

    cargaDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHAcer.push(porHacer);
    guardaDB();


    return porHacer;

}

const guardaDB = () => {
    let datos = JSON.stringify(listadoPorHAcer);
    fs.writeFile('DB/db.json', datos, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido salvado!');
    });
}

const getListado = () => {
    cargaDB();
    return listadoPorHAcer;

}

const actualizar = (descripcion, completado) => {
    cargaDB();
    let indice = listadoPorHAcer.findIndex(tarea => {
        return (tarea.descripcion === descripcion);
    })
    if (indice >= 0) {
        listadoPorHAcer[indice].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargaDB();
    let nuevoListado = listadoPorHAcer.filter(tarea => {
            return tarea.descripcion !== descripcion;
        })
        /*   let indice = listadoPorHAcer.findIndex(tarea => {
              return (tarea.descripcion === descripcion);
          }) */
    if (nuevoListado.length !== listadoPorHAcer.length) {
        listadoPorHAcer = nuevoListado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}

const cargaDB = () => {
    try {
        listadoPorHAcer = require('../DB/db.json');
        console.log(listadoPorHAcer);
    } catch (error) {
        listadoPorHAcer = [];
    }
}