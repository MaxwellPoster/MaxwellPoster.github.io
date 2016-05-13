BattleWatch.StartMenu = function(game){
    this.startTitle;
    this.gamestart;
    this.startGame;
    this.startCredits;
    this.startOption;
    game.pointerEvemts;
};
BattleWatch.StartMenu.prototype={
    create: function(){
        this.stage.backgroundColor = '#00FFFF'
        startTitle = this.add.image(0,0,'titleimage');
        startCredits =this.add.button(705,475,'Credit');
        gamestart =this.add.button(705,395,'Start');
        startOption =this.add.button(705,315, 'Option');
        gamestart.inputEnabled = true;
        startOption.inputEnabled = true;
        startCredits.inputEnabled = true;
    }
}