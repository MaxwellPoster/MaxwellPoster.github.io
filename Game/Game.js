var game = new Phaser.Game(1440, 900, Phaser.CANVAS, {preload: preload});

function preload(){
    game.load.FifthGirl('sprite', 'asseta/Sprites/')
}