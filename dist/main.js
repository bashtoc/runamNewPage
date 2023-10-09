let ham = false;

const menuIcon = document.getElementById('menu-icon');
const navBar = document.getElementById('nav-bar');
const menuShape = document.getElementById('menu-shape');
const navHeader = document.getElementById('nav-header');

let x = !menuIcon.getAttribute('aria-expanded');

const menuClassLists = [
  'duration-1000',
  'before:-rotate-45',
  'after:rotate-45',
  'before:-translate-x-[5px]',
  'before:translate-y-[1px]',
  'before:transition-transform',
  'after:-translate-x-[5px]',
  'after:-translate-y-[1px]',
  'after:scale-x-75',
  'before:scale-x-75',
  'after:transition-transform'
];

let prevScrollPos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  prevScrollPos > currentScrollPos
    ? (navHeader.style.display = 'flex')
    : (navHeader.style.display = 'none');
  prevScrollPos = currentScrollPos;
};

const setHam = () => {
  ham = !ham;
};

function menuToggle() {
  x = !x;
  menuIcon.setAttribute('aria-expanded', x);
  setHam();
  if (ham) {
    menuShape.classList.add(...menuClassLists);
    navBar.classList.remove('-translate-x-full');
  } else {
    menuShape.classList.remove(...menuClassLists);
    navBar.classList.add('-translate-x-full');
  }
}

menuIcon.addEventListener('click', menuToggle);
