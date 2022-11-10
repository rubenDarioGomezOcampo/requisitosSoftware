const renderItem = () => {

   let localStorageDato = JSON.parse(localStorage.getItem('users')) || [],
   panel = document.querySelector("#panel");
  panel.textContent = "";
  localStorageDato.forEach(x => {
    let datos = document.createElement("option");
    datos.innerText = ` ${'Nombre: '} ${x.personName} ${'Email: ' }  ${x.personEmail}`;
    panel.append(datos);
  });
}


const saveObject =()=>{
  var name = document.getElementById('name').value,
      email = document.getElementById('email').value,
      password = document.getElementById('password').value,
      person = {
          personName : name,
          personEmail : email,
          personPassword : password
      };
      
     if (!name || !email  || !password) {
      alert('ingrese todos los campos'); 
     } 

     var userLocal = JSON.parse(localStorage.getItem('users')) || [];
     var mailValidar = userLocal.filter((user)=>{
      var mailExiste = user.personEmail == email;
      return mailExiste;
     });

     if (mailValidar.length) {
      alert('el correo ya esta registrado')
      return false;
     } else { 
      userLocal.push(person);
      var userString = JSON.stringify(userLocal);
      localStorage.setItem('users', userString);
  
     }

}
renderItem();

const validar=()=> {
  var email = document.getElementById('emailValidar').value,
      password = document.getElementById('passwordValidar').value;

  if (!email || !password) {
      alert('ingrese todos los campos')
      return false;
  }

  var userLocal = JSON.parse(localStorage.getItem('users')) || [];
  var mailValidar = userLocal.filter( (user) => {
        var  mailexiste = user.personEmail == email && user.personPassword == password;
          return mailexiste;
      });

      mailValidar.length ? alert('correo registrado') : alert('aun no se registra este correo')
      console.log(mailValidar)
      return false;
}

const drop = () => {
  var userDrop = JSON.parse(localStorage.getItem('users'));
    userDrop.pop();
    var deleted = JSON.stringify(userDrop);
    localStorage.setItem('users',deleted);

}

