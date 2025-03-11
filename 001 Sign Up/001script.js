document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.querySelector('.subscription-form');
    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');
    const submitButton = document.querySelector('.button button');
    
    // Add error message elements
    function createErrorElement(inputId) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.id = `${inputId}-error`;
        return errorElement;
    }
    
    // Insert error elements after inputs
    const fnameError = createErrorElement('fname');
    const emailError = createErrorElement('email');
    
    fnameInput.insertAdjacentElement('afterend', fnameError);
    emailInput.insertAdjacentElement('afterend', emailError);
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add visual feedback for invalid inputs
    function markInvalid(input) {
        input.classList.add('error');
    }
    
    function clearInvalid(input) {
        input.classList.remove('error');
    }
    
    // Handle form submission
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        let isValid = true;
        
        // Clear previous error messages and styling
        fnameError.textContent = '';
        emailError.textContent = '';
        clearInvalid(fnameInput);
        clearInvalid(emailInput);
        
        // Validate first name
        if (!fnameInput.value.trim()) {
            fnameError.textContent = 'First name is required';
            markInvalid(fnameInput);
            isValid = false;
        }
        
        // Validate email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
            markInvalid(emailInput);
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            markInvalid(emailInput);
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            alert('Form submitted successfully!');
            // Uncomment the line below to actually submit the form
            // form.submit();
        }
    });
});