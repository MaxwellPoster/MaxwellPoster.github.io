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
        gamestart.inputEnabled = true;
        startOption.inputEnabled = true;
        startCredits.inputEnabled = true;
    }
    
}