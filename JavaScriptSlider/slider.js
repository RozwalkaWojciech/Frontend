let slideNumber = Math.floor(Math.random() * 5) + 1;
let timer1 = 0;
let timer2 = 0;

function setSlide(number) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    slideNumber = number - 1;

    hideSlide();
    setTimeout("changeSlide()", 500);
}

function hideSlide() {
    $("#slider").fadeOut(500);
}

function changeSlide() {

    slideNumber++;
    if (slideNumber > 5) slideNumber = 1;

    let file = "<img src=\"slides/slide" + slideNumber + ".png\"/>";

    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);

    setTimeout(changeSlide, 5000);
    setTimeout(hideSlide, 4500);

}