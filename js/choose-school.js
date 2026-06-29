const slider = document.querySelector(".school-types__slider");
const cards = document.querySelectorAll(".school-card");

const pagination = document.querySelector(".school-types__pagination");

let dots = [];

function visibleCards() {
  return window.innerWidth <= 767 ? 1 : 2;
}

function pages() {
  return Math.ceil(cards.length / visibleCards());
}

/* -------------------------
   Create Pagination
------------------------- */

function createDots() {
  pagination.innerHTML = "";

  dots = [];

  for (let i = 0; i < pages(); i++) {
    const dot = document.createElement("button");

    dot.className = "school-types__dot";

    dot.addEventListener("click", () => {
      scrollToPage(i);
    });

    pagination.append(dot);

    dots.push(dot);
  }

  updateDots();
}

/* -------------------------
   Scroll
------------------------- */

function scrollToPage(page) {
  const cardWidth = cards[0].offsetWidth + 24;

  slider.scrollTo({
    left: page * visibleCards() * cardWidth,

    behavior: "smooth",
  });
}

/* -------------------------
   Dots
------------------------- */

function updateDots() {
  const cardWidth = cards[0].offsetWidth + 24;

  const page = Math.round(slider.scrollLeft / (cardWidth * visibleCards()));

  dots.forEach((dot) => dot.classList.remove("school-types__dot--active"));

  if (dots[page]) {
    dots[page].classList.add("school-types__dot--active");
  }
}

/* -------------------------
   Events
------------------------- */

slider.addEventListener("scroll", updateDots);

window.addEventListener("resize", createDots);

createDots();
