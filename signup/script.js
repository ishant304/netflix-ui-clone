let input = document.querySelector("#input");
let label = document.querySelector("#inputLabel");
let signIn = document.querySelector("#signIn");
let signUp = document.querySelector("#signUp");
let emailName = document.querySelector("#emailName");
let inputWrapper = document.querySelector("#inputWrapper");
let forgot = document.querySelector("#forgot");
let passRegex = /^.{8,}$/ ;

emailName.textContent = sessionStorage.getItem('tempEmail');

input.addEventListener("focus", function () {

    label.classList.add("float");

});

input.addEventListener("blur", function () {
    if (input.value.trim() === "") {
        label.classList.remove("float");
}
});

signIn.addEventListener("click",function(){
    window.location.href = "/login/";
})

input.addEventListener("input",function(){

    if(input.value.trim() === ""){
        input.style.borderColor = "rgb(235, 57, 66)";
        inputWrapper.style.marginBottom = "0.5rem";
        forgot.style.marginTop = "1.5rem"
        invalidText.textContent = "Password is required";
        invalid.style.display = "initial";

    }
    else if(!passRegex.test(input.value)){
        input.style.borderColor = "rgb(235, 57, 66)";
        inputWrapper.style.marginBottom = "0.5rem";
        forgot.style.marginTop = "1.5rem"
        invalidText.textContent = "Please enter a valid password";
        invalid.style.display = "initial";
    }
    else{
        input.style.borderColor = "rgb(43, 184, 113)";
        inputWrapper.style.marginBottom = "1.5rem";
        forgot.style.marginTop = "0rem"
        invalid.style.display = "none";
    }

})

signUp.addEventListener("click",function(dets){
    dets.preventDefault();

    if(passRegex.test(input.value) && input.value.trim !== ""){

        const storedEmail = sessionStorage.getItem('tempEmail');
        const storedPassword = input.value;
        
        let users = JSON.parse(localStorage.getItem('users')) || [];

        users.push({email: storedEmail,pass: storedPassword});

        localStorage.setItem('users',JSON.stringify(users));

        alert("Sign up successfull");

        window.location.href = "login/"
    }
})

