class cardMatch {

    constructor(deckSize = 20) {
        deckSize % 2 == 0
            ? this.nextDeckSize = deckSize
            : this.nextDeckSize = deckSize + 1
        this.selection1 = null //index of the card in the cards array
        this.selection2 = null
        this.cards = []
    }

    gameInit() { }

    changeDeckSize(cards) {
        nextDeckSize = cards
    }

    getRandomCards(deckSize) { //! need to implement the API required to return an array of random cards
        //? Return an array of random cards containing pairs of each card
        const randomCards = []
        for (let i = 0; i < deckSize; i++) {
            value = Math.floor(Math.random() * deckSize)
            randomCards.push(new Card(value, "��"))
            randomCards.push(new Card(value, "��"))
        }
    }

    shuffleCards() { }

    selectCard(card) {
        card.select()
        if (this.selection1 == null)
            this.selection1 = card
        else if (this.selection2 == null)
            this.selection2 = card
    }

    getCards = () => this.cards

    gameReset() {
        //? Reset the game parameters
        this.cards = this.getRandomCards(this.nextDeckSize)
    }
    checkStatus() {
        if (this.selection1 === null || this.selection2 === null) {
            return false
        }

        if (this.selection1.getValue() !== this.selection2.getValue()) {
            this.cards[this.selection1].unselect()
            this.cards[this.selection2].unselect()
            return false
        }

        this.cards[this.selection1].unselect()
        this.cards[this.selection2].unselect()
        this.cards[this.selection1].match()
        this.cards[this.selection2].match()
        return true
    }

    isGameOver() { }
}

class Card {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
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

}