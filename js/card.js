/* jslint indent: 4 */

function toggleRevealer(revealer) {
    // This logic isn't working in the way expected.
    revealer.style.zIndex = (revealer.style.zIndex == "1") ? "2" : "1";
    revealer.style.opacity = (revealer.style.opacity == "1") ? "0" : "1";
}

function setupRevealers() {
    var revealers = document.getElementsByClassName("revealer");
    for (let rev of revealers) {
        rev.addEventListener("click", function (event) {
            let add = this.children.item(0);
            let remove = this.children.item(1);
            toggleRevealer(add);
            toggleRevealer(remove);
            console.log("adds zIndex is now: %s", add.style.zIndex);
            console.log("adds opacity is now: %s", add.style.opacity);
            console.log("removes zIndex is now: %s", remove.style.zIndex);
            console.log("removes opacity is now: %s", remove.style.opacity);
        });
    }
}



window.addEventListener("DOMContentLoaded", event => {
    setupRevealers();
    var cards = document.querySelectorAll(".card");
    for (let card of cards) {
        let cardReveal = card.querySelector(".card-reveal");

    }

});
