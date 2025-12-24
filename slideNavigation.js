/* ------------------------------------------------------------------------------------------------------------------ */
// Variables
/* ------------------------------------------------------------------------------------------------------------------ */
const nextSlideButton = document.getElementById("nextSlideButton");
const prevSlideButton = document.getElementById("prevSlideButton");
const slideLinkWrapper = document.querySelector(".slideLinks");
const currentSlideDisplay = document.getElementById("currentSlideDisplay");

const intersectionObserver = new IntersectionObserver(
    intersectionCallback,
    { threshold: 0.5 }
);

// find slide HTML elements
const slideElementsArray = Array.from(document.getElementsByClassName("slide"));
// use elements to set up array with other info and elements
const slidesInfoArray = slideElementsArray.map((slide, slideNum) => {
    // set slide id
    slide.id = `slide-${slideNum}`;
    slide.dataset.index = slideNum;
    // create nav link
    const slideLink = document.createElement("a");
    slideLink.href = `#slide-${slideNum}`;
    slideLink.textContent = slideNum;
    slideLinkWrapper.appendChild(slideLink);
    intersectionObserver.observe(slide);
    return {
        index: slideNum,
        navLink: slideLink,
        slide: slide,
    }
});

console.log(slidesInfoArray);

let currentSlide = 0;



//intersectionObserver.observe(slide4);

/* ------------------------------------------------------------------------------------------------------------------ */
// Functions
/* ------------------------------------------------------------------------------------------------------------------ */
function nextSlide() {
    if(currentSlide === slidesInfoArray.length - 2){
        nextSlideButton.disabled = true;
    } else if (currentSlide === 0){
        prevSlideButton.disabled = false;
    }
    currentSlide = currentSlide + 1;
    slidesInfoArray[currentSlide].slide.scrollIntoView(true);
}
nextSlideButton.addEventListener("click", nextSlide);
function prevSlide() {
    if(currentSlide === 1){
        prevSlideButton.disabled = true;
    } else if (currentSlide === slidesInfoArray.length - 1){
        nextSlideButton.disabled = false;
    }
    currentSlide = currentSlide - 1;
    slidesInfoArray[currentSlide].slide.scrollIntoView(true);
}
prevSlideButton.addEventListener("click", prevSlide);
function intersectionCallback(entries) {
    entries.forEach(entry => {
        // check if slide is more than 50% on screen
        if (entry.isIntersecting) {
            let entryIndex = entry.target.dataset.index;
            // update current slide value
            currentSlide = parseInt(entryIndex);
            // update current slide display
            currentSlideDisplay.textContent = entryIndex;
            // update button states
            // due to order of updating this is slightly different to the button functions' conditionals
            if(currentSlide === 0){
                prevSlideButton.disabled = true;
            } else if (currentSlide === 1){
                prevSlideButton.disabled = false;
            } else if (currentSlide === slidesInfoArray.length - 2){
                nextSlideButton.disabled = false;
            } else if (currentSlide === slidesInfoArray.length - 1){
                nextSlideButton.disabled = true;
            }
        }
    })
}