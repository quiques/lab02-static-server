function hola() {
    sweetAlert("World Places","¡Bienvenido a esta pagina!");
    document.body.style.backgroundColor = "lightseagreen"
}
function changeBkgColor(element,color) {
    var color = document.body.style.backgroundColor;
    if(color == "lightseagreen"){
        color = "honeydew"
    }else{
        color = "lightseagreen";
    }
    console.log(">Cambiando el color a   "+ color);
    document.body.style.backgroundColor = color;
}