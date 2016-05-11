BattleWatch.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};
BattleWatch.Preloader.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,'preloaderbar');
        this.preloadBar.anchor.setTo(0,0);
        this.titleText=this.add.image(this.world.centerX, this.world.centerY, 'titleimage','images/menu/Battle_Watch.png');
        this.scale.fullscreenscalemode = Phaser.ScaleManager.SHOW_ALL;
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        this.load.spritesheet('G1','images/characters/G1.png');
        this.load.spritesheet('G2','images/characters/G2.png');
        this.load.spritesheet('G3','images/characters/G3.png');
        this.load.spritesheet('G4','images/characters/G4.png');
        this.load.spritesheet('G5','images/characters/G5.png');
        this.load.spritesheet('G6','images/characters/G6.png');
        this.load.spritesheet('M1','images/characters/M1.png');
        this.load.spritesheet('M2','images/characters/M2.png');
        this.load.spritesheet('M3','images/characters/M3.png');
        this.load.spritesheet('M4','images/characters/M4.png');
        this.load.spritesheet('M5','images/characters/M5.png');
        this.load.spritesheet('M6','images/characters/M6.png');
        this.load.image('Axe','images/weapons/Axe.png');
        this.load.image('Axe_Bloody','images/weapons/Axe_Bloody.png');
        this.load.image('Sward','images/weapons/Sward.png'); this.load.image('Sward_Bloody','images/weapons/Sward_Bloody.png');
        this.state.start('StartMenu');
        }
    }