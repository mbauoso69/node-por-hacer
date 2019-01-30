const opciones = {
    crear: {
        demand: true,
        alias: 'c',
        desc: ' Descripción de la tarea por ahacer'
    },
    listar: {
        alias: 'l'
    },
    actualizar: {
        alias: 'a'
    }
}

const argv = require('yargs')
    .command('listar', 'Lista todas las tareas por hacer', {
        descripcion: {
            demand: true,
            alias: 'l',
            desc: ' Listado de tareas por ahacer'
        }
    })
    .command('crear', 'Crea una tarea nueva por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: ' Descripción de la tarea por ahacer'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea ', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: ' Descripción de la tarea por actualizar'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Tarea actualizada o completada'
        }
    })
    .command('borrar', 'Borra una tarea del listado por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: ' Descripción de la tarea por ahacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}