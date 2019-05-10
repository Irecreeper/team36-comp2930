/* Not actually used. Maybe I'll tinker with this more later. */

document.onkeydown = resizeDoc;

function resizeDoc(e) {
    let landingArea = document.getElementById("test");
    let landingMargins = (window.innerHeight - landingArea.clientHeight) / 2;
    console.log(landingMargins);
    landingArea.style.paddingTop = landingMargins + "px";
    landingArea.style.paddingBottom = landingMargins + "px";
}