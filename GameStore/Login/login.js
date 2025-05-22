document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm")
    const loginButton = document.getElementById("loginButton")

    loginButton.addEventListener("click", function(e) {
        e.preventDefault();

        const userEmailInput = document.getElementById("userEmail")
        const passwordInput = document.getElementById("password")

        let isValid = true;

        if (userEmailInput.value.trim() === "") {
            setError(userEmailInput, "El usuario o correo electrónico es obligatorio.")
            isValid = false;
        } else {
            clearError(userEmailInput)    
        }

        const passwordValue = passwordInput.value.trim()

        if (passwordValue === "") {
            setError(passwordInput,"La contraseña es obligatoria.")
            isValid = false;
        } else {
            clearError(passwordInput)
        }

        if(isValid) {
            alert("Sesión Iniciada")
            form.reset()
            [userEmailInput, passwordInput].forEach(clearError)
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