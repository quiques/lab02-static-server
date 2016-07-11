//Cargar los modulos necesarios 
//para crear mi servidor estatico
var fs = require('fs'),
    config = require('../config/config.js'),
    mime = require('mime');

//Exportar la función de Servidor estatico
//la funcion nececita dos argumentos son url y res
exports.serve = function (url, res){
    //Acompletar el static - path
    var filePath = config.STATIC_PATH + url;
    //verificando si esxixte o no el 
    //archivo dentro del servidor
    fs.exists(filePath, function (exists) {
        if(exists){
            //sirvo el archivo
            fs.readFile(filePath,function (err, content){
                //Revisar si hay un error
                if(err){
                    console.log(`>Hubo Error en la lectura del archivo: ${filePath}`);
                    // Enviar error 500: que significa que es un error interno
                    res.writeHead(500,{
                        'Content-Type' : 'text/html',
                        'Server' : 'pilgrimsHawk@2.1.2'
                    });
                    res.end("<h1>Error 500: Recurso dañado</h1>");
                }else {
                    //configuramos la respuesta
                    var contentType = mime.lookup(filePath);
                    //Armamos respuesta
                    res.writeHead(200,{
                        'Content-Type' : contentType,
                        'Server' : 'PilgrimHawks-Server@2.1.2'
                    });
                    //Enviar el archivo
                    res.end(content);
                }
            });
        }else{
            //Mando un codigo 404
            res.writeHead(404,{
                'Content-Type' : 'text/html',
                'Server' : 'PilgrimHawks-Server@2.1.2'
            })
            res.end("<h1>Error 404: Recurso no Encontrado</h1>");
        }

    });
};