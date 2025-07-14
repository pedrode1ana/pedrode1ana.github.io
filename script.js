window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  let position = 0;
  const imgWidth = 320;

  function moveLeft() {
    position += imgWidth;
    if (position > 0) position = 0;
    track.style.transform = `translateX(${position}px)`;
  }

  function moveRight() {
    const maxScroll = -(track.scrollWidth - track.parentElement.offsetWidth);
    position -= imgWidth;
    if (position < maxScroll) position = maxScroll;
    track.style.transform = `translateX(${position}px)`;
  }

  leftBtn.addEventListener("click", moveLeft);
  rightBtn.addEventListener("click", moveRight);

  setInterval(() => {
    moveRight();
  }, 4000);
});
