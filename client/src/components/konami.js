/* 
A simple script that is present on the webpage.
Takes user keyboard input, checking for the Konami Code.

Does a variety of things, depending on which page you're on:
-On most pages, doesn't really do much, and prints "VEN" to the console.
-On the News Page, hijacks the contents of all news articles, replacing it with "VEN". Also makes the image 569% better.
*/

var key_seq = 0; //Where the user currently is in the sequence. (goes from 0 - 10)

document.onkeydown = checkKey; //Applies a function to the document that checks for key presses.

function checkKey(e) { //Said function applied to the document.
    e = e || window.event;

    //Weirdly enough, making the =='s into ==='s seems to break it.
    if (e.keyCode == '38') { //up
        if (key_seq === 0 || key_seq === 1) {
            key_seq++;
        } else {
            key_seq = 1; //set to 1, as it's the start of the code
        }
    } else if (e.keyCode == '40') { //down
        if (key_seq === 2 || key_seq === 3) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode == '37') { //left
        if (key_seq === 4 || key_seq === 6) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode == '39') { //right
        if (key_seq === 5 || key_seq === 7) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode == '65') { //a
        if (key_seq === 9) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode == '66') { //b
        if (key_seq === 8) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode == '13') { //enter / start
        if (key_seq === 10) {
            //If the code reaches here, congratulations; you've inputted the Konami Code!

            /*var audio = new Audio('js/ven_ven_ven.mp3');
            audio.play();*/

            //Select all pictures on the news page, and replace them with MAXIMUM POWER
            let pictures = document.getElementsByClassName("card-img-top");
            for (let i = 0; i < pictures.length; i++) {
                pictures[i].src = "https://i.imgur.com/GTcHy0u.jpg"; //image is private, don't worry
            }

            //Select all headings on the news page, and replace it with VEN!
            let headings = document.getElementsByClassName("card-title");
            for (let i = 0; i < headings.length; i++) {
                headings[i].innerHTML = "VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN";
            }

            //Select all article text on the news page, and replace it with VEN!
            let texts = document.getElementsByClassName("card-text");
            for (let i = 0; i < texts.length; i++) {
                texts[i].innerHTML = "VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN VEN";
            }

            key_seq = 0; //Reset sequence. 
            console.log("VEN");
        } else {
             key_seq = 0;
        }
    } else { //other
        key_seq = 0;
    }
    
    console.log(key_seq);
}