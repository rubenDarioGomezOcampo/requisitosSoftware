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
    
    let existentes = Usur.filter((registro)=>{
        let coincidentes = registro.email == correo;
        return coincidentes
    });

    if(existentes.length){
        alert("El mail ya se encuentra registrado");
    } else {
        Usur.push(usuario);
        let UsuarioI = JSON.stringify(Usur);
        localStorage.setItem("User", UsuarioI)
    }
    
    

}

function validar(){
    
    var mailSolicitado = document.getElementById("mailSolicitado").value;
    var passSolicitado = document.getElementById("passSolicitado").value;
  
    if(!mailSolicitado || !passSolicitado){
        alert("Debe diligenciar todos los campos")
        return false;
    } 

    let usuarios =  JSON.parse(localStorage.getItem("User"))  || [] ;

    let mails = usuarios.filter((usuario)=>{
        let usuarioValidado = usuario.email == mailSolicitado
        && usuario.pass_user == passSolicitado;
        return usuarioValidado
    });
    mails.length ? alert("Correcto"):alert("Incorrecto")
    console.log(mails.length)
    return false;
}

