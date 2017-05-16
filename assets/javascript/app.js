//removes start button when game is started
$("#start").on("click", function(){
	$("#start").remove();
	game.loadQuestion();
})

var questions = [
		 
		{	question: "Princess Zelda was inspired by this real life person:",
			answers: [ "Zelda Fitzgerald, novelist and wife of F.Scott Fitzgerald", // the correct answer
						"Zelda Nolte, known for her distinctive wood block art and scuplting",
						"Zelda Popkin, mystery novelist and creator of one of the first female private detectives in fiction",
						"Zelda Zonk, an alias used by Marilyn Monroe"
						],
			correctAnswer: "Zelda Fitzgerald",
			image: "assets/images/zeldas.png"
		},
		{	question:  "Link's Awakening was inspired by this 90s TV Series?",
			answers: [ "Twin Peaks", // correct answer. Takashi Tezuka "The drama was all about a small number of characters in a small town"
						"XFiles",
						"Boy Meets World",
						"Are You Afraid of the Dark"
					],
			correctAnswer: "Twin Peaks",
			image: "assets/images/twinpeaks.png"
		},
		{	question: "Which of these is not one of the Triforce?",
			answers: ["Courage",
						"Power",
						"Honor",
						"Wisdom"
					],
			correctAnswer: "Honor",
			image: "assets/images/triforce.png"
		},
		{	question: "The first Legend of Zelda game was released in what year?",
			answers:[	"1983",
						"1981",
						"1986",
						"1988"
					],
			correctAnswer: "1986",
			image:  "assets/images/firstZelda.jpg"
		},
		{	question: "What game system was the first Legend of Zelda released on?",
			answers: [	"Family Computer Disk System",
						"Sega Master System",
						"Nintendo Entertainment System",
						"Nintendo Atlantis"
					],
			correctAnswer: "Family Computer Disk System",
			image: "assets/images/famicon.jpg"
		},
		{ 	question: "Which of these is not one of the races in the Legend of Zelda series?",
			answers:[   "Goron",
					 	"Zora",
					 	"Goomba", 
					 	"Hylian"
					 	],
			correctAnswer: "Goomba",
			image: "assets/images/goomba.png"
		},
		{	question: "What is the name of Link's horse?",
			answers:[ 	"Epona", 
						"Equus",
						"Seabiscuit",
						"Agro"
						],
			correctAnswer: "Epona",
			image: "assets/images/epona.jpg"
		},
		{	question: "What is the name of the Zora Princess in Breath of the Wild",
			answers:[	"Princess Elena",
				    	"Princess Daphne",
				    	"Princess Mipha",
				    	"Princess Kitana"
				    	],
			correctAnswer: "Princess Mipha",
			image: "assets/images/mipha.png"
		},
		{	question: "What is the huge volcanic mountain in the Legend of Zelda series called?",
			answers:[ 	"Death Mountain", 
						"Aoraki Mountain",
						"Foraker Mountain",
						"Doom Mountain"
						],
			correctAnswer: "Death Mountain",
			image: "assets/images/deathmountain.jpg"
		},
		{	question:  	"These enemies are known for spitting rocks at Link:",
			answers:[	"Krakens",
					  	"Octoroks",
					  	"Leevers",
					  	"Tektites"
					  	],
			correctAnswer: "Octoroks",
			image: "assets/images/octorock.png"
		}
];

var game = {
	questions:questions,
	currentQuestion:0,
	counter: 30,
	correct: 0,
	incorrect: 0,
	unanswered: 0,

	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter <= 0){
			console.log("TIME UP");
			game.timeUp();
		}
	},
	loadQuestion: function(){
		timer = setInterval(game.countdown, 1000);
		$("#subwrapper").html("<h2 id='counter'>30</h2>");
		$("#subwrapper").append('<h2>'+ questions[game.currentQuestion].question+ '</h2>');
		for(var i = 0; i<questions[game.currentQuestion].answers.length; i++){
			$("#subwrapper").append('<button class="answer-button"	 id="button'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions.[game.currentQuestion].answers[i]+'</button>');
		}
	},
	nextQuestion: function(){
		game.counter = 30;
		$("#counter").html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();
	},
	timeUp: function(){
		clearInterval(timer);
		game.unanswered++;
		$("#subwrapper").html('<h2>out of time!</h2>');
		$("#subwrapper").append('<h3> The correct answer is: '+questions[game.currentQuestion].correctAnswer+'</h3>');
		if(game.currentQuestion==questions.length-1){
			setTimeout(game.results, 3000);
		} else {
			setTimeout(game.nextQuestion, 3000);
		}
	},
	results: function(){
		clearInterval(timer);
		$("#subwrapper").html("<h2>Done!</h2>");
		$("#subwrapper").append("<h3>Correct: " +game.correct+"</h3>");
		$("#subwrapper").append("<h3>Incorrect: "+ game.incorrect+"</h3>");
		$("#subwrapper").append("<h3>Unanswered: "+game.unanswered+"</h3>");
		$('#subwrapper').append("<button id='reset'>")

	},
	clicked: function(){
		clearInterval(timer);
		if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
			game.answerCorrectly();
		} else {
			game.answeredIncorrectly();
		}
	},
	answerCorrectly: function(){
		clearInterval(timer);
		game.correct++;
		$('subwrapper').html('<h2>Correct!</h2');
		if(game.currentQuestion==questions.length-1){
			setTimeout(game.results, 3000);
		} else {
			setTimeout(game.nextQuestion, 3000);
		}
	},
	answeredIncorrectly: function(){
		clearInterval(timer);
		game.incorrect++;
		$('#subwrapper').html('<h2>Incorrect!</h2');
		$('#subwrapper').append('<h3>The correct answer is: ' + questions[game.currentQuestion].correctAnswer+ '</h3>');
		if(game.currentQuestion==questions.length-1){
			setTimeout(game.results, 3000);
		} else {
			setTimeout(game.nextQuestion, 3000);
		}
	},
	reset: function(){
		game.currentQuestion = 0;
		game.counter = 0;
		game.correct = 0;
		game.incorrect = 0;
		game.unanswered = 0;
		game.loadQuestion();
	}

}




$(document).on('click', '.answer-button', function(e){
	game.clicked(e);
})

$(document).on('click', '#reset', function(){
	game.reset();
})