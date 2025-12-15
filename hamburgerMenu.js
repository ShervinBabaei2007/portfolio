const hamburgerButton = document.getElementById('hamburger');
const navigationMenu = document.querySelector('.navMenu');

if (hamburgerButton && navigationMenu) {
  hamburgerButton.addEventListener('click', () => {
    const menuIsOpen = navigationMenu.classList.toggle('active');

    if (menuIsOpen) {
      hamburgerButton.textContent = '✕';
      hamburgerButton.setAttribute('aria-expanded', 'true');
    } else {
      hamburgerButton.textContent = '☰';
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
  });

  navigationMenu.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'A') {
      navigationMenu.classList.remove('active');
      hamburgerButton.textContent = '☰';
      hamburgerButton.setAttribute('aria-expanded', 'false');
    }
  });
}
