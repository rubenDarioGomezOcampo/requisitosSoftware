function vali() {

    var nombres = document.getElementById("nomS").value;
    var correo = document.getElementById("corrS").value;
    var passw = document.getElementById("pasS").value;


     if (nombres == length || !isNaN(nombres)) {
         alert("Rellene los campos correctamente");
         return false;
     }
 
     if (correo == length) {
         alert("Rellene los campos correctamente 2");
 
         return false;
     }
 
     if (passw == length) {
         alert("Rellene los campos correctamente 3");
         return false;
    }


    var usuario = {
        nombres_user: nombres,
        email: correo,
        pass_user: passw
    }

    let Usur =  JSON.parse(localStorage.getItem("User"))  || [] ;
    Usur.push(usuario);
    let UsuarioI = JSON.stringify(Usur);
    localStorage.setItem("User", UsuarioI)




























}

