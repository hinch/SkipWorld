var skipWorld = skipWorld || {};

skipWorld.MainGame = function() {};

skipWorld.MainGame.prototype = {
    create: function() {
        this.game.add.sprite(0, 0, 'maingamebackground'); // add main background for game
		
    },
    update: function() {
    }
};