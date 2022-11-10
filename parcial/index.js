const login = () => {
    var plaque = document.getElementById('plaque').value;
    brand = document.getElementById('brand').value,
        model = document.getElementById('model').value,
        color = document.getElementById('color').value,
        userName = document.getElementById('userName').value,
        userId = document.getElementById('userId').value,
        hIn = document.getElementById('hIn').value,
        hOut = document.getElementById('hOut').value,
        remark = document.getElementById('remark').value,
        registration = {
            plaque: plaque,
            brand: brand,
            model: model,
            color: color,
            userName: userName,
            userId: userId,
            hIn: hIn,
            hOut: hOut,
            remark: remark
        };
    if (!plaque || brand == 0 || !model || !color || !userName || !userId || !model || !hIn || !remark) {
        alert('Debe diligenciar todos los campos')
        return false;
    } else if (plaque.length > 6) {
        alert('La placa solo puede conterner maximo 6 caracteres')
        return false;
    } else if (isNaN(model) || isNaN(userId) || !isNaN(userName)) {
        alert('El dato modelo y cedula solo pueden ser numericos, El campo nombre del propietario no puede contener numeros')
        return false;
    } else {
        var parking = JSON.parse(localStorage.getItem('ingresos')) || [];
        parking.push(registration);
        localStorageDato = JSON.stringify(parking);
        localStorage.setItem('ingresos', localStorageDato);
    }


}

const showDatos = () => {
    var localStorageDato = JSON.parse(localStorage.getItem('ingresos'));
    console.log(localStorageDato);
    return false;
}

const deleteDato = () => {
    var localStorageDato = JSON.parse(localStorage.getItem('ingresos')),
        dropPlaque = document.getElementById('dropPlaque').value,
        hOut = document.getElementById('hOut').value;
        if (!dropPlaque || !hOut) {
            alert('debe diligenciar todos los datos')
            return false;
        }
    localStorageDato.filter((car) => {
        if (car.plaque == dropPlaque) {
            car.hOut = hOut
        };
        var saveDato = JSON.stringify(localStorageDato);
        localStorage.setItem('ingresos', saveDato);
    })


}
