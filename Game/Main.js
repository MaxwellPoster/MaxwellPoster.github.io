var BattleWatch = BattleWatch || {};
BattleWatch.game = new Phaser.Game(1440,900, Phaser.AUTO, '');
BattleWatch.game.state.add('Boot', BattleWatch.Boot);
BattleWatch.game.state.add('Preloader', BattleWatch.Preloader);
BattleWatch.game.state.add('StartMenu', BattleWatch.StartMenu);
BattleWatch.game.state.add('Game', BattleWatch.Game);
BattleWatch.game.state.start('Boot');