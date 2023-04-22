var Player1 = localStorage.getItem("Player1");
var Player2 = localStorage.getItem("Player2");

document.getElementById("player1_name").innerHTML = Player1 + " : ";
document.getElementById("player2_name").innerHTML = Player2 + " : ";

var Score1 = 0;
var Score2 = 0;

document.getElementById("score1").innerHTML = Score1;
document.getElementById("score2").innerHTML = Score2;

document.getElementById("question").innerHTML = "turn to ask: " + Player1;
document.getElementById("answer").innerHTML = "turn to answer: " + Player2;
var word;
function send() {
  word = document.getElementById("word").value;
  word = word.toLowerCase();
  console.log("prueba: " + word);

  var letter1 = word.charAt(1);
  console.log(letter1);

  var index = Math.floor(word.length / 2);
  var letter2 = word.charAt(index);
  console.log(letter2);

  var index = word.length - 1;
  var letter3 = word.charAt(index);
  console.log(letter3);

  var remove1 = word.replace(letter1, "_");
  var remove2 = remove1.replace(letter2, "_");
  var remove3 = remove2.replace(letter3, "_");
  console.log(remove3);

  var question = "<h4 id='word_display'> Adivina. " + remove3 + "</h4>";
  var input = "<br>Answer : <input type='text' id='input_check_box'>";
  var check = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";

  document.getElementById("output").innerHTML = question + input + check;
  document.getElementById("word").value = "";
}
var question_turn = "player1";
var answer_turn = "player2";

function check() {
  var answer = document.getElementById("input_check_box").value;
  answer = answer.toLowerCase();
  console.log("Answer: " + answer);

  if (answer == word) {
    if (answer_turn == "player1") {
      Score1 = Score1 + 1;
      document.getElementById("score1").innerHTML = Score1;

    }
    if (answer_turn == "player2") {
      Score2 = Score2 + 1;
      document.getElementById("score2").innerHTML = Score2;
    }
  }
  if (answer_turn == "player2") {
    answer_turn = "player1";
    document.getElementById("question").innerHTML = "Turn to ask: " + Player2;
    document.getElementById("answer").innerHTML = "Turn to answer: " + Player1;
  }
else {

  
    answer_turn = "player2";

    document.getElementById("question").innerHTML = "Turn to ask: " + Player1;
    document.getElementById("answer").innerHTML = "Turn to answer: " + Player2;
  }
}
