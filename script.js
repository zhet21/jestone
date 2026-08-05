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
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (formStatus) {
      formStatus.textContent = 'Sending your message...';
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        contactForm.reset();
        if (formStatus) {
          formStatus.textContent = 'Your message was sent successfully.';
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = 'Something went wrong. Please try again or contact me directly at albertojestone1@gmail.com.';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    }
  });
}
