const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  const category = btn.dataset.filter;
  projects.forEach(project => {
    project.style.display = category === 'all' || project.dataset.category === category ? '' : 'none';
  });
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const message =
    `Hi Sai Graphic Designs,%0A%0A` +
    `Name: ${encodeURIComponent(data.get('name'))}%0A` +
    `Phone: ${encodeURIComponent(data.get('phone'))}%0A` +
    `Email: ${encodeURIComponent(data.get('email') || '')}%0A` +
    `Service: ${encodeURIComponent(data.get('service'))}%0A` +
    `Message: ${encodeURIComponent(data.get('message') || '')}`;
  window.open(`https://wa.me/916381128781?text=${message}`, '_blank');
});
