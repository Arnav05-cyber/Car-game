var gameState = 0, playerCount = 0;
var database, form,game,player;
var allPlayers;
var distance = 0;
var cars,car1,car2,car3,car4;

function setup(){
    createCanvas(displayWidth-300,displayHeight-150);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    if(playerCount === 4)
    {
        game.update(1);
    }

    if(gameState === 1)
    {
        game.play();
    }

    drawSprites();
}


