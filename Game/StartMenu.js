BattleWatch.StartMenu = function (game) {
    this.startTitle;
    this.gamestart;
    this.startGame;
    this.startCredits;
    this.startOption;
};
BattleWatch.StartMenu.prototype={
    create: function(){
        this.stage.backgroundColor = '#00FFFF'
        startTitle = this.add.image(0,0,'titleimage');
        startCredits =this.add.button(705,475,'Credit',game.state.start('Credit'));
        gamestart =this.add.button(705,315,'Start',game.state.start('Game'));
        startOption =this.add.button(705,395,'Option',game.state.start('Option'));
        gamestart.inputEnabled = true;
        startOption.inputEnabled = true;
        startCredits.inputEnabled = true;
    }
    
}