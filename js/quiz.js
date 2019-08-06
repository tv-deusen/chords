
const flat = String.fromCharCode(0x266D);
const sharp = String.fromCharCode(0x266F); 
const roots = ["A", "A"+flat, "B", "B"+flat, "C", "D", "D"+flat, "E", "E"+flat, "F", "F"+flat, "G", "G"+flat];

var CANCELLED = false;

class InputException {
    constructor(msg) {
        this.msg = msg;
        this.name = "InputException";
    }
    toString() {
        return this.name + ": " + this.msg;
    }
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
    CANCELLED = true;
    var disp = document.getElementById("quiz_display");
    var cards = document.getElementById("chord_cards");
    var params = document.getElementById("parameters");
    disp.style.display = "none";
    cards.style.display = "flex";
    params.style.display = "block";
}

// https://stackoverflow.com/a/12646864/8672933
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function makeChords(qualities) {
    chords = [];
    for (let r of roots) {
        chords = chords.concat(qualities.map(q => r + q));
    }
    return shuffleArray(chords);
}

// https://stackoverflow.com/a/39914235/8672933
function sleep(interval) {
    return new Promise(resolve => setTimeout(resolve, interval));
}

function swapCards(hide, show, chord) {
    cardHide = document.getElementById(hide);
    cardShow = document.getElementById(show);
    cardHide.style.opacity = "0";
    cardShow.style.opacity = "1";
    cardHide.innerHTML = chord;
}

function testQuiz() {
    
}

// Might be complications from async so
// TODO fully learn async
async function startQuiz(interval, selections) {
    console.log("starting quiz");
    var a = "flashcard_a";
    var b = "flashcard_b";

    var flashA = document.getElementById(a);
    var flashB = document.getElementById(b);

    var chords = makeChords(selections);
    console.assert(chords.length == selections.length * roots.length);
    var i = 0;
    for (let c of chords) {
        if (!CANCELLED) {
            await sleep(interval);
            if (CANCELLED) { break; }
            if (i % 2) {
                flashA.innerHTML = c;
                flashA.style.opacity = "1";
                flashB.style.opacity = "0";                
            } else {
                flashB.innerHTML = c;
                flashB.style.opacity = "1";
                flashA.style.opacity = "0";
            }
            i++;
        } else {
            break;
        }
    }
}

window.addEventListener("DOMContentLoaded", event => {
    var disp = document.getElementById("quiz_display");
    var cards = document.getElementById("chord_cards");
    var params = document.getElementById("parameters");
    var start = document.getElementById("start");

    var selections = null;

    disp.style.display = "none";
    disp.style.transition = "opacity 0.5s";

    document.getElementById("flashcard_a").style.transition = "opacity 0.5s";
    document.getElementById("flashcard_b").style.transition = "opacity 0.5s";

    start.addEventListener("click", function() {
        CANCELLED = false;
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