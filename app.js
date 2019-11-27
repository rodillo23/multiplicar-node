const colors = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(impresion=>{
                console.log('============'.green);
                console.log(`Tabla del ${argv.base}`.green);
                console.log('============'.green);
                console.log(impresion.rainbow)
            }).catch(err=>{
                console.log(err)
            })
        break;
    
    case 'crear':
        crearArchivo(argv.base)
            .then(nombre =>{
                console.log(`El Archivo ${nombre.red} se ha creado con exito`);
            }).catch(err => {
                console.log(err);
            })
        break;

    default:
        console.log('Comando no reonocido');
        break;
}


// let parametro = argv[2]
// let base = args.split('=')[1]


