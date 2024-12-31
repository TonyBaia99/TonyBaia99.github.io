const navbarToggle = document.getElementById('nav-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);

  if (isNavbarExpanded) {
        document.getElementById('nav-menu').classList.remove('hidden');
  } else {
        document.getElementById('nav-menu').classList.add('hidden');
  }
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);