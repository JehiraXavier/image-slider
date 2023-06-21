function Slider() {
  const carousel_slides = document.querySelectorAll(".slide");
  const previous_button = document.querySelector(".previous");
  const next_button = document.querySelector(".next");
  const dot_slide = document.querySelector(".dots-container");
  let current_slide = 0;

  const active_dot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  active_dot(current_slide);

  const change_slide = function (slides) {
    carousel_slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  change_slide(current_slide);

  next_button.addEventListener("click", function () {
    current_slide++;
    if (carousel_slides.length - 1 < current_slide) {
      current_slide = 0;
    }
    change_slide(current_slide);
    active_dot(current_slide);
  });
  previous_button.addEventListener("click", function () {
    current_slide--;
    if (0 >= current_slide) {
      current_slide = 0;
    }
    change_slide(current_slide);
    active_dot(current_slide);
  });

  dot_slide.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const slide = e.target.dataset.slide;
      change_slide(slide);
      active_dot(slide);
    }
  });
}
Slider();
