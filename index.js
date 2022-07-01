
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogList = document.querySelectorAll('.column')
let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogList.length; i++) {
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
    dogNames[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'blue'