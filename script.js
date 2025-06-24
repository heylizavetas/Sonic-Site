// Simple form handler that just shows a message and clears form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // You can add email sending logic here (e.g. with Formspree, Netlify Forms, or your backend)

  document.getElementById('formStatus').textContent = "Thank you for your message! We'll get back to you soon.";
  
  // Reset form
  this.reset();
});
