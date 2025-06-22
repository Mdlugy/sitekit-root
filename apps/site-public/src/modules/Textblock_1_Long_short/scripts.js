const _MID_button = document.querySelector(`#_MID_data-toggle-button`);
const _MID_wrapperShort = document.querySelector(`#_MID_data-ShortText-section`);
const _MID_wrapperLong = document.querySelector(`#_MID_data-LongText-section`);

// Initialize button text
_MID_wrapperLong.hidden = true; // Start with the wrapper hidden
_MID_wrapperShort.hidden = false; // Start with the short version visible
_MID_button.textContent = "Short Story Long";


_MID_button.addEventListener("click", () => {

    _MID_wrapperLong.hidden = !_MID_wrapperLong.hidden;
    _MID_wrapperShort.hidden = !_MID_wrapperShort.hidden;
    const _MID_longhidden = _MID_wrapperShort.hidden;

    _MID_button.textContent = !_MID_longhidden ? "Short Story Long" : "Long Story Short";
});
