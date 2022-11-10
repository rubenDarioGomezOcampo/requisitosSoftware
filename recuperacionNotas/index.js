// Expresiones regulares para la validacion de los datos 
const expRegMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const expRegtext = /^[A-z].+?$/;
const expRegnNum = /^[0-9]+?$/;
// alert('welcome');
// traemos los datos desde localStorange los convertimos en un arreglo y se almacena en una variable
var datos = JSON.parse(localStorage.getItem('eventos')) || [];

// Funcion para validar los datos del formulario
const validate = () => {
    // Almacenamineto de la informacion suministrada en el formulario
    var id = document.getElementById('id').value,
        nameEvent = document.getElementById('nameEvent').value,
        responsableEvent = document.getElementById('responsableEvent').value,
        price = document.getElementById('price').value,
        amount = document.getElementById('amount').value,
        phone = document.getElementById('phone').value,
        email = document.getElementById('email').value,
        // Validacion de las expresiones regulares a los datos ingresados en el formulario
        correo = expRegMail.test(email),
        idExReg = expRegnNum.test(id),
        nameEventExReg = expRegtext.test(nameEvent),
        respEventExReg = expRegtext.test(responsableEvent),
        priceExReg = expRegnNum.test(price),
        amountExReg = expRegnNum.test(amount),
        phoneExReg = expRegnNum.test(phone),
    // objeto que almacenara los datos del formulario 
        eventos = {
            id: id,
            nameEvent: nameEvent,
            responsableEvent: responsableEvent,
            price: price,
            amount: amount,
            phone: phone,
            email: email
        };
// validacion de todos los campos del formulario 
    if (!id || !nameEvent || !responsableEvent || !price || !amount || !phone || !email) {
        alert('Debe diligenciar todos los campos')
        return false;
    } else if (idExReg == false) {
        alert('El ID del evento debe ser numerico')
        return false;
    } else if (nameEventExReg == false) {
        alert('Nombre de evento no valido')
        return false;
    } else if (respEventExReg == false) {
        alert('Nombre del responsable no valido')
        return false;
    } else if (priceExReg == false) {
        alert('Precio no valido')
        return false;
    } else if (amountExReg == false) {
        alert('Cantidad no valida')
        return false;
    } else if (phoneExReg == false) {
        alert('telefono no valido')
        return false;
    } else if (correo == false) {
        alert('Debe ingresar un correo valido')
        return false;
    } else {
        //Se agrega el objeto con la informacion del formulario al array previamente traido desde el localStorange
        datos.push(eventos);
        // conversion del array a string para almacenarlo en el localStorange
        localStorageDato = JSON.stringify(datos);
        localStorage.setItem('eventos', localStorageDato);

        
    }
}

const verDatos = () => {
console.log(datos)
return false;
}


