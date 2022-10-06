const form = document.querySelector("form");
const email = document.getElementById("email");
const errorType = document.getElementById("error-type");
const regexp = /^\S+@\S+\.\S+$/;

email.addEventListener("invalid", () => {
    if (email.value == "") {
        errorType.innerHTML = "Oops! Please add your email !";
    } else if (regexp.test(email) == false ) {
        errorType.innerHTML = "Oops! Please check your email !";   
    }
})

email.addEventListener("input", () => {
    errorType.innerHTML = "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Your form has been submitted, Thank you for testing!")
    email.value = ""
});