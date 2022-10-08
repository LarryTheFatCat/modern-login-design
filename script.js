function redirectAndCheck() {
    const email = document.getElementsByClassName("sign-up").value;
    const password = document.getElementsByClassName("password").value;
    const username = document.getElementsByClassName("username").value;
    const passwordconfirm = document.getElementsByClassName("password-confirm").value;
    // check if the contents are in email input and password input are empty
    if(!email || !password || !username || !passwordconfirm) {
        alert("Please fill in all the fields");
        return;
    }
    // check if email doesn't contain @ and .
    if(!email.includes("@") || !email.includes(".")) {
        alert("invalid email or password");
        return;
    }
    else {
        window.location.href = "index.html";
    }
    // check if the password length is less then 8
    if(password.length < 8) {
        alert("invalid email or password");
        return;
    }
    if(password !== passwordconfirm) {
        alert("passwords do not match");
        return;
    }
    grecaptcha.execute();
}

function sendEmail() {
    const email = document.getElementsByClassName("emailInput")[0].value;
    // check if the contents are in email input and password input are empty
    if(!email) {
        alert("Please fill in all the fields");
            return;
        }
        // check if email doesn't contain @ and .
        if(!email.includes("@") || !email.includes(".")) {
            alert("invalid email or password");
            return;
        }
    }