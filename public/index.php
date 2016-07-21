<!DOCTYPE html>
<head>
<title>Skip World</title>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1">
	<link rel="stylesheet" href="css/main.css" type="text/css" />
	<script src="js/phaser.js"></script>
	<script src="js/sw_preload.js"></script>
	<script src="js/sw_menu_main.js"></script>
	<script src="js/sw_menu_credits.js"></script>
	<script src="js/sw_maingame.js"></script>
</head>
<body>

<div name="gamebody" id="gamebody"></div>
<script src = "js/sw_main.js"></script>
</body>
</html>
<script>
/*
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
*/
</script>