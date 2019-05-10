const landingArea = document.getElementById("test");

document.onkeydown = resizeDoc;

function resizeDoc(e) {
    console.log("called");
    landingArea.setAttribute('height', document.body.clientHeight);
}