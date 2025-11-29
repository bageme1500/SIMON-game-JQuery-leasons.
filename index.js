var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedButton = [];
var gamePattern = [];
var level = 0;

// Click handler (attach once)
$(".btn").click(function() {
    var clickedButtonId = $(this).attr("id");
    userClickedButton.push(clickedButtonId);

    // Button animation
    $("#" + clickedButtonId).fadeOut(100).fadeIn(100);
    $("#" + clickedButtonId).addClass("pressed");
    setTimeout(function() {
        $("#" + clickedButtonId).removeClass("pressed");
    }, 100);

    // Play sound
    var audio = new Audio("sounds/" + clickedButtonId + ".mp3");
    audio.play();

    checkAnswer(userClickedButton.length - 1);
});

// Keypress to start game
$(document).keypress(function() {
    if(level === 0){
        nextSequence();
    }
});

// Generate next sequence
function nextSequence() {
    userClickedButton = [];
    level++;
    $("h1").text("Level: " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Animate sequence button
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    $("#" + randomChosenColor).addClass("pressed");
    setTimeout(function() {
        $("#" + randomChosenColor).removeClass("pressed");
    }, 100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

// Check user answer
function checkAnswer(currentLevel) {
    if(userClickedButton[currentLevel] === gamePattern[currentLevel]){
        if(userClickedButton.length === gamePattern.length){
            setTimeout(nextSequence, 1000);
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").text("Game Over! Press any key to restart.");
        startOver();
    }
}

// Reset game
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedButton = [];
}
