const _MID_scroller = document.querySelector("[data-scroll-carousel]");
const _MID_dragSpeed = 1.5; // Increase this for snappier response

if (_MID_scroller) {
    let _MID_isDown = false;
    let _MID_startX, _MID_scrollLeft;

    _MID_scroller.addEventListener("mousedown", (e) => {
        _MID_isDown = true;
        _MID_scroller.classList.add("dragging");
        _MID_startX = e.pageX;
        _MID_scrollLeft = _MID_scroller._MID_scrollLeft;
    });

    _MID_scroller.addEventListener("mouseleave", () => {
        _MID_isDown = false;
        _MID_scroller.classList.remove("dragging");
    });

    _MID_scroller.addEventListener("mouseup", () => {
        _MID_isDown = false;
        _MID_scroller.classList.remove("dragging");
    });

    _MID_scroller.addEventListener("mousemove", (e) => {
        if (!_MID_isDown) return;
        e.preventDefault();
        const _MID_x = e.pageX;
        const _MID_walk = (_MID_x - _MID_startX) * _MID_dragSpeed;
        _MID_scroller._MID_scrollLeft = _MID_scrollLeft - _MID_walk;
    });



    // Touch (optional — works without)
    _MID_scroller.addEventListener("touchstart", (e) => {
        _MID_isDown = true;
        _MID_startX = e.touches[0].pageX;
        _MID_scrollLeft = _MID_scroller._MID_scrollLeft;
    });

    _MID_scroller.addEventListener("touchmove", (e) => {
        if (!_MID_isDown) return;
        const _MID_x = e.touches[0].pageX;
        const _MID_walk = (_MID_x - _MID_startX) * _MID_dragSpeed;
        _MID_scroller._MID_scrollLeft = _MID_scrollLeft - _MID_walk;
    });

    _MID_scroller.addEventListener("touchend", () => {
        _MID_isDown = false;
    });
}
