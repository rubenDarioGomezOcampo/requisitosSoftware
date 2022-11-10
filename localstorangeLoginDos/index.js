// localStorage.setItem("userName", "juanchito");
// localStorage.setItem("userPassword", "juanch1980*");
const login = () => {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var nameLocalStorage = localStorage.getItem('userName');
    var passwordLocalStorage = localStorage.getItem('userPassword');


    if (name == "" || password == "") {
        alert('campos vacios')
        return false;
    } else if (name == nameLocalStorage && password == passwordLocalStorage) {
        alert('entras')
        window.location = "https:/www.google.com"

    } else {
        alert('hay algo malo')
        return false;
    }

}
