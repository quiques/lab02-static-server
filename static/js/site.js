function getFortuneFromServer(){
    // Realizando la solicitud get en AJAX
    $.get("/getfortune","", function(data, status){
        console.log("> " +  typeof(data));
        console.log("> Estatus de respuesta: " + status);
        swal({
            title: "!Esta es tu fortuna¡",
            text: data.message,
            imageUrl: "img/like.jpg"
        });
    },"json");
}

$(document).ready(function () {
    $('.parallax').parallax();
    console.log("> Paralax Initialized...");
});