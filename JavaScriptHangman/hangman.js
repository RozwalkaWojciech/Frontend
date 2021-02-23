let guesses = "Simple but not easy";
guesses = guesses.toUpperCase();
let hideGuesses = "";
let misses = 0;
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

for (let i = 0; i < guesses.length; i++) {
    if (guesses.charAt(i) === " ") hideGuesses = hideGuesses + " ";
    else hideGuesses = hideGuesses + "-";
}

function writeGuesses() {
    document.getElementById("board").innerHTML = hideGuesses;
}

window.onload = start;

let letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";

function start() {

    let divContent = "";

    for (let i = 0; i <= 34; i++) {
        let element = "let" + i;
        divContent = divContent + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 7 === 0) divContent = divContent + '<div style="clear: both"></div>';
    }
    document.getElementById("alphabet").innerHTML = divContent;

    writeGuesses();
}

String.prototype.setChar = function (place, char) {
    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place + 1);
}

function check(number) {

    let hit = false;

    for (let i = 0; i < guesses.length; i++) {
        if (guesses.charAt(i) === letters[number]) {
            hideGuesses = hideGuesses.setChar(i, letters[number]);
            hit = true;
        }
    }
    if (hit) {
        yes.play();
        let element = "let" + number;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        writeGuesses();
    } else {
        no.play();
        let element = "let" + number;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        misses++;
        let picture = "img/s" + misses + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="' + picture + '" alt=""/>';
    }
    if (guesses === hideGuesses) {
        document.getElementById("alphabet").innerHTML = 'Yes, You win! Correct answer: ' + guesses +
            '<br/><br/><span class="reset" onclick="location.reload()"> ONE MORE TIME? </span>';
    }
    if (misses === 9) {
        document.getElementById("alphabet").innerHTML = 'Oh no, You lost! Correct answer: ' + guesses +
            '<br/><br/><span class="reset" onclick="location.reload()"> ONE MORE TIME? </span>';
    }
}