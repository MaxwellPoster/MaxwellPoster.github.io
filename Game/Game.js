BattleWatch.Game = function (game) {
    this.gamestatus; //is the game over?
    this.inventory; //Inventory manager INC item pickup(possibly other function for pickup?)
    this.movement; //handles player movement
    this.attack; //handles player attack inputs
    this.ai; //handles ai movement + combat
    this.ent; //handles crate destructions (gibs?) 
    this.timer; //we should put a timer in a corner and if they survive for X amount of time, they should start a new round
    this.playercount; //number somewhere on screen indicating how many AI are left, and if 0 are left, should start a new round
    this.musicloop; //start music loop (feat. skrr bradshaw)
    this.ouch; //Handles listening for damage to player, also health manager (IE if health < 0; gameover)
    this.gameover; //Gameover screen, then return to main menu
};
BattleWatch.Game.prototype = {
    
//var game = new Phaser.Game(1440, 900, Phaser.CANVAS, {preload: preload});

//function preload(){
//    game.load.FifthGirl('sprite', 'asseta/Sprites/')
//}
BattleWatch.Game = function (game) {
    this.gamestatus; //is the game over?
    this.inventory; //Inventory manager INC item pickup(possibly other function for pickup?)
    this.movement; //handles player movement
    this.attack; //handles player attack inputs
    this.ai; //handles ai movement + combat
    this.ent; //handles crate destructions (gibs?) 
    this.timer; //we should put a timer in a corner and if they survive for X amount of time, they should start a new round
    this.playercount; //number somewhere on screen indicating how many AI are left, and if 0 are left, should start a new round
    this.musicloop; //start music loop (feat. skrr bradshaw)
    this.ouch; //Handles listening for damage to player, also health manager (IE if health < 0; gameover)
    this.gameover; //Gameover screen, then return to main menu;
}

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
}

var s;

function create() {

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'bot');
    s.anchor.setTo(0.5, 0.5);
    s.scale.setTo(2, 2);

    s.animations.add('run');
    s.animations.play('run', 10, true);

}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.y += 4;
    }

}

function render() {
    game.debug.spriteInfo(s, 20, 32);
