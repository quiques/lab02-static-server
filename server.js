//http
var http = require("http");
var fs = require('fs');
var config = require("./config/config.js");
//obteniendo informacion del entorno de ejecucion con respecto al IP
//y al puerto que debeomos uzar en nuestro server.
//var PORT = process.env.PORT || 3000;
//var IP = process.env.IP || '127.0.0.1';
//Obteniendo las configuraciones del modulo de configuracion
var PORT = config.PORT;
var IP = config.IP;
if (IP == '127.0.0.1')
{
    console.log(">--------------Ejecutando en modo Local ------------");
}
//crear un servidor basico
//cargar un programa a nuestro servidor
var server = http.createServer(function (req,res) {
    //Armar la respuesta en el protocolo http
    //Armar un encabezado http
    res.writeHead(200,{
        "Content-Type": "text/html",
        "Server": "ITGAM@4.4.7"
    });

    //lectura del archivo a servir
    fs.readFile('./static/index.html',
    'utf8',function (err, content) {
        if(err) {
            //res.write("<h1>Error de lectura</h1>");
            res.end("<h1>Error de lectura</h1>");
        }else{
            //re.write(content);
            res.end(content);
          }
    });

    //Enviamor la respuesta
    //res.write("<h1>Hola Luis Enrique Sanchez</<1>");
    //Cerra la conexion
    //res.end();
});
//Poner a trabajar al server
//usar un puerto y la direccion ip o locall host
server.listen(PORT,IP,function () {
    console.log(`> Server listening @http://${IP}:${PORT}.....`);
});
