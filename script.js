window.addEventListener("load", forsideSprite);

function forsideSprite() {
    console.log("forside");

    document.querySelector("#button").addEventListener("click", goSprite);
}

function goSprite() {
    console.log("sprite igang");

    document.querySelector("#sprite").classList.add("animation");

    document.querySelector("#sprite").addEventListener("animationend", cvSide);


}

function cvSide() {
    console.log("cvSide");

    window.location = 'cv.html';
}
