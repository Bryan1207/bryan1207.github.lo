// var answers = [1,2,3,4];
// var userAnswers = [2];
// var score;
// var answers = [];
var n = 0;
function increment(){

  n++;
  return n;
}
function incrementm(){

  m++;
  return m;
}

var m = 0;



	var questions = ["Which of these is another word for ninja?", "What is Samehada?", "How many tails does Kurama have?", "What's Naruto's mum's name?"]
	var answer1 = ["Genjutsu", "A Giant Possum", "4", "Carol"]
	var answer2 = ["Shinobi", "A talking Hat", "13", "Kurama"]
	var answer3 = ["Arigato", "A Mystical Sword", "It changes based on his mood", "Haruno"]
	var answer4 = ["Gelato", "Naruto's Dad", "4", "Kushina"]

	document.getElementById('Questions').innerHTML = (questions[n]);
	document.getElementById('radio1').innerHTML = (answer1[n]);
	document.getElementById('radio2').innerHTML = (answer2[n]);
	document.getElementById('radio3').innerHTML = (answer3[n]);
	document.getElementById('radio4').innerHTML = (answer4[n]);


function submitAnswer() { 
            var options = document.getElementsByName('answers'); 
              
            for(i = 0; i < options.length; i++) { 
                if(options[i].checked) 
                var answer = options[i].value;

                // var x = document.getElementById("result").innerHTML = "answer: "+x[i].value; 
            } 

            var node = document.createElement("LI");  // Create a <li> node
            node.id = "answer" + answer;
            var nodeid = document.createElement("id");             
			var textnode = document.createTextNode(answer);        // Create a text answer node
			node.appendChild(textnode);								// add textnode to node
			document.getElementById("answerBoard").appendChild(node);  // append node 
		} 

function appendNextQuestions (){
	document.getElementById('Questions').innerHTML = (questions[1+n]);
	document.getElementById('radio1').innerHTML = (answer1[1+n]);
	document.getElementById('radio2').innerHTML = (answer2[1+n]);
	document.getElementById('radio3').innerHTML = (answer3[1+n]);
	document.getElementById('radio4').innerHTML = (answer4[1+n]);
	
	if (n < 2) {
		increment();
	}
	if (m < 4) {
		incrementm();
	}

	if (m == 4) {
		alert("Quiz Finished")
	} 
}

//new function

function nextQuestion(){
			submitAnswer();
			appendNextQuestions();
}









// Question1 = "Genjutsu"
// Question2 = "Shinobi"
// Question3 = "Arigato"
// Question4 = "Gelato"

// document.getElementById('radio1').innerHTML = (Question1);
// document.getElementById('radio2').innerHTML = (Question2);
// document.getElementById('radio3').innerHTML = (Question3);
// document.getElementById('radio4').innerHTML = (Question4);


// function appendNextQuestions1 (){
// 	document.getElementById('radio1').innerHTML = (Question1);
// 	document.getElementById('radio2').innerHTML = (Question2);
// 	document.getElementById('radio3').innerHTML = (Question3);
// 	document.getElementById('radio4').innerHTML = (Question4);
// }




// var x = document.getElementById("radio1Q").value;
// console.log(x);