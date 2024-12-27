document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting me!');
    // Here you would typically handle the form submission to a server or email service
    document.getElementById('contact-form').reset();
});
