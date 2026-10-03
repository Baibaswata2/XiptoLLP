// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

// Contact form: opens the visitor's email app addressed to Xipto (no backend needed on Vercel)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent(d.get('subject') || 'Enquiry from the Xipto website');
    const body = encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`);
    window.location.href = `mailto:xiptofficial@gmail.com?subject=${subject}&body=${body}`;
  });
}
