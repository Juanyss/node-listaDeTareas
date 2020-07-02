const yargs = require('./config/yargs').argv;
const argv = require('yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {

            console.log(colors.green('======Por hacer======'));
            console.log(tarea.descripcion);
            console.log('estado: ', tarea.completado);
            console.log(colors.green('====================='));

        }
        break;

    case 'actualizar':
        porHacer.actualizar(argv.descripcion)
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar);

        break;

    default:
        console.log('comando no reconocido');
}