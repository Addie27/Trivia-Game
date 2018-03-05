var questionAnswer
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0; 
var time = 5;
var timer;

//Problem 1: Time starts running down
function start() {
    clearInterval(timer);
    timer = setInterval(decrement, 1000);
}; //start function end
start(); 

function end() {
    
    clearInterval(timer);

}; //stop function end

//Problem 4: If time runs out, score screen comes up
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



//Once the Submit button is clicked I want to
function question(){
    clearInterval(timer);
    end(); 
//Loop through each quesitons 
$( ".radio-inline" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
//Find hte value of each radio selected
//if that radio === the correct radio
//correct answers increases
//if that radio !== the correct radio
//incorrect answers increases
//if no radio button is selected
//unaswered increases 
};//question function ended







//question(); //run the question function 
//Problem 3: If last question is answered, score screen comes up
 