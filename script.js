window.addEventListener("load", forsideSprite);

function forsideSprite() {
    console.log("forside");

    document.querySelector("#button").addEventListener("click", goSprite);
}

function goSprite() {
    console.log("sprite igang");

    window.location = 'cv.html';
}
