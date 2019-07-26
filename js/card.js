/* jslint indent: 4 */

function setupRevealers() {
    var revealers = document.getElementsByClassName("revealer");
    for (let rev of revealers) {
        let add = rev.children.item(0);
        let remove = rev.children.item(1);

        let reveal = rev.parentElement.parentElement.querySelector(".card-reveal");

        add.style.zIndex = "2";
        add.style.opacity = "1";
        remove.style.zIndex = "1";
        remove.style.opacity = "0";

        // Should be able to find something more elegant than this...
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

            if (reveal.style.right = "100%") {
                reveal.style.right = "10%";
            } else {
                reveal.style.right = "100%";
            }
        });
    }
}

window.addEventListener("DOMContentLoaded", event => {
    setupRevealers();
    setupReveals();
});
