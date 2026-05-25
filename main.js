// Navbar start
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

// Функция переключения класса активного меню
const toggleMenu = () => {
  if (menu) {
    menu.classList.toggle("active");
  }
};

// Обработчик скролла для липкого navbar
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
}

// Обработчики для кнопок меню
if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
}
if (closeBtn) {
  closeBtn.addEventListener("click", toggleMenu);
}

// Обработчики для ссылок меню
if (menu) {
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
}

// Navbar finish

//FAQ start
function ToggleAccordion(accordionId) {
  const accordionItem = document.getElementById(accordionId);
  const answer = accordionItem.querySelector(".answer");
  const arrow = accordionItem.querySelector(".fas");
  const isActive = accordionItem.classList.toggle("active");

  answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : "0";
  arrow.className = isActive ? "fas fa-minus" : "fas fa-plus";
}
//FAQ finish

