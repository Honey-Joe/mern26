const email = document.getElementById("email")
const password = document.getElementById("password")
const loginForm = document.getElementById("login")
const emailErr = document.getElementById("emailErr")
const passErr = document.getElementById("passErr")
  
loginForm.addEventListener("submit" , (e)=>{

    e.preventDefault();
    // console.dir(email);
    console.log(email.value , password.value)
    advancedValdation(email.value , password.value);

})

const advancedValdation = (email , password)=>{

    let emailRegex = /^\S+@\S+\.\S+$/
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-,]).{8,}$/

    if(email.match(emailRegex)){
        console.log("Valid Email")
        emailErr.innerHTML = " "
    }else{
        emailErr.innerHTML = "Invalid Mail id"
    }

    if(password.match(passwordRegex)){
        console.log("Valid Password")
        passErr.innerHTML = " "
    }else{
        console.log("Invalid Password")
        passErr.innerHTML = "Password must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    }
}

//basic validation 

// advanced validation