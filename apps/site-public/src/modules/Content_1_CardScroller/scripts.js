const scroller = document.querySelector("[data-scroll-carousel]");
const dragSpeed = 1.5; // Increase this for snappier response

if (scroller) {
    let isDown = false;
    let startX, scrollLeft;

    scroller.addEventListener("mousedown", (e) => {
        isDown = true;
        scroller.classList.add("dragging");
        startX = e.pageX;
        scrollLeft = scroller.scrollLeft;
    });

    scroller.addEventListener("mouseleave", () => {
        isDown = false;
        scroller.classList.remove("dragging");
    });

    scroller.addEventListener("mouseup", () => {
        isDown = false;
        scroller.classList.remove("dragging");
    });

    scroller.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * dragSpeed;
        scroller.scrollLeft = scrollLeft - walk;
    });



    // Touch (optional — works without)
    scroller.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].pageX;
        scrollLeft = scroller.scrollLeft;
    });

    scroller.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX;
        const walk = (x - startX) * dragSpeed;
        scroller.scrollLeft = scrollLeft - walk;
    });

    scroller.addEventListener("touchend", () => {
        isDown = false;
    });
}
