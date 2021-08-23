const yargs = require('yargs');

yargs
.option('b', {
            alias:  "base",
            type: 'number',
            demandOption: true,
            describe: "Indica la tabla a multiplicar"
})
.check( (argv, options) => {
    if(isNaN(argv.b)){
        throw "La base tiene que ser un número";
    }

    if(isNaN(argv.h)){
         throw "El hasta tiene que ser un número";
    }

    return true;
})

yargs
.option('l', {
            alias:  "listar",
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Lista los resultados en pantalla'
})

yargs
.option('h', {
            alias:  "hasta",
            type: 'number',
            demandOption: false,
            describe: "Hasta donde multiplicar",
            default: 10
})

module.exports = yargs;