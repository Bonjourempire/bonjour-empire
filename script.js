document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
const form = document.querySelector('#contact-form');
if (form) {
  const params = new URLSearchParams(location.search);
  const subject = document.querySelector('#objet');
  if (subject && params.has('objet')) subject.value = params.get('objet');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const body = `Nom : ${data.get('nom')}\nE-mail : ${data.get('email')}\n\n${data.get('message')}`;
    location.href = `mailto:bonjourempire866@gmail.com?subject=${encodeURIComponent(data.get('objet') || 'Message depuis le site Bonjour Empire')}&body=${encodeURIComponent(body)}`;
  });
}