BattleWatch.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
}
BattleWatch.Preloader.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.titleText=this.add.image(this.world.centerX, this.world.centerY -220, 'titleimage');
        this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'images/TitleBG.png');
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        game.load.spritesheet('G1','images/G1.png');
        game.load.spritesheet('G2','images/G2.png');
        game.load.spritesheet('G3','images/G3.png');
        game.load.spritesheet('G4','images/G4.png');
        game.load.spritesheet('G5','images/G5.png');
        game.load.spritesheet('G6','images/G6.png');
        game.load.spritesheet('M1','images/M1.png');
        game.load.spritesheet('M2','images/M2.png');
        game.load.spritesheet('M3','images/M3.png');
        game.load.spritesheet('M4','images/M4.png');
        game.load.spritesheet('M5','images/M5.png');
        game.load.spritesheet('M6','images/M6.png');
        this.load.image('Axe','images/Axe.png');
        this.load.image('Axe_Bloody.png','images/Axe_Bloody.png');
        this.load.image('Sward.png','images/Sward.png');
        this.load.image('Sward_Bloody.png','images/Sward_Bloody.png');
        this.load.titlemap('Map','images/tilemap/mapfin.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'images/tilemap/rpg_maker_vx_rtp_tileset_by_telles0808.png');
        this.load.image('tiles2','images/tilemap/steampunkish-tilec.png')
        var map;
        var layer;
    },
    tilemap: function create() {
        this.stage.backgroundColor = '#787878';
        map = game.add.tilemap('Map');
        map.addTilesetImage('BattleWatch', 'tiles');
        layer = map.createLayer('Level1');
        },
}