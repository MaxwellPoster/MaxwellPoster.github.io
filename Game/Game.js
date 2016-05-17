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
    
}