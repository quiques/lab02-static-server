function getFortuneFromServer(){
    // Realizando la solicitud jquery en ajax
    $.get("/getfortune", function(data, status){
        console.log("> " + typeof(data));
        console.log("> Estatus de respuesta:  " + status);
        alert(data.mensaje);
        swal({
            title: "!Tu Fortuna¡",
             text: data.mensaje,
             imageUrl: 'img/suerte.jpg'
            });
    });
    //alert("¡Esta es tu fortuna!");
}