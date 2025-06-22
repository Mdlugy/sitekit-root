const id = "placeholderID";
const button = document.querySelector(`#placeholderID #toggleSkills`);
const wrapperShort = document.querySelector(`#${id} [data-collapsible-wrapper]`);
const wrapperLong = document.querySelector(`#${id} [data-collapsible-wrapper]`);

// Initialize button text
wrapperLong.hidden = true; // Start with the wrapper hidden
wrapperShort.hidden = false; // Start with the short version visible
button.textContent = "Short Story Long";

button.addEventListener("click", () => {
    wrapperLong.hidden = !wrapperLong.hidden;
    wrapperShort.hidden = !wrapperShort.hidden;
    const longhidden = wrapperShort.hidden;

    button.textContent = longhidden ? "Short Story Long" : "Long Story Short";
});
