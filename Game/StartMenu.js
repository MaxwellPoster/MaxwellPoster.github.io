BattleWatch.StartMenu = function(game){
    this.startTitle;
    this.game;
    this.startGame;
    this.startCredits;
    this.startOption;
    game.pointerEvemts;
};
BattleWatch.StartMenu.prototype={
    create: function(){
        this.stage.backgroundColor = '#00FFFF'
        startTitle = this.add.image(0,0,'titleimage');
        startCredits =this.add.image(705,475,'Credit');
        game =this.add.image(705,395, 'Start');
        startOption =this.add.image(705,315, 'Option');
        game.inputEnabled = true;
        game.pointerEvents = this.startGame;
        
        
        
    },
    startGame: function (pointer) {
        game.image.scale(2,2);
    }
}