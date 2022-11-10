
const calculator =() => {
    var numeroA = document.getElementById('numeroA').value;
    var numeroB = document.getElementById('numeroB').value;
    var select = document.getElementById('select').value;



    if (numeroA == '' || numeroB == '' || select == '0') {
        alert('debe diligenciar todos los campos');
        return false;
    }

    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert('los datos deben ser numericos');
        return false;
    }


    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);
    select = parseInt(select);

    var suma = numeroA+numeroB;
    var resta = numeroA-numeroB;
    var multiplicacion = numeroA*numeroB;
    var division = numeroA/numeroB;

    // if (select == '1') {
    //     alert(suma);
    // } else if (select == '2') {
    //     alert(resta);
    // } else if (select == '3') {
    //     alert(multiplicacion);
    // } else {
    //     alert(division);
    // }

    switch(select){
        case 1 : alert(suma)
        break;
        case 2 : alert(resta)
        break;
        case 3 : alert(multiplicacion)
        break;
        default : alert(division)
        break;
    }
}