document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      
      const message = document.getElementById('message').value;
      
      emailjs.send('service_vue1kj6', 'template_sv2o9h6', {
        message: message
      })
      .then(function(response) {
        formStatus.innerHTML = '<p class="success-message">¡Mensaje enviado con éxito!</p>';
        contactForm.reset();
      }, function(error) {
        formStatus.innerHTML = '<p class="error-message">Error al enviar el mensaje. Por favor, intenta de nuevo.</p>';
        console.error('Error:', error);
      });
    });
  }
});
