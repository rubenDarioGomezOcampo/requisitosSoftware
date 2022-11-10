const validarDatos = () => {
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == "" ) {
        alert("Debe diligenciar el numero de documento");
        return false;
    }

    var nombre = document.getElementById("nombre").value;
    if (nombre == "" || !isNaN(nombre)) {
        alert("Debe diligenciar el nombre completo");
        return false;
    }

    var mail = document.getElementById("email").value;
    if (mail == "") {
        alert("Debe diligenciar el correo electronico");
        return false;
    }

    var opciones = document.getElementById("opciones").selectedIndex;
    if (opciones == "0") {
        alert("selecciona una tipo de documento");
        return false;
    }

    var apellidos = document.getElementById("apellidos").value;
    if (apellidos == "" ) {
        alert("escriba apellido");
        return false;
    }

    var telefono = document.getElementById("telefono").value;
    if (telefono == "") {
        alert("Debe diligenciar un numero telefonico valido");
        return false;
    }
}