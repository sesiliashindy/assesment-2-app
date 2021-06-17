
function validateLogin(){
    var e_email = document.getElementById("email");
    var e_password = document.getElementById("password");

    var email = document.forms["login"]["email"].value;
    var password = document.forms["login"]["password"].value;

    if (email === "admin@gmail.com" && password === "12345"){
        document.forms["login"]["role"].value = "admin"
    } else if (email === "user@gmail.com" && password === "12345"){
        document.forms["login"]["role"].value = "user"
    } else if (email === "admin@gmail.com" || email === "user@gmail.com") {
        e_password.style.borderColor = "red";
        return false;
    } else {
        e_email.style.borderColor = "red";
        e_password.style.borderColor = "red";
        return false;
    }
}




