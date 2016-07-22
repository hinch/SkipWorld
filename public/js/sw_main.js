var skipWorld = skipWorld || {};

var gameDiv = document.getElementById("gamebody");

skipWorld.game = new Phaser.Game(gameDiv.clientWidth, gameDiv.clientHeight, Phaser.AUTO, 'gamebody');

skipWorld.game.state.add('Preload', skipWorld.Preload);
skipWorld.game.state.add('MainMenu', skipWorld.MainMenu);
skipWorld.game.state.add('MainCredits', skipWorld.MainCredits);
skipWorld.game.state.add('MainGame', skipWorld.MainGame);

skipWorld.game.state.start('Preload');