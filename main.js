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

  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";

  document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      scrollCount++;
    } else {
      scrollCount--;
    }

    if (scrollCount === 0 || zoom === 0) {
      content1.style.display = "block";
      content2.style.display = "none";
      content3.style.display = "none";
      content4.style.display = "none";
    } else if (scrollCount === 2) {
      content1.style.display = "none";
      content2.style.display = "block";
      content3.style.display = "none";
      content4.style.display = "none";
      zoomElement.style.display = "block";
      zoomElement.style.transition = ".5s ease-in-out";
    } else if (scrollCount === 4) {
      content1.style.display = "none";
      content2.style.display = "none";
      content3.style.display = "block";
      content4.style.display = "none";
      zoomElement.style.display = "block";
      zoomElement.style.transition = ".5s ease-in-out";
    } else if (scrollCount === 6) {
      content1.style.display = "none";
      content2.style.display = "none";
      content3.style.display = "none";
      content4.style.display = "block";
      zoomElement.style.display = "none";
      zoomElement.style.transition = ".5s ease-in-out";
    }

    // Ensure scroll count stays within bounds
    scrollCount = Math.min(Math.max(scrollCount, 0), 6);

    console.log(scrollCount);

    // Adjust zoom level
    zoom = MIN_ZOOM + scrollCount * ZOOM_SPEED;
    zoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
    zoomElement.style.transform = `scale(${zoom})`;
  });
});
