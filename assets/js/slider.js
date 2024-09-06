let slideIndex = 0;
let autoSlide;
const slider = document.getElementById("testimonial-slider");
const slides = document.querySelectorAll(".testimonial");

// Автоматичне перемикання слайдів
function startSlider() {
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
}

// Зупинка слайдера при наведенні
slider.addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});

slider.addEventListener("mouseout", () => {
  startSlider();
});

// Перемикання на наступний слайд
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
}

// Перемикання на попередній слайд
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Оновлення позиції слайдера
function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Запуск слайдера
startSlider();
