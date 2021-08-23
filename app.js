const { crearArchivo } = require ('./Helpers/helpers.js');
const yargs = require("./config/yargs.js");
const colors = require('colors');


console.clear();

//console.log(process.argv);
console.log(yargs.argv);

//crearArchivo(5);

crearArchivo(yargs.argv.b, yargs.argv.l, yargs.argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado exitosamente'.red))
    .catch(err => console.log(err));

