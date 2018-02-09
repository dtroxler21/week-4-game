$(document).ready(function() {

	//Creating object with properties for the game
	var crystal = {
		targetScore: "",
		totalScore: "",
		wins: 0,
		losses: 0,
		crystalValues: [],
		crystalArray: [$("#blueCrystal"), $("#diamondCrystal"), $("#greenCrystal"), $("#yellowCrystal")],

		//Creating connection to html for later
		html: {
			winCounter: $("#js-wins"),
			lossCounter: $("#js-losses"),
			targetScore: $("#js-target-score"),
			totalScore: $("#js-total-score"),
		},

		//Function to start game including assigning values to crystals, targetScore, etc.
		startGame: function() {
			crystal.totalScore = 0;
			crystal.targetScore = Math.floor(Math.random() * 102) +19;
			for (var i = 0; i < 4; i++) {
				crystal.crystalValues[i] = Math.floor(Math.random() * 12) + 1;
				crystal.crystalArray[i].attr("crystal-values", crystal.crystalValues[i]);
			};
			crystal.html.winCounter.text(crystal.wins);
			crystal.html.lossCounter.text(crystal.losses);
			crystal.html.targetScore.text(crystal.targetScore);
			crystal.html.totalScore.text(crystal.totalScore);
		},

		//Function to change values based on user clicking on crystals
		crystalClick: function() {
			crystal.html.totalScore.text(crystal.totalScore);
		},

		//Function for finishing a game
		finishGame: function() {
			if (crystal.totalScore === crystal.targetScore) {
				alert("You win!");
				crystal.wins++;
				crystal.html.winCounter.text(crystal.wins);
				crystal.startGame();
			} else if (crystal.totalScore > crystal.targetScore) {
				alert("You lose!");
				crystal.losses++;
				crystal.html.lossCounter.text(crystal.losses);
				crystal.startGame();
			};
		}

	};

	//Calling function to begin the game
	crystal.startGame();

	//Creating on click events for the crystals
	$(".crystals").on("click", function() {
		var crystalValue = $(crystal).attr("crystal-values");
		crystalValue = parseInt(crystalValue);
		crystal.totalScore += crystalValue;
		crystal.crystalClick();
		crystal.finishGame();
	});

});