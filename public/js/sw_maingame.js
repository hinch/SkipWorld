var skipWorld = skipWorld || {};

skipWorld.MainGame = function() {};

skipWorld.MainGame.prototype = {
    create: function() {
		//arcade physics as we're falling elements
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 200;
		this.game.stage.backgroundColor = "#ffffff";
		//load environment
        var background_building = this.game.add.sprite(this.game.world.width-400, this.game.world.height - 300, 'maingame_background'); // add main background for game
		background_building.scale.setTo(0.5,0.5);
		var base_elements = this.game.add.group();
		var ground = base_elements.create(0, this.game.world.height - 40, 'maingame_floor');
		ground.scale.setTo(1,0.5);
		//ground.body.immovable = true;
		
		//randomly select skips to use and store which ones we've loaded so we can match falling items to skips
		var skips = this.game.add.group();
		skips.enableBody = false
    },
    update: function() {
    }
};