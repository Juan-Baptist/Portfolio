// Initialise EmailJS avec ton User ID
(function(){
    emailjs.init("nG1aD80D3uk68e2x_"); // Remplacez par votre User ID EmailJS
})();

// Gérer la soumission du formulaire
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Envoi du message
    emailjs.sendForm('service_werzcj5', 'template_4geffcq', this)
        .then(function() {
            document.getElementById("form-result").innerHTML = "Message envoyé avec succès !";
        }, function(error) {
            document.getElementById("form-result").innerHTML = "Échec de l'envoi du message. Réessayez.";
            console.log('Erreur:', error);
        });
});
