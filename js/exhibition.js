const sliderx = document.querySelector(".features__slider");
console.log(sliderx);
const prevBtn = document.querySelector(".features__arrow--prev");
const nextBtn = document.querySelector(".features__arrow--next");

const getScrollAmount = () => {
  const card = sliderx.querySelector(".feature-card");

  const gap = parseFloat(getComputedStyle(sliderx).gap);

  return card.offsetWidth + gap;
};

nextBtn.addEventListener("click", () => {
  sliderx.scrollBy({
    left: getScrollAmount(),

    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  sliderx.scrollBy({
    left: -getScrollAmount(),

    behavior: "smooth",
  });
});
