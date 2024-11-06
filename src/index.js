const pBtn = document.querySelector(".pBtn"),
    pNav = document.querySelector(".pNav");

pBtn.addEventListener("click", () => {
    pNav.classList.toggle("hidden");
});

const htmlTag = document.querySelector("html"),
    modeSwitch = document.querySelector(".mode-switch"),
    modeSwitch2 = document.querySelector(".mode-switch-2");

modeSwitch.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");
});

modeSwitch2.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");
});
