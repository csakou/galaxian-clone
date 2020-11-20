class Game {
    constructor() {
    };

    init() {

    }

    draw() {

    }

    gameLogic() {

    }
    
    playerInput() {

    }

    updateGame() {
        this.playerInput();
        this.gameLogic();
        this.draw();
        setTimeout(this.updateGame, 25);
    }
}

function gameStart() {
    var game = new Game();
    game.init();
}