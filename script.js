// first page crousel
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
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
  speed: 1000,
});


// third page crousel
const swiper2 = new Swiper(".mySwiper2", {
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
    nextEl: "#supplier-next",
    prevEl: "#supplier-prev",
  },
  speed: 1000,
});

// fourth page crousel
const thumbnails = document.querySelectorAll(".pagination-thumb");

function updateActiveThumbnail(activeIndex) {
  thumbnails.forEach((thumb, idx) => {
    if (idx === activeIndex) {
      thumb.classList.remove("opacity-40");
      thumb.classList.add("opacity-100", "ring-2", "ring-[#A18E5A]");
    } else {
      thumb.classList.remove("opacity-100", "ring-2", "ring-[#A18E5A]");
      thumb.classList.add("opacity-40");
    }
  });
}

const swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#forth-next",
    prevEl: "#forth-prev",
  },
  speed: 1000,
  on: {
    init: function () {
      updateActiveThumbnail(this.realIndex);
    },
    slideChange: function () {
      updateActiveThumbnail(this.realIndex);
    },
  },
});

thumbnails.forEach((thumbnail, idx) => {
  thumbnail.addEventListener("click", () => {
    swiper3.slideToLoop(idx);
  });
});

// Terrace Room Fade Swiper
const terraceSwiper = new Swiper(".terraceSwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 900,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".terrace-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".terrace-button-next",
    prevEl: ".terrace-button-prev",
  },
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

