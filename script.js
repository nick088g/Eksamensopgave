window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    forsideSprite();
}


function forsideSprite() {
    console.log("forside");

    document.querySelector("#button").addEventListener("click", goSprite);
}

function goSprite() {
    console.log("sprite igang");

    document.querySelector("#button").classList.remove("button");
    document.querySelector("#sprite").classList.add("animation");

    document.querySelector("#sprite").addEventListener("animationend", cvSide);

}

function cvSide() {
    console.log("cvSide");

    window.location = 'cv.html';
}
