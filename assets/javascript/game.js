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
			winCounter: $("#winCounter"),
			lossCounter: $("#lossCounter"),
			targetScore: $("#targetScore"),
			totalScore: $("#totalScore"),
		},

		//Function to start game including assigning values to crystals, targetScore, etc.
		startGame: function() {
			this.totalScore = 0;
			this.targetScore = Math.floor(Math.random() * 102) +19;
			for (var i = 0; i < 4; i++) {
				this.crystalValues[i] = Math.floor(Math.random() * 12) + 1;
				this.crystalArray[i].attr("crystal-values", this.crystalValues[i]);
			};
			this.html.winCounter.text(this.wins);
			this.html.lossCounter.text(this.losses);
			this.html.targetScore.text(this.targetScore);
			this.html.totalScore.text(this.totalScore);
		},

		//Function to change values based on user clicking on crystals
		crystalClick: function() {
			this.html.totalScore.text(this.totalScore);
		},

		//Function for finishing a game
		finishGame: function() {
			if (this.totalScore === this.targetScore) {
				alert("You win!");
				this.wins++;
				this.html.winCounter.text(this.wins);
				this.startGame();
			} else if (this.totalScore > this.targetScore) {
				alert("You lose!");
				this.losses++;
				this.html.lossCounter.text(this.losses);
				this.startGame();
			};
		}

	};

	//Calling function to begin the game
	crystal.startGame();

	//Creating on click events for the crystals
	$(".crystals").on("click", function() {
		var crystalValue = $(this).attr("crystal-values");
		crystalValue = parseInt(crystalValue);
		crystal.totalScore += crystalValue;
		crystal.crystalClick();
		crystal.finishGame();
	});

});