document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const passwordError = document.getElementById('passwordError');
    
    // Password validation
    if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match';
        return;
    } else {
        passwordError.textContent = '';
    }

    // Email validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate sending validation email
    sendValidationEmail(email);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendValidationEmail(email) {
    // In a real implementation, you would make an API call to your backend here
    // This is just a simulation
    alert(`Validation email sent to ${email}. Please check your inbox.`);
    
    // Clear form
    document.getElementById('registrationForm').reset();
    
    // Redirect to login page after 3 seconds (simulation)
    setTimeout(() => {
        window.location.href = '#';
    }, 3000);
}