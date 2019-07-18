/* jslint indent: 4 */

/*
 - Plus symbol will start on top
 - On click, need to transition to minus symbol on top
      - (by changing the opacity and z-index of both??)
*/

function setupRevealers() {
    var revealers = document.getElementsByClassName("revealer");
    for (let rev of revealers) {
        rev.click(function() {
            
        });
    }
}



window.addEventListener("DOMContentLoaded", event => {
    var cards = document.querySelectorAll(".card");
    for (let card of cards) {
        let cardReveal = card.querySelector(".card-reveal");

    }

});
