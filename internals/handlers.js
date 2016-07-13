// Manejadores de rutas virtuales
var FdN = new Date(1992,9,14,12,00)
//Manejadores de rutas virtuales 
module.exports = {
    "/edad/luis-sanchez": function (req, res) {
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Calculo la edad
        var hoy = new Date();
        var age = Math.ceil((hoy - FdN)/(1000*3600*24*365));    
        //Armando el json
        var objetoRespuesta = {
            "edad":age
        };
        var jsonResponce = JSON.stringify(objetoRespuesta);
        //Envio la respuesta al cliente 
        res.end(jsonResponce);
    }
};