// Manejadores de rutas virtuales
var fortune = require("./fortune");
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
    },
    "/getfortune": function (req, res){
        // // Se obtiene el mensaje de la suerte
        // var fortunePaper = {
        //     "mensaje" : 
        //     "La honestidad es un regalo caro, no lo esperes de gente baratisima"
        // };
        // // Se configura el encabezado de respuesta HTTP
        // res.writeHead(200,{
        //     "Content-Type" : "application/json"
        // });
        // // Parseando a string el objeto Respuesta
        // // Al estar en 
        // var jsonResponce = JSON.stringify(fortunePaper);
        fortune.getFortune(function(fortunePaper){
          //  Se configura el encabezado de respuesta HTTP
            res.writeHead(200,{
            "Content-Type" : "application/json"
           });
        });
        //Respondemos el Objeto
        res.end(fortunePaper);
    }
};