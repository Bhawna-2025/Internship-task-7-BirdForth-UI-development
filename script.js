const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2000, // 2 seconds
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const title = item.querySelector(".faq-title");
    const icon = item.querySelector(".faq-icon");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isHidden = answer.classList.contains("hidden");

        // Close all other items (optional/smooth behavior matching screenshot)
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherAnswer = otherItem.querySelector(".faq-answer");
            const otherTitle = otherItem.querySelector(".faq-title");
            const otherIcon = otherItem.querySelector(".faq-icon");

            if (otherAnswer && !otherAnswer.classList.contains("hidden")) {
              otherAnswer.classList.add("hidden");
              if (otherTitle) {
                otherTitle.classList.remove("text-[#A18E5A]");
                otherTitle.classList.add("text-[#111111]");
              }
              if (otherIcon) otherIcon.textContent = "+";
            }
          }
        });

        // Toggle current item
        if (isHidden) {
          answer.classList.remove("hidden");
          if (title) {
            title.classList.remove("text-[#111111]");
            title.classList.add("text-[#A18E5A]");
          }
          if (icon) icon.textContent = "−";
        } else {
          answer.classList.add("hidden");
          if (title) {
            title.classList.remove("text-[#A18E5A]");
            title.classList.add("text-[#111111]");
          }
          if (icon) icon.textContent = "+";
        }
      });
    }
  });
});

