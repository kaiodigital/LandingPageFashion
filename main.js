const showMenu = (toggle, menu) => {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');

  if (toggle && menu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      console.log('show')
    });
  }
};
showMenu('.nav__toggle', '.nav__menu');
