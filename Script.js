// mobile menu
  const burger = document.getElementById('burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav__mobile-panel a').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // fake form submit
  const form = document.getElementById('signupForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Отправляем...';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
    }, 650);
  });