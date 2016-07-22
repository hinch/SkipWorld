var skipWorld = skipWorld || {};

skipWorld.Preload = function() {};

skipWorld.Preload.prototype = {
    preload: function() {
		this.game.renderer.renderSession.roundPixels = true;
        //menu and misc art
		this.game.load.image('mainbackground', 'assets/mainbackground.png');
		this.game.load.image('main_new', 'assets/main_new_button.png');
		this.game.load.image('main_credits', 'assets/main_credits_button.png');
		this.game.load.image('creditsbackground', 'assets/creditsbackground.png');
		this.game.load.image('credits_return_to_main', 'assets/return_to_main_button.png');
		//main game art
		this.game.load.image('maingame_background', 'assets/building.png');
		this.game.load.image('maingame_floor', 'assets/floor.png');
		this.game.load.image('falling_banana', 'assets/banana.png');
		this.game.load.image('falling_bricks', 'assets/bricks.png');
		this.game.load.image('falling_log', 'assets/log.png');
		this.game.load.image('falling_paint', 'assets/paint.png');
		this.game.load.image('falling_tap', 'assets/tap.png');
		this.game.load.image('skip_mixed', 'assets/skip.png');
		this.game.load.image('skip_banana', 'assets/skip_banana.png');
		this.game.load.image('skip_bricks', 'assets/skip_bricks.png');
		this.game.load.image('skip_log', 'assets/skip_log.png');
		this.game.load.image('skip_paint', 'assets/skip_paint.png');
		this.game.load.image('skip_tap', 'assets/skip_tap.png');
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};