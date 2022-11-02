const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector("#pwd");
// Set the variables as togglePassword and password to refer them in the event listner

// On the evt that the user clicks the icon, it will switch the type to text instead of password
// Helps make text visible.
togglePassword.addEventListener("click", function() {
    // Set the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password"; 
    password.setAttribute("type", type);

    // toggle icon
    this.classList.toggle("bi-eye");
})