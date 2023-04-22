function addUser (){
    var Name1 = document.getElementById("player1_name").value;
    console.log(Name1);
    var Name2 = document.getElementById("player2_name").value;

    localStorage.setItem("Player1", Name1);
    localStorage.setItem("Player2", Name2);

window.location="gamepage.html";
}