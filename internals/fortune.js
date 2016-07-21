var fortunePaper =  {
         "mensaje" : 
            "La honestidad es un regalo caro, no lo esperes de gente baratisima"
         };
module.exports = {
    "getfortune" : function (cb) {
       // Conviertiendo el fortunePaper de objeto a su version en string
        fortunePaper = JSON.stringify(fortunePaper)
        // Ejecuto el callback (cb) pasandole
        // como parametro el fortunepaper string
        cb(fortunePaper);
    }
};