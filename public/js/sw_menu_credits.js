var skipWorld = skipWorld || {};

skipWorld.MainCredits = function() {};

skipWorld.MainCredits.prototype = {
    create: function() {
		this.game.add.sprite(0, 0, 'creditsbackground'); // add main background for game
		
		this.game.add.text(213, this.game.world.height - 300, 'Design: Me', { fontSize: '32px', fill: '#000' });
		this.game.add.text(213, this.game.world.height - 260, 'Programming: Me', { fontSize: '32px', fill: '#000' });
		this.game.add.text(213, this.game.world.height - 220, 'Made using Phaser', { fontSize: '32px', fill: '#000' });
		this.game.add.text(213, this.game.world.height - 180, 'Copyright Go Green Ltd 2016', { fontSize: '20px', fill: '#000' });
		
		var credits_return_to_main_button = this.game.add.button(213, 480, 'credits_return_to_main',this.returnToMainMenu,this); // add main background for game
		credits_return_to_main_button.scale.setTo(0.5, 0.5);
    },
    update: function() {
    },
    returnToMainMenu: function() {
        this.game.state.start('MainMenu');
    }
};