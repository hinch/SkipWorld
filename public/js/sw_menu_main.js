var skipWorld = skipWorld || {};

skipWorld.MainMenu = function() {};

skipWorld.MainMenu.prototype = {
    create: function() {
        var menubackground = this.game.add.sprite(0, 0, 'mainbackground'); // add main background for game
		//get game width ratio vs texture size.
		var scaleRatio = gameDiv.clientWidth/menubackground.width;
		menubackground.scale.setTo(scaleRatio,scaleRatio);
		
		var versionText = this.game.add.text(this.game.world.width - 97, this.game.world.height - 47, '0.0.1', { fontSize: '12px', fill: '#000' });
		
		var new_game_button = this.game.add.button(213, 435, 'main_new',this.newGameClick,this); // add main background for game
		new_game_button.scale.setTo(0.45, 0.45);
		var credit_game_button = this.game.add.button(213, 480, 'main_credits',this.showCreditsClick,this); // add main background for game
		credit_game_button.scale.setTo(0.45, 0.45);
		
		mainbuttons = this.game.add.group(); // create button group
		//add buttons to group
		mainbuttons.add(new_game_button);
		mainbuttons.add(credit_game_button);
		//process clicks with catch all
		//this.input.onDown.add(clickButton, this);
    },
    update: function() {
        //if( nBack_frames > 0) {
        //    this.game.state.start('Game');
        //}
    },
    newGameClick: function() {
       this.game.state.start('MainGame');
    },
    showCreditsClick: function() {
       this.game.state.start('MainCredits');
    }
};