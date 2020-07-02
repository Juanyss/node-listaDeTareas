const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Muestra una lista de las tareas', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado la tarea'
        }
    })
    .command('borrar', 'Borra una tarea del registro', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}