//http
var http = require("http");
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
    res.write("Hola Mundo");
    //Cerra la conexion
    res.end();
});
//Poner a trabajar al server
//usar un puerto y la direccion ip o locall host
server.listen(3000,"127.0.0.1",function () {
    console.log("Server listening @http://localhost:3000.....");
});
