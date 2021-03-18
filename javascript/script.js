function validateEmail() {

    let email = document.querySelector(".form__input").value;
    let errorEmpty = document.querySelector(".--empty");
    let errorWrong = document.querySelector(".--wrong");

    // Check for empty fields
    if(email != "") {
        errorEmpty.classList.add("--hidden");

        // Validate email format
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+) *$/.test(email)) {
            errorWrong.classList.add("--hidden");
        } else {
            errorWrong.classList.remove("--hidden");
        }
        
    } else {
        errorEmpty.classList.remove("--hidden");
        errorWrong.classList.add("--hidden");
    }
}

let button = document.querySelector(".form__button");
button.addEventListener("click", validateEmail);

let input = document.querySelector(".form__input");
// Validate email when "Enter" key is pressed
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        // Cancel the default action
        event.preventDefault();
        // Validate email
        validateEmail();
    }
});