document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const leftButton = carousel.querySelector('.carousel-button.left');
      const rightButton = carousel.querySelector('.carousel-button.right');
      let currentPosition = 0;
      const slideItem = carousel.querySelector('.carousel-item');
      const slideWidth = slideItem ? slideItem.offsetWidth + parseInt(getComputedStyle(slideItem).marginRight) : 320;
      rightButton.addEventListener('click', function() {
        const trackContainer = carousel.querySelector('.carousel-track-container');
        const maxScroll = track.scrollWidth - trackContainer.offsetWidth;
        currentPosition -= slideWidth;
        if (Math.abs(currentPosition) > maxScroll) {
          currentPosition = -maxScroll;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
      });
      leftButton.addEventListener('click', function() {
        currentPosition += slideWidth;
        if (currentPosition > 0) {
          currentPosition = 0;
        }
        track.style.transform = `translateX(${currentPosition}px)`;
      });
    });
  });
  