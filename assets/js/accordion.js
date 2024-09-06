document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.display = "none";
        otherItem.querySelector(".arrow").innerHTML =
          '<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>';
      });

      if (!isOpen) {
        item.classList.add("active");
        content.style.display = "block";
        title.querySelector(".arrow").innerHTML =
          '<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 15l5-5 5 5z"/></svg>';
      }
    });
  });
});
