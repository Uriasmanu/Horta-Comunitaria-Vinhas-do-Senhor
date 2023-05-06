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

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideIntervalTime = 2500; // tempo de intervalo em milissegundos

let slideInterval = setInterval(startSlide, slideIntervalTime);

function startSlide() {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = '0%'; // reinicia a barra de progresso
  currentSlide = (currentSlide + 1) % slides.length;
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function resetProgress() {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = '0%';
  clearInterval(slideInterval);
  slideInterval = setInterval(startSlide, slideIntervalTime);
}

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

next.addEventListener('click', () => {
  resetProgress(); // reinicia a barra de progresso
  startSlide();
});

prev.addEventListener('click', () => {
  resetProgress(); // reinicia a barra de progresso
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});

