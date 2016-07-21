var skipWorld = skipWorld || {};

skipWorld.Preload = function() {};

skipWorld.Preload.prototype = {
    preload: function() {
        this.game.load.image('mainbackground', 'assets/mainbackground.png');
		this.game.load.image('main_new', 'assets/main_new_button.png');
		this.game.load.image('main_credits', 'assets/main_credits_button.png');
		this.game.load.image('creditsbackground', 'assets/creditsbackground.png');
		this.game.load.image('credits_return_to_main', 'assets/return_to_main_button.png');
    },
    create: function() {
        this.game.state.start('MainMenu');
    }
};