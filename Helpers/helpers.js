const fs = require('fs');

/*
const crearArchivo  = (base = 5) => {

    console.log("*****************************");
    console.log("      TABLA DEL", base);
    console.log("*****************************");

    let salida = "";

    for(i=1;i<=10;i++)
    {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);

}
*/



const crearArchivo  = async (base = 5, listar, hasta) => {


    try
    {
        if(listar)
        {
            console.log("*****************************");
            console.log("      TABLA DEL", base);
            console.log("*****************************");
        }
        let salida = "";

        for(i=1;i<=hasta;i++)
        {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar)
        {
            console.log(salida);
        }

        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);

        //console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt`;
    }
    catch(err)
    {
        throw err;
    }

}


//Exporta las funciones o atributos que se van a utilizar en otros archivos.
module.exports = {
    crearArchivo
}