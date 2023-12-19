// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  const form = document.getElementById('myForm');

  // Add an event listener for form submission
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Call the validateForm function to perform validation
    validateForm();
  });

  // Function to validate the form
  function validateForm() {
    // Get form fields
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous errors
    document.getElementById('errorContainer').innerHTML = '';

    // Check validation criteria
    if (fullName.length < 5) {
      displayError('Full Name must be at least 5 characters');
    }

    if (!email.includes('@')) {
      displayError('Enter a correct Email ID');
    }

    if (phone.length !== 10 || phone === '123456789') {
      displayError('Enter a valid Phone Number');
    }

    if (password === 'password' || password.length < 8 || password.toLowerCase() === fullName.toLowerCase()) {
      displayError('Password is not strong enough');
    }

    if (password !== confirmPassword) {
      displayError('Passwords do not match');
    }

    // If there are no errors, submit the form
    if (document.getElementById('errorContainer').innerHTML === '') {
      alert('Form submitted successfully!');
      // You can also use form.submit() to submit the form programmatically
    }
  }

  // Function to display errors
  function displayError(message) {
    const errorContainer = document.getElementById('errorContainer');
    const errorParagraph = document.createElement('p');
    errorParagraph.textContent = message;
    errorContainer.appendChild(errorParagraph);
  }
});
