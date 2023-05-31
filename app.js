var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Kolik by mělo mít heslo minimálně znaků?",
		"options" : [
			{"a": "8", 
			 "b":"5", 
			 "c":"6", 
			 "d":"10"}
			],
		"answer":"8",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Když budemem mít tohle heslo: silneheslo - co můžeme udělat, aby bylo silnější?",
		"options" : [
			{"a": "Napsat místo e 3,i 1 a o 0, nebo nějak podobně.(s1ln3h3sl0)", 
			 "b":"Přidat speciální znaky a kombinovat velká a malá písmena.(Silne.Hes_lo)", 
			 "c":"Obě dvě předchozí dohromady. (S1ln3.H3s_l0)"}
			],
		"answer":"Obě dvě předchozí dohromady. (S1ln3.H3s_l0)",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Dnes ráno vám píše policie, že jim máte ihned zaplatit na stránkách http://polycie.dn. Co v tuto chvíli uděláte.",
		"options" : [
			{"a": "Poslechnu zprávu a zaplatím.", 
			 "b":"Budu se s nima hádat, že nic platit nebudu.", 
			 "c":"Nahlásím tento incident policii, protože url adresa nepatří Policii ČR a jedná se asi o podvod."}
			],
		"answer":"Nahlásím tento incident policii, protože url adresa nepatří Policii ČR a jedná se asi o podvod.",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Měl bych nahlásit výskyt kyberšikany na v okolí?",
		"options" : [
			{"a":"Ano, je potřeba tomu zamezit.", 
			 "b":"Ne, nemělo by mě to zajímat."
			}
			],
		"answer":"Ano, je potřeba tomu zamezit.",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Co je to Spear Phishing?",
		"options" : [
			{"a":"Cílený útok, na osobu za pomocí emailu nebo zprávy.", 
			 "b":"Druh škodlivého kódu.",
			 "c":"Druh kyberšikany, kdy je člověk obětí přímých útoků."
			}
			],
		"answer":"Cílený útok, na osobu za pomocí emailu nebo zprávy.",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Co je to trojský kůň?",
		"options" : [
			{"a":"Člověk provozující druh sociálního inženýrství.", 
			 "b":"Škodlivý kód, skrýty v legitimním souboru.",
			 "c":"Metafora pro druh tvorby hesel."
			}
			],
		"answer":"Škodlivý kód, skrýty v legitimním souboru.",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Je nebezpečný internet?",
		"options" : [
			{"a":"Ano", 
			 "b":"Ne",
			}
			],
		"answer":"Ano",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Je bezpečné stahovat zpirátěné soubory?",
		"options" : [
			{"a":"Ano", 
			 "b":"Ne",
			}
			],
		"answer":"Ano",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Ozve se miprávník, že jsem zdědil miliony po příbuzném, ale musím mu dát přihlašovací údaje k bankovnímu účtu. Navíc na to mám jen 3 dny. Jak se zachovám?",
		"options" : [
			{"a":"Dám mu ihned údaje, přece jen dostanu peníze.", 
			 "b":"Nedám mu žádné údaje.",
			}
			],
		"answer":"Nedám mu žádné údaje.",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Líbil se ti kvíz?",
		"options" : [
			{"a":"Ano", 
			 "b":"Ne",
			}
			],
		"answer":"Ano",
		"score":0,
		"status": ""
	},
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header' style='color:white'>Celkové skóre: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question" style="color:white"><span>Otázka č. ' + quiz.JS[j].id + ':</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div style="color:white"><b>Správná odpověď:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row" style="color:white" ><b>Skóre:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



