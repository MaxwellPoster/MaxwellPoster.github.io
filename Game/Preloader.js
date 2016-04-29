BattleWatch.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};
BattleWatch.Preloader.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,'preloaderbar','images/menu/loaderbar.png');
        this.preloadBar.anchor.setTo(0,0);
        this.titleText=this.add.image(this.world.centerX, this.world.centerY, 'titleimage','images/menu/Battle_Watch.png');
        this.scale.fullscreenscalemode = Phaser.ScaleManager.SHOW_ALL;
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        this.load.spritesheet('G1','images/G1.png');
        this.load.spritesheet('G2','images/G2.png');
        this.load.spritesheet('G3','images/G3.png');
        this.load.spritesheet('G4','images/G4.png');
        this.load.spritesheet('G5','images/G5.png');
        this.load.spritesheet('G6','images/G6.png');
        this.load.spritesheet('M1','images/M1.png');
        this.load.spritesheet('M2','images/M2.png');
        this.load.spritesheet('M3','images/M3.png');
        this.load.spritesheet('M4','images/M4.png');
        this.load.spritesheet('M5','images/M5.png');
        this.load.spritesheet('M6','images/M6.png');
        this.load.image('Axe','images/weapons/Axe.png');
        this.load.image('Axe_Bloody.png','images/weapons/Axe_Bloody.png');
        this.load.image('Sward.png','images/weapons/Sward.png');
        this.load.image('Sward_Bloody.png','images/weapons/Sward_Bloody.png');
    }
}