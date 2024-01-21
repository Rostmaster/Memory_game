// setup section
const board = document.getElementById('game_board')
let api
let suits = []
let deckSize
let cardElements = []
let revealTime = 2

// function section

draw = (cards) => {
    cardElements.forEach((card, i) => {
        cards[i].isMatched()
            ? card.classList.add('match')
            : ''
        cards[i].isSelected()
            ? card.classList.add('show')
            : setTimeout(() => { card.classList.remove('show') }, 1000);

    })
}


let suitsInit = async () => {//! API REQUIRED to work according to the task
    for (let i = 0; i < deckSize / 2; i++) {

        let suit = await getHarryImage()
        // let suit = await g?etDogImage()

        suits.push(suit)
    }

}

boardInit = async (cards) => {
    deckSize = cards.length
    await suitsInit()

    //
    /*Cell structure:
        <div class="cell">
            <div class="card">
            <div class="front"></div>
            <div class="back"><img></div>
        </div>
    */
    for (let i = 0; i < deckSize; i++) {
        const cardWrapper = document.createElement('div')
        cardWrapper.id = i + 1
        cardWrapper.classList.add('card-wrapper')

        const card = document.createElement('div')
        card.classList.add('card')
        cardWrapper.appendChild(card)

        let front = document.createElement('div')
        front.classList.add('front')
        card.appendChild(front)

        let back = document.createElement('div')
        back.classList.add('back')
        card.appendChild(back)

        let imgWrapper = document.createElement('div')
        imgWrapper.classList.add('img-wrapper')
        back.appendChild(imgWrapper)

        let img = document.createElement('img')
        let suit = cards[i].getValue() - 1
        img.classList.add('card-img')
        img.src = suits[suit]
        imgWrapper.appendChild(img)

        board.appendChild(cardWrapper)
        cardElements.push(cardWrapper)
    }
    //Click processing
    addEventListeners()
}

addEventListeners = () => {
    cardElements.forEach((card, i) => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('front')) {
                selectCard(card.id)
            }
        })
    })
}
boardReset = async (cards) => {
    if (cards.length === deckSize) {
        await suitsInit()
        cardElements.forEach((card, i) => {
            card.classList.remove('show')
            card.classList.remove('match')
            card.firstChild.src = suits[0]
        })
    }

    await suitsInit()
}
addImageSource = () => { }

reveal = () => {
    for (let i = 0; i < deckSize; i++) {
        const card = cardElements[i]
        card.classList.add('show')
    }
    setInterval(() => {

    }, 1000 * revealTime)

    for (let i = 0; i < deckSize; i++) {
        const card = cardElements[i]
        card.classList.remove('show')
    }
}

showLoader = (loader) => {
    loader.style.display = 'block'
}

hideLoader = (loader) => {
    loader.style.display = 'none'
}
