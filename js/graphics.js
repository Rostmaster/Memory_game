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
        cards[i].isSelected()
            ? card.classList.add('show')
            : card.classList.remove('show')
        cards[i].isMatched()
            ? card.classList.add('match')
            : ''
    })
}


let suitsInit = async () => {//! API REQUIRED to work according to the task
    for (let i = 0; i < deckSize / 2; i++) {

        // let suit = await getHarryImage()
        let suit = await getDogImage()
        // let suit = await getCountryFlag()

        suits.push(suit)
    }

}

boardInit = async (cards) => {
    deckSize = cards.length
    await suitsInit()

    for (let i = 0; i < deckSize; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = i + 1
        // card.innerHTML = cards[i].getValue()
        img = document.createElement('img')
        let suit = cards[i].getValue() - 1

        img.src = suits[suit]

        img.addEventListener('click', (e) => {//! put in dedicated function
            //get parent element 
            parent = e.target.parentElement
            selectCard(parseInt(parent.id) - 1)
        })
        card.appendChild(img)
        board.appendChild(card)
        cardElements.push(card)
    }

    addListeners()
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
addListeners = () => {
    let cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            selectCard(parseInt(e.target.id) - 1)
        })

    })
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

