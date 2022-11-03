// Grab variables to modify.
const togglePassword = document.querySelector("#eye-one");
const password = document.querySelector("#pwd");


/**
 * On the event that a user tries to click the eye icon, it triggers the function.
 */
togglePassword.addEventListener("click", function() {
    // If the type is password, then set it to text, otherwise, set it to password.
    const type = password.getAttribute("type") === "password" ? "text" : "password"; 
    password.setAttribute("type", type);

    // toggle icon
    this.classList.toggle("bi-eye-slash-fill");
});

