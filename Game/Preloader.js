BattleWatch.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};
BattleWatch.Preloaderl.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.titleText=this.add.image(this.world.centerX, this.world.centerY -220, 'titleimage');
        this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'images/TitleBG.png');
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        this.load.image('G1','images/G1.png');
        this.load.image('G2','images/G2.png');
        this.load.image('G3','images/G3.png');
        this.load.image('G4','images/G4.png');
        this.load.image('G5','images/G5.png');
        this.load.image('G6','images/G6.png');
        this.load.image('M1','images/M1.png');
        this.load.image('M2','images/M2.png');
        this.load.image('M3','images/M3.png');
        this.load.image('M4','images/M4.png');
        this.load.image('M5','images/M5.png');
        this.load.image('M6','images/M6.png');
        this.load.image('Axe','images/Axe.png');
        this.load.image('Axe_Bloody.png','images/Axe_Bloody.png');
        this.load.image('Sward.png','images/Sward.png');
        this.load.image('Sward_Bloody.png','images/Sward_Bloody.png');
        this.load.image('rpg_maker_vx_rtp_tileset_by_telles0808.png,' 'images/rpg_maker_vx_rtp_tileset_by_telles0808.png');
        this.load.image('steampunkish-tilec.png','images/steampunkish-tilec.png');
        this.game.load.titlemap('Map','images/tilemap/mapfin.json');
    },
    function create() {
    
}
}