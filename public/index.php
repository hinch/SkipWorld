<!DOCTYPE html>
<head>
<title>Skip World</title>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1">
	<link rel="stylesheet" href="css/main.css" type="text/css" />
	<script src="js/phaser.js"></script>
</head>
<body>

<div name="gamebody" id="gamebody"></div>

</body>
</html>
<script>
//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamebody', { preload: preload, create: create, update: update });
window.onload = function() {	        
	game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamebody');
	game.state.add("mainMenu",mainMenu);
	game.state.add("mainCredits",mainCredits);
	game.state.start("mainMenu");
}


var mainMenu = function(game) {}
mainMenu.prototype = {
	preload: function() {
		game.load.image('mainbackground', 'assets/mainbackground.png');
		game.load.image('main_new', 'assets/main_new_button.png');
		game.load.image('main_credits', 'assets/main_credits_button.png');
	},
	create: function() {
		game.add.sprite(0, 0, 'mainbackground'); // add main background for game
		
		var versionText = game.add.text(game.world.width - 97, game.world.height - 47, '0.0.1', { fontSize: '12px', fill: '#000' });
		
		var new_game_button = game.add.sprite(213, 435, 'main_new'); // add main background for game
		new_game_button.scale.setTo(0.45, 0.45);
		var credit_game_button = game.add.sprite(213, 480, 'main_credits'); // add main background for game
		credit_game_button.scale.setTo(0.45, 0.45);
		
		mainbuttons = game.add.group(); // create button group
		//add buttons to group
		mainbuttons.add(new_game_button);
		mainbuttons.add(credit_game_button);
		//process clicks with catch all
		game.input.onDown.add(clickButton, this);
	},
	update: function () {
		
	}
}
var mainCredits = function(game) {}
mainCredits.prototype = {
	preload: function() {
		game.load.image('creditsbackground', 'assets/creditsbackground.png');
		game.load.image('credits_return_to_main', 'assets/return_to_main_button.png');
	},
	create: function() {
		game.add.sprite(0, 0, 'creditsbackground'); // add main background for game
		
		game.add.text(213, game.world.height - 300, 'Design: Me', { fontSize: '32px', fill: '#000' });
		game.add.text(213, game.world.height - 260, 'Programming: Me', { fontSize: '32px', fill: '#000' });
		game.add.text(213, game.world.height - 220, 'Made using Phaser', { fontSize: '32px', fill: '#000' });
		game.add.text(213, game.world.height - 180, 'Copyright Go Green Ltd 2016', { fontSize: '20px', fill: '#000' });
		
		var credits_return_to_main_button = game.add.sprite(213, 480, 'credits_return_to_main'); // add main background for game
		credits_return_to_main_button.scale.setTo(0.5, 0.5);
		//process clicks with catch all
		game.input.onDown.add(clickButton, this);
	},
	update: function () {
		
	}
}


function clickButton() {
	//current mouse coords
	startX = game.input.worldX;
	startY = game.input.worldY;
	currentstate = game.state.current;
	console.debug("Current X:"+startX+" Current Y:"+startY);
	if (currentstate === "mainMenu") {  // we're on the main menu
		if (startX>=213 && startX<=305) {
			if (startY>=435 && startY<=470) { // new button
				alert("New Clicked");
			}
			if (startY>=480 && startY<=515) { // credits button button
				game.state.start("mainCredits",true,false);
			}
		}
	} else if (currentstate === "mainCredits"){
		if (startX>=213 && startX<=310) {
			if (startY>=480 && startY<=520) { // menu button
				game.state.start("mainMenu",true,false);
			}
		}
	}
}

</script>