

//Set global variables
var index = 0
var timeleft = 10;
var correctCount = 0
var incorrectCount = 0

function reset(){
    searchTrivia();
    clearInterval(downloadTimer);
    startClock();
}

//Here is the API. I am going to call, get a response, then attach it directly to the HTML buttons or to a Array and then attach 
//the elements individually using a for each function.

function searchTrivia() {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response.results);
   var questionArray = []
    var incorrectArray = []
    var correctArray = []
    for (i = 0; i <response.results.length; i++) {
        incorrectArray.push(response.results[i].incorrect_answers)
        correctArray.push(response.results[i].correct_answer)
        questionArray.push(response.results[i].question)
       
    }
    
   console.log(correctArray);
   console.log(incorrectArray);
   console.log(questionArray);



        // Constructing HTML containing the question  information
      $(".question").text(questionArray[index]);
      $("#answer1").text(correctArray[index]);
      $("#answer2").text(incorrectArray[index]);

      $("#answer3").text(incorrectArray[index]);
      $("#answer4").text(incorrectArray[index]);
    });
};
    searchTrivia();

    function startClock(){
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    $(".countdowntimer").text(timeleft);
    if(timeleft <= 0){
        clearInterval(downloadTimer)
        ++lossCount
        $("#loss-count").HTML(lossCount);
        reset();}
    },1000);
};

startClock();



/*var endGame = function() {
    if (.click === correctArray[index]) {
    alert ("You Won!");
    winCount++;
    reset();
    } 
    else {
    alert ("You lost!");
    losscount++;
    $("loss-count").innerHTML(lossCount);
    reset();
    }

    
};*/
