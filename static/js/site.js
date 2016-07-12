function hola() {
    alert("Bienvenido a esta pagina...")
}
function changeBkgColor(element,color) {
    var color = document.body.style.backgroundColor;
    if(color == "lightseagreen"){
        color = "honeydew"
    }else{
        color == "lightseagreen";
    }
    console.log(">Cambiando el color a   "+ color);
    document.body.style.backgroundColor = color;
}