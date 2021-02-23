let guesses = "Simple but not easy";
guesses = guesses.toUpperCase();

function writeGuesses() {
    document.getElementById("board").innerHTML = guesses;
}

window.onload = writeGuesses;