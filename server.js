//http
var http = require("http");
//obteniendo informacion del entorno de ejecucion con respecto al IP
//y al puerto que debeomos uzar en nuestro server.
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
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
        "Content-Type": "text/plain",
        "Server": "ITGAM@4.4.7"
    });
    //Enviamor la respuesta
    res.write("Hola Luis Enrique Sanchez");
    //Cerra la conexion
    res.end();
});
//Poner a trabajar al server
//usar un puerto y la direccion ip o locall host
server.listen(PORT,IP,function () {
    console.log(`> Server listening @http://${IP}:${PORT}.....`);
});
