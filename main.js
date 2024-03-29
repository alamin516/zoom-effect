document.addEventListener("DOMContentLoaded", function () {
  const zoomElement = document.querySelector(".bg");
  const content1 = document.querySelector(".content1");
  const content2 = document.querySelector(".content2");
  const content3 = document.querySelector(".content3");
  const content4 = document.querySelector(".content4");
  let zoom = 1;
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 8;
  const ZOOM_SPEED = 1.5;
  let scrollCount = 0;

  // Initially hide content 2, 3, and 4
  content2.classList.add("hidden");
  content3.classList.add("hidden");
  content4.classList.add("hidden");

  document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      scrollCount++;
    } else {
      scrollCount--;
    }

    // Show the appropriate content based on scroll count
    if (scrollCount === 0 || zoom === 0) {
      content1.classList.remove("hidden");
      content2.classList.add("hidden");
      content3.classList.add("hidden");
      content4.classList.add("hidden");
    } else if (scrollCount === 2) {
      content1.classList.add("hidden");
      content2.classList.remove("hidden");
      content3.classList.add("hidden");
      content4.classList.add("hidden");
      zoomElement.style.display = "block";
      zoomElement.style.transition = ".5s ease-in-out";
    } else if (scrollCount === 4) {
        content1.classList.add("hidden");
        content2.classList.add("hidden");
        content3.classList.remove("hidden");
        content4.classList.add("hidden");
      zoomElement.style.display = "block";
      zoomElement.style.transition = ".5s ease-in-out";
    } else if (scrollCount === 6) {
        content1.classList.add("hidden");
        content2.classList.add("hidden");
        content3.classList.add("hidden");
        content4.classList.remove("hidden");
      zoomElement.style.display = "none";
      zoomElement.style.transition = ".5s ease-in-out";
    }

    // Ensure scroll count stays within bounds
    scrollCount = Math.min(Math.max(scrollCount, 0), 6);

    // Adjust zoom level
    zoom = MIN_ZOOM + scrollCount * ZOOM_SPEED;
    zoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
    zoomElement.style.transform = `scale(${zoom})`;
  });
});
