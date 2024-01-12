//setup section
let game = new cardMatch(20)
const 
//helper section


gameReset = () => {
    game.gameReset()
    draw(game.getCards())
}

selectCard = (card, index) => {
    game.selectCard(card,index)
    game.checkStatus()
    draw(game.getCards())
    game.isGameOver()
    ? gameOver()
    : ''
}
gameInit = () => {
    game.gameInit()
    boardInit(game.getDeck(), selectCard)
    draw(game.getCards())
    reveal()
}
//game section

gameInit()





//assignment section

/*
the game must go like this:

1. gameInit() must init the game logic and the graphic
2. gameReset() must reset the game on each step of the game
3. selectCard() must select a card and return it to the game logic
4. checkStatus() must check the status of the game
5. isGameOver() must check if the game is over




*/