const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const project = contactForm.querySelector('input[name="project"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    const subject = project ? `Portfolio Inquiry - ${project}` : 'Portfolio Inquiry';
    const body = `Name: ${name}\nEmail: ${email}\nProject: ${project || 'Not specified'}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:albertojestone1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (formStatus) {
      formStatus.textContent = 'Preparing your message...';
    }

    const newWindow = window.open(mailtoUrl, '_blank');

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = mailtoUrl;
    } else if (formStatus) {
      formStatus.textContent = 'Your email app should open with your message ready.';
    }
  });
}
