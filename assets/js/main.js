const lightMoodToggler = document.querySelector('.lightMode');
const darkMoodToggler = document.querySelector('.darkMood');
const headerBar = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuToggler = document.querySelector('.menu-button');
const scrollToTopElem = document.querySelector('.scroll-top');
const startScrollEffect = 20;

// theme toggle 
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );
lightMoodToggler.addEventListener('click', () => {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.theme = "light";
});
darkMoodToggler.addEventListener('click',  () => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.theme = "dark";
});

// header background update
window.addEventListener('scroll', () => {
  if (window.scrollY <= startScrollEffect) {
    headerBar.classList.add('bg-transparent');
    if (headerBar.classList.contains('bg-white', 'dark:bg-black', 'shadow-lg')) {
      headerBar.classList.remove('bg-white', 'dark:bg-black', 'shadow-lg');
    };
  } else {
    headerBar.classList.add('bg-white', 'dark:bg-black', 'shadow-lg');
    if (headerBar.classList.contains('bg-transparent')) {
      headerBar.classList.remove('bg-transparent');
    };
  }
});

window.onscroll = function(e) {
  // header scroll function 
  if (window.scrollY >= startScrollEffect) {
    if (this.oldScroll < this.scrollY) {
      headerBar.classList.add('-translate-y-52');
    } else { 
      headerBar.classList.remove('-translate-y-52');
    }
    this.oldScroll = this.scrollY;
  };

  // scroll to top function
  if (window.scrollY > 600) {
    scrollToTopElem.classList.remove('translate-y-52');
    scrollToTopElem.addEventListener('click', () => {
      scrollTo(0, 0)
    });
  } else {
    scrollToTopElem.classList.add('translate-y-52');
  };
}

// menu controller
menuToggler.addEventListener('click', () => {
  document.documentElement.classList.toggle('overflow-y-hidden');
  menu.classList.toggle('-translate-y-[150%]');
  menu.classList.toggle('opacity-0')
  menuToggler.firstElementChild.classList.toggle('rotate-45');
  menuToggler.firstElementChild.classList.toggle('origin-[10%_10%]');
  menuToggler.firstElementChild.classList.toggle('mt-[4px]');
  menuToggler.children[1].classList.toggle('opacity-0');
  menuToggler.lastElementChild.classList.toggle('-rotate-45');
  menuToggler.lastElementChild.classList.toggle('origin-[10%_90%]');
  menuToggler.lastElementChild.classList.toggle('mt-[7px]');
  menuToggler.lastElementChild.classList.toggle('mt-[3px]');

  if (window.scrollY < startScrollEffect) {
      headerBar.classList.toggle('bg-white');
      headerBar.classList.toggle('dark:bg-black');
      headerBar.classList.toggle('shadow-lg');
      if (headerBar.classList.contains('bg-transparent')) {
        headerBar.classList.toggle('bg-transparent');
      };
  };
});