/* jslint indent: 4 */



function setupRevealers() {
    var revealers = document.getElementsByClassName("revealer");
    for (let rev of revealers) {
        let add = rev.children.item(0);
        let remove = rev.children.item(1);

        add.style.zIndex = "2";
        add.style.opacity = "1";
        remove.style.zIndex = "1";
        remove.style.opacity = "0";

        rev.addEventListener("click", function (event) {
            if (add.style.zIndex == "1") {
                add.style.zIndex = "0";
            } else {
                add .style.zIndex = "1";
            }
            if (add.style.opacity == "1") {
                add.style.opacity = "0";
            } else {
                add.style.opacity = "1";
            }

            if (remove.style.zIndex == "1") {
                remove.style.zIndex = "0";
            } else {
                remove .style.zIndex = "1";
            }
            if (remove.style.opacity == "1") {
                remove.style.opacity = "0";
            } else {
                remove.style.opacity = "1";
            }

            
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
