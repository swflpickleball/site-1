
<script>
    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form inputs (you can add more validation)
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // You can perform additional validation here (e.g., email format)

        // Simulate form submission (replace with actual form submission code)
        alert(`Thank you, ${name}! Your message has been submitted.\n\nEmail: ${email}\nMessage: ${message}`);

        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }

    // Add a submit event listener to the form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
</script>
