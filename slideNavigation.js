/* ------------------------------------------------------------------------------------------------------------------ */
// Variables
/* ------------------------------------------------------------------------------------------------------------------ */
const nextSlideButton = document.getElementById("nextSlideButton");
const prevSlideButton = document.getElementById("prevSlideButton");

const slide4 = document.getElementById("slide-4");

let currentSlide = 0;

const intersectionObserver = new IntersectionObserver(
    intersectionCallback,
    { threshold: 1.0 }
);

intersectionObserver.observe(slide4);

/* ------------------------------------------------------------------------------------------------------------------ */
// Functions
/* ------------------------------------------------------------------------------------------------------------------ */
function nextSlide() {

}
function prevSlide() {

}
function intersectionCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            if (entry.intersectionRatio >= 0.75) {
                console.log(entry.intersectionRatio);
            }
        }
    })
}