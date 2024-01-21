//setup section
let game = new cardMatch(20)
let loaderElement = document.querySelector('.loader')
//helper section

gameReset = () => {
    game.gameReset()
    boardReset()
    draw(game.getCards())

}

selectCard = (index) => {
    game.selectCard(index)
    draw(game.getCards())
    game.checkStatus()
    draw(game.getCards())
    game.isGameOver()
        ? gameOver()
        : ''
}

gameOver = () => {
    alert(game.errorMessage)
}
gameInit = async () => {
    game.gameInit()
    await boardInit(game.getDeck(), selectCard)
    draw(game.getCards())
    reveal()
}

loader = (status) => {
    console.log("loading:", status)
    status? showLoader(loaderElement): hideLoader(loaderElement)
}
//game section
start = async () => {
    loader(true)
    await gameInit()
    Promise.all(
        Array.from(document.images)
            .filter(img => !img.complete)
            .map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))
    )
        .then(() => {
            loader(false)
        });

}

start()


//assignment section

/*
the game must go like this:

1. gameInit() must init the game logic and the graphic
2. gameReset() must reset the game on each step of the game
3. selectCard() must select a card and return it to the game logic
4. checkStatus() must check the status of the game
5. isGameOver() must check if the game is over




*/