BattleWatch.StartMenu = function(game){
    this.startBG;
};
BattleWatch.StartMenu.prototype={
    create: function(){
        this.stage.backgroundColor = '#00FFFF'
        startBG =this.add.image(0,0,'titleimage'),
            this.add.image(705,475,'Credit'),
            this.add.image(705,395, 'Start')
            this.add.image(705,315, 'Option');
        
        
    }
}