// all javascript and jQuery goes here
$("#start").on("click", function(){
	$("#start").remove();
})

//array of question & answer objects

var triviaQuestions = [
		 
		{	question: "Princess Zelda was inspired by this real life person:",
			answers: [ "Zelda Fitzgerald, novelist and wife of F.Scott Fitzgerald", // the correct answer
						"Zelda Nolte, known for her distinctive wood block art and scuplting",
						"Zelda Popkin, mystery novelist and creator of one of the first female private detectives in fiction"
						"Zelda Zonk, an alias used by Marilyn Monroe"
						],
			correctAnswer: "Zelda Fitzgerald",
			image: "assets/images/zeldas.png"
		},
		{	question:  "Link's Awakening was inspired by this 90s TV Series",
			answers: [ "Twin Peaks", // correct answer. Takashi Tezuka "The drama was all about a small number of characters in a small town"
						"XFiles",
						"Boy Meets World",
						"Are You Afraid of the Dark",

		question3 = "Which of these is not one of the Triforce"
		answers3 = "Courage"
					"Power"
					"Honor"// correct answer
					"Wisdom"

		question4 = "The first Legend of Zelda game was released in what year?"
		answers4 = "1983"
					"1981"
					"1986"// correct answer
					"1988"
		question5 = "What game system was the first Legend of Zelda released on?"
		answer5  =  "Family Computer Disk System"
					"Sega Master System"
					"Nintendo Entertainment System"
					"Nintendo Atlantis"
		question6 = "Which of these is not one of the races in the Legend of Zelda series?"
		answers6  =  "Goron"
					 "Zora"
					 "Goomba" // correct answer
					 "Hylian"
		question7 = "What is the name of Link's horse?"
		answers7  = "Epona" // correct answer
					"Equus"
					"Seabiscuit"
					"Agro"
		question8 = "What is the name of the Zora Princess in Breath of the Wild?"
		answers8  = "Princess Elena"
				    "Princess Daphne"
				    "Princess Mipha"
				    "Princess Kitana"
		question9 = "What is the huge volcanic mountain in the Legend of Zelda series called?"
		answers9  = "Death Mountain" //correct answer
					"Aoraki Mountain"
					"Foraker Mountain"
					"Doom Mountain"
		question10 = "These enemies are known for spitting rocks at Link"
					  "Krakens"
					  "Octoroks"//correct answer
					  "Leevers"
					  "Tektites"


]

console.log(triviaQuestions[0].question1.questionOne);
