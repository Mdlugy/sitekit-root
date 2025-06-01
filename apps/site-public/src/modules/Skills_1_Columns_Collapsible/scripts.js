// document.addEventListener("DOMContentLoaded", () => {
const id = "placeholderID";
const button = document.querySelector(`#placeholderID #toggleSkills`);
const wrapper = document.querySelector(`#skills [data-collapsible-wrapper]`);

// if (!button || !wrapper) return;

// Initialize button text
wrapper.hidden = true; // Start with the wrapper hidden
button.textContent = "Show Skills";

button.addEventListener("click", () => {

    const isCollapsed = wrapper.hidden = !wrapper.hidden;

    button.textContent = isCollapsed ? "Show Skills" : "Hide Skills";
});
