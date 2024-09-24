document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending the message (you can replace this with actual email sending logic)
    const responseDiv = document.getElementById('formResponse');
    responseDiv.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseDiv.style.color = 'green';

    // Clear the form
    this.reset();
});
