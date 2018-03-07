var questionAnswer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0; 
var time = 120;
var timer; 


function decrement() {//decrement function to run clock down
    time--;
    $("#timer").html("<div>Time Remaining: " + time + "</div>");
    if (time === 0) {
        end(); 
        
      }
}; //decerement function end

function start() {
    timer = setInterval(decrement, 1000);
    
}; //start function end
start(); //calling start function 
question(); //calling question function 

function notAnswered() {//used to calculate not answered questions 
    var result = correctAnswers + incorrectAnswers
    if (result < 10){
        unanswered = 10 - (result); 
    }
};//unanswered function end

function question(){//loop through each answer to identify those that are checked
    $(".rb").each(function() {
        if( $(this).is(":checked")) { // check if the radio is checked
            var questionAnswer = $(this).val(); // retrieve the value
        
         if (questionAnswer === "correct"){//if correct, correct answers increases
             correctAnswers++
    
         } //if statement close
         else if (questionAnswer !== "correct") {//if not correct, incorrect answeres increases
             incorrectAnswers++; 
             
         }
         notAnswered(); //calls not answered function to calculate not answered questions 
                  
        }//if check loop end
    });//loop end
};//question function ended


function end() {//end of game when score board is revealed 
    clearInterval(timer); 
    question(); 
    notAnswered(); 
    $("#gamePlay").html("<br/><div id='score'>All done!<br/>" +
                            "Correct Answers: " + correctAnswers + "<br/>" + 
                            "Incorrect Answers: " + incorrectAnswers + "<br/>" + 
                            "Unanswered: " + unanswered + "</div>");
    
};//end function end

