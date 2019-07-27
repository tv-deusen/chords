
function buildDeck() {
    var deck = new Map()
    var cardSection = document.getElementById("chord_cards");
    var cards = cardSection.getElementsByClassName("card");
    for (let card of cards) {
        var qualities = [];
        var chordType = card.id;
        card.querySelectorAll("input").forEach(function (quality, index, array) {
            if (quality.checked) {
                qualities.push(quality.name);
            }
        });
        deck.set(chordType, qualities);
    }
    return deck;
}

function startQuiz() {

}

window.addEventListener("DOMContentLoaded", event => {
    var disp = document.getElementById("quiz_display");
    var cards = document.getElementById("chord_cards");
    var params = document.getElementById("parameters");
    var start = document.getElementById("start");

    disp.style.display = "none"
    start.addEventListener("click", function() {
        cards.style.display = "none";
        params.style.display = "none";
        disp.style.display = "block";
        var chords = buildDeck();
        startQuiz();
    });
});