var questionAnswerOne;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0; 
var time = 15;
var timer; 


//Problem 1: Time starts running down
function decrement() {
    time--;
    $("#timer").html("<div>Time Remaining: " + time + "</div>");
    
    if (time === 0) {
        end(); 
        $("#gamePlay").html("<br/><div id='score'>All done!<br/>" +
                            "Correct Answers: " + correctAnswers + "<br/>" + 
                            "Incorrect Answers: " + incorrectAnswers + "<br/>" + 
                            "Unanswered: " + unanswered + "</div>");
      }
}; //decerement function end

function start() {
    timer = setInterval(decrement, 1000);
    
}; //start function end
start(); 

//Problem 4: If time runs out, score screen comes up


function end() {
    clearInterval(timer); 
    
};//end function end
 

//Once the Submit button is clicked I want to
function question(){
//Loop through each quesitons 
    $("input[name=inlineRadioOptions1]:checked").each(function() {
//Find hte value of each radio selected
        questionAnswerOne = $("input[name=inlineRadioOptions1]:checked").val();
            if (questionAnswerOne === "correct"){
                correctAnswers++
                console.log("correct" + correctAnswers); 
            } //if statement close
            else if (questionAnswerOne !== "correct") {
                incorrectAnswers++; 
                console.log("incorrect" + incorrectAnswers); 
            }; 
      
            

//if that radio === the correct radio
//correct answers increases
//if that radio !== the correct radio
//incorrect answers increases
//if no radio button is selected
//unaswered increases 
    });//loop end
};//question function ended







//question(); //run the question function 
//Problem 3: If last question is answered, score screen comes up
 