const pickUpWrapper = document.getElementById("menu-plan__pick-up-wrapper");
const pickUpSlideshows = document.querySelectorAll(".menu-plan__pick-up-slideshow");

pickUpWrapper.addEventListener("mousemove", () => {
    pickUpSlideshows.forEach(pickUpSlideshow => {
        pickUpSlideshow.classList.add("stop");
    });
});
pickUpWrapper.addEventListener("mouseleave", () => {
    pickUpSlideshows.forEach(pickUpSlideshow => {
        pickUpSlideshow.classList.remove("stop");
    });
});
