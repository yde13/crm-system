function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username != "Micke" || password != "Emmio") {


        if (username != "Micke"){
            alert("Invalid username");
        }
        else if (password != "Emmio"){
            alert("Invalid password");
        }

    }
    else {
        if (username == "Micke" && password == "Emmio")
        alert("Login successfully");
        window.location.href = "customers.html";

    }
}
