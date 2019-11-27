const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!(Number(base) && Number(limite))) {
            reject('Base o limite no son numeros')
        }else{
            let res = '';
            for(let i = 0; i <= limite; i++) {
                res += (`${base} * ${i} = ${base * i} \n`)
            }
            resolve(res);
        }
    })
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro recibido ${base}, no es un numero`);
            return;
        }

        let tabla = '';
        
        for (let i = 1; i <= 10; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;    
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err)=>{
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
