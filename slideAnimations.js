// click on a li to reveal span text within
// <li class="clickRevealSpan">Purpose: <span class="spanToReveal">What should the creative tool do?</span></li>
const lisToClick = Array.from(document.getElementsByClassName("clickRevealSpan"));

lisToClick.forEach(li => {
    li.addEventListener("click", () => {
        li.firstElementChild.style.opacity = "1";
    });
})