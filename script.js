const btnEl = document.querySelector('.btn')
const imageContainerEl = document.querySelector('.imageBox')

btnEl.addEventListener('click', () => {
    currentIndex = 6;
    addImages()
})

function addImages() {
    for (let index = 0; index < currentIndex; index++) {
        const newImg = document.createElement('img')
        newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 200)}`
        imageContainerEl.appendChild(newImg)
    }
}