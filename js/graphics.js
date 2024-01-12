// setup section
const board = document.getElementById('game_board')
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


let suitsInit = () => {//! API REQUIRED to work according to the task
    for (let i = 0; i < deckSize / 2; i++) suits.push(`card_${i + 1}`)
}

boardInit = (cards) => {
    deckSize = cards.length
    suitsInit()
    for (let i = 0; i < deckSize; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = i + 1
        card.innerHTML = cards[i].getValue()
        img = document.createElement('img')
        // img.src =`url(${suits[cards[i].getValue()-1]})`
        img.src = 'https://source.unsplash.com/random/300×300'
        img.addEventListener('click', (e) => {
            //get parent element 
            parent = e.target.parentElement
            selectCard(cards[parseInt(parent.id) - 1], parseInt(parent.id) - 1)
        })

        card.appendChild(img)
        board.appendChild(card)
        cardElements.push(card)
        card.addEventListener('click', (e) => {
            selectCard(cards[parseInt(e.target.id) - 1], parseInt(e.target.id) - 1)
        })
    }
}

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

