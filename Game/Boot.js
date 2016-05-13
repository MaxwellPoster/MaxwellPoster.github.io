var BattleWatch = {};
BattleWatch.Boot=function(game) {};
BattleWatch.Boot.prototype = {
    preload: function () {
        this.load.image('preloaderBar', 'images/menu/loaderbar.png');
        this.load.image('titleimage', 'images/menu/Battle_Watch.png');
        this.load.image('Start', 'images/menu/start.png');
        this.load.image('Menu', 'images/menu/menu.png');
        this.load.image('Credit', 'images/menu/credit.png');
        this.load.image('Option', 'images/menu/options.png');
    },
    create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scalemode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 1080;
        this.scale.minHeight = 675;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize=true;
        
        this.input .addPointer();
        this.stage.backgroundColor = '#900C3F';
        
        this.state.start('Preloader');
    },
}
