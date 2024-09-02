document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateEmail(emailInput.value)) {
            console.log('Submitting email:', emailInput.value);
            alert('Thank you for joining our waitlist!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});