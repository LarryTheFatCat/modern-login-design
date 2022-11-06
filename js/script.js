
// Grab variables to modify.
const email = document.getElementById("signup");
const button = document.getElementById("btn");
const togglePassword = document.getElementById("eye-one");
const password = document.getElementById("pwd");
const sendResetPwd = document.getElementById("noEmailPwd");
const checkBox = document.querySelector('#checkbox');

function check() {
    let email = document.getElementById("signup");
    let password = document.getElementById("pwd");
    let validation;
    let re = /\S+@\S+\.\S+/;
    
    validation = re.test(email.value);
    console.log(validation);
    if(validation === true) {  
        email.setAttribute('style', 'border: 3px solid #4f7df3;');
        password.setAttribute('style', 'border: 3px solid #4f7df3;');
    } else {
        email.setAttribute('style', 'border: 3px solid #ff5263;');
        password.setAttribute('style', 'border: 3px solid #ff5263;');
    }

    if(password.toString().length < 8 || password.value === "") {
        password.setAttribute('style', 'border: 3px solid #ff5263;');
    } else {
        password.setAttribute('style', 'border: 3px solid #4f7df3;');
    }
}

/**
* On the event that a user tries to click the eye icon, it triggers the function.
* */
togglePassword.addEventListener("click", function() {
    // If the type is password, then set it to text, otherwise, set it to password.
    const type = password.getAttribute("type") === "password" ? "text" : "password"; 
    password.setAttribute("type", type);
    // toggle icon
    this.classList.toggle("bi-eye-slash-fill");
});

  document.addEventListener('change', () => {
    // Change theme to black
    if (checkBox.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});