var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence(){
  var randomNumber =Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();

  $(".btn").click(function() {
  var clickedButtonId = $(this).attr("id");
  $(this).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + clickedButtonId + ".mp3");
  audio.play();

});


}

$(document).keypress(function() {
  nextSequence();
});



// switch (randomChosenColor) {
//   case "red":
//     alert("color is red")
//     break;
//
//   case "blue":
//     alert("color is blue")
//     break;
//
//   case "green":
//     alert("color is green")
//     break;
//
//   case "yellow":
//         alert("color is yellow")
//         break;
//   default:
//
// }
