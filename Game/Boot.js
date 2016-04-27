var BattleWatch = {};
BattleWatch.boot=function(game) {};
BattleWatch.boot.prototype = {
    preload: function () {
        this.load.image('preloaderBar', 'images/loader_bar.png');
        this.load.image('titleimage', 'images/title_image.png')
    },
    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scalemode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 1440;
        this.scale.minHeight = 900;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);
        
        this.input .addPointer();
        this.stage.backgroundColor = '#900C3F';
        
        this.state.start('Preloader');
    }
};
