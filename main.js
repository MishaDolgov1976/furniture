document.addEventListener('DOMContentLoaded', () => {
  // --- Аккордеон FAQ ---
  function ToggleAccordion(id) {
    const item = document.getElementById(id);
    if (!item) return;

    const answer = item.querySelector('.answer');
    const icon = item.querySelector('.accordion-link i');
    const isOpen = answer.style.maxHeight !== '0px';

    // Сначала закрываем все
    document.querySelectorAll('.accordion-item').forEach(el => {
      const a = el.querySelector('.answer');
      const i = el.querySelector('.accordion-link i');
      a.style.maxHeight = '0px';
      i.classList.remove('fa-minus');
      i.classList.add('fa-plus');
    });

    // Потом открываем нужный, если был закрыт
    if (!isOpen) {
      setTimeout(() => {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }, 50);
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  }

  // Навешиваем обработчики на все аккордеоны
  document.querySelectorAll('[onclick^="ToggleAccordion"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('onclick').match(/ToggleAccordion\('([^']+)'\)/)[1];
      ToggleAccordion(id);
    });
  });

  // --- Мобильное меню ---
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const menu = document.querySelector('.menu');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.add('active');
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  }

  // --- Липкая шапка ---
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }
});






















// // Navbar start
// const navbar = document.getElementById("navbar");
// const menu = document.querySelector(".menu");
// const menuBtn = document.querySelector(".menu-btn");
// const closeBtn = document.querySelector(".close-btn");

// // Функция переключения класса активного меню
// const toggleMenu = () => {
//   if (menu) {
//     menu.classList.toggle("active");
//   }
// };

// // Обработчик скролла для липкого navbar
// if (navbar) {
//   window.addEventListener("scroll", () => {
//     navbar.classList.toggle("sticky", window.scrollY > 0);
//   });
// }

// // Обработчики для кнопок меню
// if (menuBtn) {
//   menuBtn.addEventListener("click", toggleMenu);
// }
// if (closeBtn) {
//   closeBtn.addEventListener("click", toggleMenu);
// }

// // Обработчики для ссылок меню
// if (menu) {
//   const menuLinks = menu.querySelectorAll("a");
//   menuLinks.forEach((link) => {
//     link.addEventListener("click", toggleMenu);
//   });
// }

// // Navbar finish

// //FAQ start
// function ToggleAccordion(accordionId) {
//   const accordionItem = document.getElementById(accordionId);
//   const answer = accordionItem.querySelector(".answer");
//   const arrow = accordionItem.querySelector(".fas");
//   const isActive = accordionItem.classList.toggle("active");

//   answer.style.maxHeight = isActive ? answer.scrollHeight + "px" : "0";
//   arrow.className = isActive ? "fas fa-minus" : "fas fa-plus";
// }
// //FAQ finish

