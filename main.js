function maFonction() {
    const navbar = document.querySelector('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      navbar.style.boxShadow = '0px 0px 8px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }

window.addEventListener('scroll', maFonction);