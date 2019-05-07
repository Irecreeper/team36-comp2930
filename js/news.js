const newsArea = document.getElementById("news-card-area");
const articleTest = document.getElementById("news-item-0"); //Just for testing purposes, we clone our one article.
var articleID = 0;

//Load articles on page first opening
//Infinite scroll!
window.addEventListener('scroll', function() {
    // console.log(window.innerHeight + " / " + Math.ceil(window.scrollY) + " / " + document.body.clientHeight);
    if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.clientHeight) {
        console.log("Bottom reached! Adding articles...")
        for(let i = 0; i < 3; i++) {
            articleID++;
            let clone = articleTest.cloneNode(true);
            clone.setAttribute('id', "news-article-" + articleID);
            newsArea.appendChild(clone);
        }
    }
});