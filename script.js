// if we click on the start/reset
var playing = false;
var score;
var action;
var timeremain;
var correctAnswer;
document.getElementById('startreset').onclick = function() {
	// if we are playing
	if(playing == true) {
		location.reload(); // reload page
		 // if we are not playing 
	} else {
		// change mode to playing
        playing = true;
         // set score to 0
		score = 0;
		document.getElementById('score-value').innerHTML = score;
        // show countdown box
		show("timeRemain");
        timeremain = 60;
        document.getElementById('time').innerHTML = timeremain;

        // hide game over box 
        hide("gameOver");

         // change button to reset

         document.getElementById('startreset').innerHTML = 'Reset Game';

         // start countdown
         startCountdown(); 

         // generate a new Q&A

         generateQA();
	}
}
         // reduce time by 1sec in loops

         // timeleft:
          // yes-> continue 
          // no -> gameover
         
          // generate new question


for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("score-value").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
 }   
}
   // if we click an answer box 
      // if we playing
         // correct?
           // yes
               //increase score
               // show correct box for 1 sec
               // generate new Q&A
               // no
                 // show try again box for 1 sec


// functions

// start counter

function startCountdown() {
    action = setInterval(function() {
        timeremain -= 1;
     document.getElementById('time').innerHTML = timeremain;
     if(timeremain == 0) {
        // game over
        stopCountdown();
        show("gameOver");
        document.getElementById('gameOver').innerHTML = "<p>Game Over!</p><Your Score is " + score + ".</p>";

        hide("timeRemain");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById('startreset').innerHTML = "Start Game";
     }
    },1000)
}

// stop counter

function stopCountdown() {
    clearInterval(action);

}

// hide an element 

function hide(id) {
    document.getElementById(id).style.display = "none";
}

// show an element

function show(id) {
    document.getElementById(id).style.display = "block";
}

// generate question and multiple answers

function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3* Math.random());
     document.getElementById('box'+correctPosition).innerHTML = correctAnswer;
     // fill one box with correct answer

     // fill them with wrong answers

    var answers = [correctAnswer];

     for(i=1; i<5; i++) {
        if(i != correctPosition) {
            var wrongAnswer;

            do {
                 wrongAnswer = (1 + Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            }
            while(answers.indexOf(wrongAnswer)>-1) {
               document.getElementById("box"+ i).innerHTML = wrongAnswer;
               answers.push(wrongAnswer);
            }
        }
     }
}

