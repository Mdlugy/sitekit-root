const _MID_button = document.querySelector(`#_MID_ToggleSkills`);
const _MID_wrapper = document.querySelector(`#_MID_CollapsibleWrapper`);


// Initialize button text
_MID_wrapper.hidden = true; // Start with the wrapper hidden
_MID_button.textContent = "Show Skills";

_MID_button.addEventListener("click", () => {

    const _MID_isCollapsed = _MID_wrapper.hidden = !_MID_wrapper.hidden;

    _MID_button.textContent = _MID_isCollapsed ? "Show Skills" : "Hide Skills";
});
