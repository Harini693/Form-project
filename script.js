
// LOGIN VALIDATION

let loginForm = document.getElementById("loginForm");

loginForm.onsubmit = function(e) {

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("loginMsg");

    if (username === "Sathyabama" && password === "12345") {

        msg.innerHTML = "Valid Login!";
        msg.style.color = "green";

        setTimeout(function() {

            document.getElementById("loginPage").classList.add("hidden");

            document.getElementById("registrationPage").classList.remove("hidden");

        }, 700);

    }
    else {

        msg.innerHTML = "Invalid Username or Password!";
        msg.style.color = "red";

    }
};


// STUDENT REGISTRATION

let form = document.getElementById("myform");

form.onsubmit = function(e) {

    e.preventDefault();

    let age = Number(document.getElementById("age").value);
    let phone = document.getElementById("phone").value;

    if (age <= 0 || age >= 30) {

        alert("Age must be between 1 and 30");
        return;

    }

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Enter a valid 10 digit phone number");
        return;

    }

    document.getElementById("result").innerHTML =
        "Registration Successfully Completed!";

    

};
