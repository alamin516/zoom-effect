document.addEventListener("DOMContentLoaded", function() {
    const zoomElement = document.querySelector(".bg");
    const content1 = document.querySelector(".content1");
    const content2 = document.querySelector(".content2");
    const content3 = document.querySelector(".content3");
    const content4 = document.querySelector(".content4");
    let zoom = 1;
    const MIN_ZOOM = 1;
    const MAX_ZOOM = 4;
    const ZOOM_SPEED = 0.1;
    let scrollCount = 0;

    document.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            scrollCount++;
        } else {
            scrollCount--;
        }

        // Change content based on scroll count
        if (scrollCount === 0) {
            content1.style.display = "block";
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "none";
        } else if (scrollCount === 1) {
            content1.style.display = "none";
            content2.style.display = "block";
            content3.style.display = "none";
            content4.style.display = "none";
        } else if (scrollCount === 2) {
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "block";
            content4.style.display = "none";
        } else if (scrollCount === 3) {
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "block";
        }

        // Ensure scroll count stays within bounds
        scrollCount = Math.min(Math.max(scrollCount, 0), 3);

        // Adjust zoom level
        zoom = MIN_ZOOM + scrollCount * ZOOM_SPEED;
        zoom = Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
        zoomElement.style.transform = `scale(${zoom})`;
    });
});
