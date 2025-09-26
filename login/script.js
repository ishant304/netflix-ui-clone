let signUp = document.querySelector("#signUp")
let emailLabel = document.querySelector("#emailLabel");
let email = document.querySelector("#email");
let passwordLabel = document.querySelector("#passwordLabel");
let password = document.querySelector("#password");
let signIn = document.querySelector("#signInButton");
let form = document.querySelector("#form");
let invalidEmail = document.querySelector("#invalidEmail");
let invalidEmailText = document.querySelector("#invalidEmailText");
let invalidPass = document.querySelector("#invalidPass");
let invalidPassText = document.querySelector("#invalidPassText");


email.addEventListener("focus", function () {

    emailLabel.classList.add("float");

});

email.addEventListener("blur", function () {
    if (email.value.trim() === "") {
        emailLabel.classList.remove("float");
    }
});

password.addEventListener("focus", function () {

    passwordLabel.classList.add("float");

});

password.addEventListener("blur", function () {
    if (password.value.trim() === "") {
        passwordLabel.classList.remove("float");
    }
});

signUp.addEventListener("click", function () {
    window.location.href = "/index.html";
})

email.addEventListener("input", function () {

    if (email.value.trim() === "") {
        email.style.borderColor = "rgb(235, 57, 66)";
        invalidEmailText.textContent = "Email is required";
        invalidEmail.style.display = "initial";
    }
    else if (!emailValid(email.value)) {
        email.style.borderColor = "rgb(235, 57, 66)";
        invalidEmailText.textContent = "Email Address does not exist";
        invalidEmail.style.display = "initial";
    }
    else {
        email.style.borderColor = "rgb(43, 184, 113)";
        invalidEmail.style.display = "none";
    }


})

signIn.addEventListener("click", function (dets) {
    dets.preventDefault();

    if (emailValid(email.value) && email.value.trim() != "") {

        let users = JSON.parse(localStorage.getItem('users')) || [];

        let target = null;

        for (let i = 0; i < users.length; i++) {
            if (email.value === users[i].email) {
                target = i;
                break;
            }
        }
        if (target !== null) {
            if (password.value === users[target].pass) {
                invalidPass.style.display = "none";
                password.style.borderColor = "rgb(43, 184, 113)";
                setTimeout(() => {
                    alert("Sign in successful");
                    window.location.href = "/index.html";
                }, 500);
            } else {
                invalidPass.style.display = "initial";
                password.style.borderColor = "rgb(235, 57, 66)";
            }
        } else {
            alert("Email not found. Please sign up first.");
            email.style.borderColor = "rgb(235, 57, 66)";
        }
    }
})




function emailValid(emailValue) {

    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
        if (emailValue === users[i].email) {
            return true;
        }
    }

    return false;
}