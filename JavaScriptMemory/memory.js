let cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

// alert(cards[4]);
// console.log(cards);


let c0 = document.getElementById('c0');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');

let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let c7 = document.getElementById('c7');

let c8 = document.getElementById('c8');
let c9 = document.getElementById('c9');
let c10 = document.getElementById('c10');
let c11 = document.getElementById('c11');

c0.addEventListener("click", function () {
    revealCard(0);
});
c1.addEventListener("click", function () {
    revealCard(1);
});
c2.addEventListener("click", function () {
    revealCard(2);
});
c3.addEventListener("click", function () {
    revealCard(3);
});

c4.addEventListener("click", function () {
    revealCard(4);
});
c5.addEventListener("click", function () {
    revealCard(5);
});
c6.addEventListener("click", function () {
    revealCard(6);
});
c7.addEventListener("click", function () {
    revealCard(7);
});

c8.addEventListener("click", function () {
    revealCard(8);
});
c9.addEventListener("click", function () {
    revealCard(9);
});
c10.addEventListener("click", function () {
    revealCard(10);
});
c11.addEventListener("click", function () {
    revealCard(11);
});
c0.addEventListener("click", function () {
    revealCard(0);
});

let oneVisible = false;
let turnCounter = 0;

function revealCard(nr) {

    let img = "url(img/" + cards[nr] + ")";

    $('#c' + nr).css('background-image', img);
    $('#c' + nr).addClass('cardActive');
    $('#c' + nr).removeClass('card');

}