$(document).ready(function() {

	//Creating object with properties for the game
	var crystal = {
		targetScore: "",
		totalScore: 0,
		wins: 0,
		losses: 0,
		crystalValues: [],
		crystalArray: ["./assets/images/blue-crystal.png","./assets/images/diamond-crystal.png", "./assets/images/green-crystal.png", "./assets/images/yellow-crystal.png"],

		//Creating connection to html for later
		html: {
			winCounter: $("#js-wins"),
			lossCounter: $("#js-losses"),
			targetScore: $("#js-target-score"),
			totalScore: $("#js-total-score"),
		},

		//Function to start game including assigning values to crystals, targetScore, etc.
		startGame: function() {
			console.log(crystal.totalScore);
			crystal.totalScore = 0;
			crystal.targetScore = Math.floor(Math.random() * 102) +19;
			crystal.crystalValues = [];
			$("#crystalPics").empty();	
			for (var i = 0; i < 4; i++) {
				crystal.crystalValues.push(Math.floor(Math.random() * 12) + 1);
				console.log(crystal.crystalValues[i]);
				console.log(crystal.crystalArray[i]);
				
			};

			//Dynamically creating my crystal images after assigning values to them
			for (var i = 0; i < 4; i++) {			
				var crystalImage = $("<img class='crystals'>");
				crystalImage.attr("src", crystal.crystalArray[i]);
				crystalImage.attr("value", crystal.crystalValues[i]);
				$("#crystalPics").append(crystalImage);
			};

			console.log(crystal.crystalValues);
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
	$("#crystalPics").on("click", ".crystals", function() {
		console.log(crystal.totalScore);
		var crystalValue = $(this).attr("value");
		crystalValue = parseInt(crystalValue);
		crystal.totalScore += crystalValue;
		console.log(crystalValue);
		console.log(crystal.totalScore);
		crystal.crystalClick();
		crystal.finishGame();
	});

});