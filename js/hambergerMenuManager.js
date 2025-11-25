const toggleBtn = document.getElementById("hamburger-menu-btn");
const globalNav = document.getElementById("global-nav");
const globalNavChildren = globalNav.querySelectorAll("li");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    globalNav.classList.toggle("open");
});

globalNavChildren.forEach(child => {
    child.addEventListener("click", () => {
        toggleBtn.classList.remove("open");
        globalNav.classList.remove("open");
    });
});
