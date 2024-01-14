const signUpPage = document.getElementById("Sign-up");
const loginPage = document.getElementById("Login");

const formTitle = document.getElementById("form-title");

const usernameGroup = document.getElementById("username-group");

const userNameele = document.getElementById("username");
const emailele = document.getElementById("email");
const passwordele = document.getElementById("password");
const showPasswordele = document.getElementById("show-pass");

const accountAlert = document.getElementById("account-reply");
const submitBtn = document.getElementById("submit-btn");

const forgertPassword = document.getElementById("forget-password");

const haveAccount = document.getElementById("have-account");
const noAccount = document.getElementById("no-account");

function hasWhiteSpace(s) {
    return (/\s/).test(s);
  }

  function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    return (false)
}
  function resetInput(){
    userNameele.value = "";
    passwordele.value = "";
    emailele.value = "";
  }

  function validPassword(password){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.?&])[A-Za-z\d@$!.%*?&]{8,}$/;
    return regex.test(password);
  }

  function displayAlert(message, time){
    accountAlert.style.display = "block";
    accountAlert.innerText = `${message}`;
    setTimeout(() => {
        accountAlert.innerText = "";
        accountAlert.style.display = "none";
        resetInput();
    }, time);
  }

haveAccount.onclick = () => {
forgertPassword.style.display = "block"
  usernameGroup.style.display = "none";
  submitBtn.innerText = "Login";
  formTitle.innerText = "Login";
  haveAccount.style.display = "none";
  noAccount.style.display = "block";
  resetInput();
};

noAccount.onclick = () => {
    forgertPassword.style.display = "none"
    usernameGroup.style.display = "flex";
    submitBtn.innerText = "Sign Up";
    formTitle.innerText = "Sign Up";
    haveAccount.style.display = "block";
    noAccount.style.display = "none";
    resetInput();
};

showPasswordele.onclick = () => {
    let password = passwordele.value;
    if (passwordele.type === "password") {
        passwordele.type = "text";
        showPasswordele.innerHTML = '<i class="fa-solid fa-eye-slash fa-lg" style="color: #000000;"></i>';
        return;
    } else{
        passwordele.type = "password";
        showPasswordele.innerHTML = '<i class="fa-solid fa-eye fa-lg" style="color: #000000"></i>';
        return;
    }
};


submitBtn.onclick = () => {
    let username = userNameele.value;
    let email = emailele.value;
    let password = passwordele.value;

    if(hasWhiteSpace(username) || hasWhiteSpace(email) || !validPassword(username) || !ValidateEmail(email) ){
        displayAlert("Invalid username or password", 1000);
    }
}