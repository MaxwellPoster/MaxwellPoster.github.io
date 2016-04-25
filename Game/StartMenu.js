BattleWatch.StartMenu = function(game){
    this.startBG;
};
BattleWatch.StartMenu.prototype={
    create: function(){
        startBG=this.add.image(0,0,'titlescreen');
    }
}