const form = document.querySelector("form");
const email = document.getElementById("email");
const error = document.getElementById("form-error");
const errorType = document.getElementById("error-type");
const regexp = /^\S+@\S+\.\S+$/;

email.addEventListener("invalid", () => {
    if (email.value == "") {
        errorType.innerHTML = "add";
    } else if (regexp.test(email) == false ) {
        errorType.innerHTML = "check";   
    }
    error.classList.remove("hide");
})

email.addEventListener("input", () => {
    error.classList.add("hide");
});

form.addEventListener("submit", (e) => {
    console.log(e)
    e.preventDefault()
     alert("Your form has been submitted, Thank you for testing!")
    email.value = ""
    error.classList.add("hide");
});