document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const resultDiv = document.getElementById('form-result');
    resultDiv.innerHTML = `<p>Merci ${name}, votre message a été envoyé avec succès !</p>`;
    
    // Réinitialise le formulaire
    this.reset();
});
