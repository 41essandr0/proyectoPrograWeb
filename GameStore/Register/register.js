document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm")
    const registerButton = document.getElementById("registerButton")

    registerButton.addEventListener("click", function(e) {
        e.preventDefault();

        const emailInput = document.getElementById("email")
        const passwordInput = document.getElementById("password")
        const usernameInput = document.getElementById("username")

        let isValid = true;

        if (emailInput.value.trim() === "") {
            setError(emailInput, "Este campo es obligatorio.")
            isValid = false;
        } else {
            clearError(emailInput)    
        }

        if (usernameInput === "") {
            setError(usernameInput,"Este campo es obligatorio.")
            isValid = false;
        } else {
            clearError(usernameInput)
        }

        const passwordValue = passwordInput.value.trim()

        if (passwordValue === "") {
            setError(passwordInput,"Este campo es obligatorio.")
            isValid = false;
        } else {
            clearError(passwordInput)
        }

        if(isValid) {
            alert("¡Cuenta creada con éxito! Te hemos enviado un correo de confirmación.")
            form.reset()
            [emailInput, usernameInput, passwordInput].forEach(clearError)
        }
    })

    function setError(input, message) {
      input.classList.add("is-invalid");
      const errorContainer = document.getElementById(`${input.id}Error`);
      errorContainer.textContent = message;
    }

    function clearError(input) {
      input.classList.remove("is-invalid");
      const errorContainer = document.getElementById(`${input.id}Error`);
      errorContainer.textContent = "";
    }
})


