
const flat = String.fromCharCode(0x266D);
const sharp = String.fromCharCode(0x266F); 
const roots = ["A", "A"+flat, "B", "B"+flat, "C", "D", "D"+flat, "E", "E"+flat, "F", "F"+flat, "G", "G"+flat];

class InputException {
    constructor(msg) {
        this.msg = msg;
        this.name = "InputException";
    }
    toString() {
        return this.name + ": " + this.msg;
    }
}

function makeChords(qualities) {
    chords = [];
    for (let r of roots) {
        chords = chords.concat(qualities.map(q => r + q));
    }
    return chords;
}

function getSelections() {
    var qualities = [];
    var cardSection = document.getElementById("chord_cards");
    var cards = cardSection.getElementsByClassName("card");

    for (let card of cards) {
        card.querySelectorAll("input").forEach(function (quality, index, array) {
            if (quality.checked) {
                qualities.push(quality.name);
            }
        });
    }
    if (qualities.length > 0) {
        return qualities;
    } else {
        throw new InputException("No chords selected");
    }
}

function getDifficulty() {
    return 5000;
}

function endQuiz() {
    var disp = document.getElementById("quiz_display");
    var cards = document.getElementById("chord_cards");
    var params = document.getElementById("parameters");
    disp.style.display = "none";
    cards.style.display = "flex";
    params.style.display = "block";
}

function sleep(interval) {
    return new Promise(resolve => setTimeout(resolve, interval));
}

async function startQuiz(interval, selections) {
    var disp = document.getElementById("quiz_display");
    var chordDisplay = document.getElementById("flashcard");
    chords = makeChords(selections);
    for (let c of chords) {
        await sleep(interval);
        console.log("Displaying: %s", c);
        chordDisplay.innerHTML = c;
    }
}

window.addEventListener("DOMContentLoaded", event => {
    var disp = document.getElementById("quiz_display");
    var cards = document.getElementById("chord_cards");
    var params = document.getElementById("parameters");
    var start = document.getElementById("start");

    var selections = null;

    disp.style.display = "none";
    start.addEventListener("click", function() {
        try {
            selections = getSelections();
        }
        catch (ex) {
            console.log(ex);
            return;
        }
        var difficulty = getDifficulty();
        cards.style.display = "none";
        params.style.display = "none";
        disp.style.display = "flex";
        startQuiz(difficulty, selections);
    });
});