import React from 'react'
const newsArea = document.getElementById('news-card-area')
const articleTest = document.getElementById('news-item')

window.addEventListener('scroll', function() {
  console.log(
    window.innerHeight +
      ' / ' +
      window.scrollY +
      ' / ' +
      document.body.clientHeight,
  )
  if (window.innerHeight + window.scrollY >= document.body.clientHeight - 1) {
    console.log('Bottom reached! Adding article...')
    /* newsArea.style.height = document.body.offsetHeight + 200 + "px"; */
    let clone1 = articleTest.cloneNode(true)
    newsArea.appendChild(clone1)

    let clone2 = articleTest.cloneNode(true)
    newsArea.appendChild(clone2)

    let clone3 = articleTest.cloneNode(true)
    newsArea.appendChild(clone3)
  }
})
