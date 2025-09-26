let input = document.querySelector("#email");
let label = document.querySelector("#label");
let signIn = document.querySelector("#signIn");
let getStarted = document.querySelector("#getStarted");
let invalid = document.querySelector("#invalid")
let invalidText = document.querySelector("#invalidText");
let form = document.querySelector("#form");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


input.addEventListener("focus", function () {

    if (window.matchMedia("(max-width: 599px)").matches) {
        label.classList.add("floatMobile");
    }
    else {
        label.classList.add("float");
    }

});


input.addEventListener("blur", function () {

    if (window.matchMedia("(max-width: 599px)").matches) {
        if (input.value.trim() === "") {
            label.classList.remove("floatMobile");
        }
    }
    else {
        if (input.value.trim() === "") {
            label.classList.remove("float");
        }
    }
});

input.addEventListener("input",function(){

    if(input.value.trim() === ""){
        input.style.borderColor = "rgb(235, 57, 66)";
        invalidText.textContent = "Email is required";
        invalid.style.display = "initial";
    }
    else if(!emailRegex.test(input.value)){
        input.style.borderColor = "rgb(235, 57, 66)";
        invalidText.textContent = "Please enter a valid email address.";
        invalid.style.display = "initial";
    }
    else if (emailValid(input.value)) {
        email.style.borderColor = "rgb(235, 57, 66)";
        invalidText.textContent = "Email Address already exist";
        invalid.style.display = "initial";
    }
    
    else{
        input.style.borderColor = "rgb(43, 184, 113)";
        invalid.style.display = "none";
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

// input2.addEventListener("focus", function () {

//     if (window.matchMedia("(max-width: 599px)").matches) {
//         label2.classList.add("float2Mobile");
//     }
//     else {
//         label2.classList.add("float2");
//     }

// });

// input2.addEventListener("blur", function () {

//     if (window.matchMedia("(max-width: 599px)").matches) {
//         if (input2.value.trim() === "") {
//             label2.classList.remove("float2Mobile");
//         }
//     }
//     else {
//         if (input2.value.trim() === "") {
//             label2.classList.remove("float2");
//         }
//     }

// });


signIn.addEventListener("click", function () {
    window.location.href = "/netflix-ui-clone/login/";
});

getStarted.addEventListener("click",function(dets){

    dets.preventDefault();

    if(emailRegex.test(input.value) && input.value.trim !== ""  && !emailValid(input.value)){

        const email = input.value;
        sessionStorage.setItem('tempEmail',email);

        window.location.href = "/netflix-ui-clone/signup/";
    }
    else{
        input.focus();
    }

});