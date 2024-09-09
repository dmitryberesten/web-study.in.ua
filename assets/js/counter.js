document.addEventListener("DOMContentLoaded", () => {
  // Функція для анімації чисел
  function animateCount(element, start, end, duration) {
    let startTime = null;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = end.toString().includes("%") ? `${value}%` : value;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // Перевірка, чи елемент у полі видимості
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Запускаємо анімацію при скролі до елементів
  function handleScroll() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const endValue = parseFloat(counter.textContent.replace("%", ""));
      if (
        isElementInViewport(counter) &&
        !counter.classList.contains("animated")
      ) {
        animateCount(counter, 0, endValue, 4000); // 2000 мс для анімації
        counter.classList.add("animated"); // Щоб не запускати анімацію повторно
      }
    });
  }

  // Додаємо обробник події скролу
  window.addEventListener("scroll", handleScroll);
});
