// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
document.addEventListener('animationstart', () => {});
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
  });
  obs.observe(el);
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  alert('Message sent! I will get back to you soon.');
  e.target.reset();
}
