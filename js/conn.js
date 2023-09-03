let regexName = /^[a-zA-Z]{2,}(\s[a-z]{2,})?[^0-9]$/
let regexPhone = /^(002)?01[0125]{1}[0-9]{8}$/
let regexEmail = /^\w{5,}@{1}\w{1,12}\.com$/
let regexAge = /^[1-9]{1}[0-9]{1}$/
let regexPass = /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
let userNameV = document.querySelector("#userNameV")
let userEmailV = document.querySelector("#userEmailV")
let userPhoneV = document.querySelector("#userPhoneV")
let userAgeV = document.querySelector("#userAgeV")
let userPassV = document.querySelector("#userPassV")
let userPass2V = document.querySelector("#userPass2V")

let flag = false

userNameV.addEventListener("keyup", function () {
    validation(regexName, userName, userNameV)
})
userEmailV.addEventListener("keyup", function () {
    validation(regexEmail, userEmail, userEmailV)
})
userPhoneV.addEventListener("keyup", function () {
    validation(regexPhone, userPhone, userPhoneV)
})
userAgeV.addEventListener("keyup", function () {
    validation(regexAge, userAge, userAgeV)
})
userPassV.addEventListener("keyup", function () {
    validation(regexPass, userPass, userPassV)
})
userPass2V.addEventListener("keyup", function () {
    if (userPass2.value == userPass.value) {
        userPass2V.classList.add("d-none")
        flag = true
    }
    else {
        userPass2V.classList.remove("d-none")
        flag = false
    }
})

btnSubmit.addEventListener("click",function(){

})
function validation(regex,input,inputv){
    if(regex.test(input.value)==true){
        inputv.classList.add("d-none")
        flag = true
    }
    else{
        inputv.classList.remove("d-none")
        flag = false
    }
}

document.querySelector(".height100").addEventListener("keyup",function(){
    if((userName.value && userEmail.value && userPhone.value && userAge.value && userPass.value && userPass2.value!="")&& flag == true){
        btnSubmit.classList.remove("disabled")
        console.log(true);
        console.log(flag);
    }
    else{
        btnSubmit.classList.add("disabled")
        console.log(false);
        console.log(flag);
    }
})
