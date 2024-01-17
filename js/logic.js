class cardMatch {


    constructor(deckSize = 20) {
        deckSize % 2 == 0
            ? this.nextDeckSize = deckSize
            : this.nextDeckSize = deckSize + 1
        this.selection1 = null //index of the card in the cards array
        this.selection2 = null
        this.cards = []
        this.errors = 0
        this.maxErrors = -1
        this.pairsToFind = this.nextDeckSize / 2
        this.errorMessage = ''
        this.gameOver = false
    }

    getDeck() {
        return this.cards
    }
    gameInit() {
        this.getRandomCards()
        this.shuffleCards()
    }

    changeDeckSize(deckSize) {
        nextDeckSize = deckSize
    }

    getRandomCards() {
        //? Return an array of random cards containing pairs of each card
        let randomCards = []
        let value
        for (let i = 1; i <= this.nextDeckSize / 2; i++) {
            randomCards.push(new Card(i))
            randomCards.push(new Card(i))
        }
        this.cards = randomCards
    }

    shuffleCards() {
        for (let i = 0; i < this.cards.length; i++) {
            const j = Math.floor(Math.random() * this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }

    selectCard(index) {
        try {                                                 //! remove the try/catch block and fix the error
            this.cards[index].select()
            if (this.selection1 == null)
                this.selection1 = index
            else if (this.selection2 == null && index !== this.selection1)
                this.selection2 = index
        } catch (error) {}

    }

    getCards = () => this.cards

    gameReset() {        //? Reset the game parameters
        this.shuffleCards()
        this.errors = 0
    }
    checkStatus() {
        if (this.selection1 === null || this.selection2 === null) {
            return false
        }

        if (this.cards[this.selection1].getValue() !== this.cards[this.selection2].getValue()) {
            this.cards[this.selection1].unselect()
            this.cards[this.selection2].unselect()
            this.errors++
            this.selection1 = null
            this.selection2 = null
            return false
        }

        this.cards[this.selection1].match()
        this.cards[this.selection2].match()
        this.pairsToFind--
        this.selection1 = null
        this.selection2 = null
        return true
    }

    isGameOver() {
        if (this.errors === this.maxErrors) {
            this.gameOver = true
            this.errorMessage = 'Too many errors!'
            return true
        }

        if (this.pairsToFind === 0) {
            this.gameOver = true
            this.errorMessage = 'All pairs are cleared!'
            return true
        }
        return false
    }

}

class Card {
    constructor(value) {
        this.value = value
        this.selected = false
        this.matched = false
    }
    select() {
        this.selected = true
    }
    unselect() {
        this.selected = false
    }
    match() {
        this.matched = true
    }
    unmatch() {
        this.matched = false
    }
    getValue() { return this.value }

    isSelected() { return this.selected }

    isMatched() { return this.matched }
}