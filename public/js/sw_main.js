var skipWorld = skipWorld || {};

skipWorld.game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamebody');

skipWorld.game.state.add('Preload', skipWorld.Preload);
skipWorld.game.state.add('MainMenu', skipWorld.MainMenu);
skipWorld.game.state.add('MainCredits', skipWorld.MainCredits);
skipWorld.game.state.add('MainGame', skipWorld.MainGame);
//skipWorld.game.state.add('Game', skipWorld.Game);

skipWorld.game.state.start('Preload');