const password = document.getElementById("input-password")
const re_password = document.getElementById("input-re-entter-password")
const user = document.getElementById("input-user")

const one_upper = document.getElementById("one-upper")
const one_number = document.getElementById("one-number")
const one_special_characters = document.getElementById("one-special-characters")
const more_6 = document.getElementById("more-6")

let boolean_upper = false
let boolean_number = false
let boolean_special = false
let boolean_more = false
let boolean_repass = false

console.log(password.value)
password.addEventListener("keydown",()=>{
    if(password.value ==""){
        one_upper.style.opacity= 0.3
        one_upper.style.color = "black"
        one_number.style.opacity= 0.3
        one_number.style.color = "black"
        one_special_characters.style.opacity= 0.3
        one_special_characters.style.color = "black"
    }
    const retime = setInterval(check_pass,100)
})

/* check password */
function check_pass(e){
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if(password.value.length > 6){
        more_6.style.color = "green"
        more_6.style.opacity = 1
        boolean_more = true
    }else{
        more_6.style.color = "red"
        more_6.style.opacity = 0.8
        boolean_more = false
    }

    /* check upper */
    for(let i = 0;i<password.value.length;i++){
        if(password.value[i] >="A" && password.value[i]<="Z"){
            one_upper.style.color="green"
            one_upper.style.opacity= 1
            boolean_upper = true
            break;
        }else{
            one_upper.style.color="red"
            one_upper.style.opacity= 0.8
            boolean_upper = false
        }
    }

    /* check number */
    for(let i = 0;i<password.value.length;i++){
        if(password.value[i] >=0 && password.value[i]<=9){
            one_number.style.color="green"
            one_number.style.opacity= 1
            boolean_number = true
            break;
        }else{
            one_number.style.color="red"
            one_number.style.opacity= 0.8
            boolean_number = false
        }
    }

    /* check special_characters */
    for(let i = 0;i<password.value.length;i++){
        if( password.value[i].match(format) ){
            one_special_characters.style.color="green"
            one_special_characters.style.opacity= 1
            boolean_special = true
            break;
        }else{
            one_special_characters.style.color="red"
            one_special_characters.style.opacity= 0.8
            boolean_special = true
        }
    }
}

const repass = setInterval(repassword,1)

function repassword(){
    for(let i = 0;i<password.value.length;i++){
        if( password.value[i]==re_password.value[i]){
            re_password.style.color="green"
            boolean_repass = true
        }else{
            re_password.style.color="red"
            boolean_repass = false
        }
    }
}

const btn_submit = document.getElementById("input-submit")

btn_submit.addEventListener("click",()=>{
    if(boolean_number && boolean_special && boolean_upper && boolean_repass && boolean_more && user.value !=""){
        alert("Thank for your information") 
    }else{
        alert("ERROR")
    }
})