const submenu = document.querySelector(".itens")
const menu = document.getElementById('navbar')

menu.addEventListener("click", function () {
    if (submenu) {
        // Alternar o estado do menu suspenso
        if (submenu.style.display === 'flex') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'flex';
        }
      }

})

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;
let slideInterval;

function startSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 8000);
}

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

next.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  startSlide();
});

prev.addEventListener('click', () => {
  clearInterval(slideInterval);
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  startSlide();
});

startSlide();


