// togglePassword to refer to the actual icon
// password to refer to the actual input field
const togglePassword = document.querySelector("#eye-one");
const password = document.querySelector("#pwd");


// On the evt that the user clicks the icon, it will switch the type to text instead of password
// Helps make text visible.
togglePassword.addEventListener("click", function() {
    // Set the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password"; 
    password.setAttribute("type", type);

    // toggle icon
    this.classList.toggle("bi-eye");
});

