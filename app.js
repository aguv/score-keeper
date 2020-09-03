let player1 = document.getElementById("score-player1");
let player2 = document.getElementById("score-player2");
let buttonLimit = document.getElementById("changeLimit");
let buttonPlayer1 = document.getElementById("button1");
let buttonPlayer2 = document.getElementById("button2");
let buttonRestart = document.getElementById("restart-button");
let player1Header = document.getElementById("header-player1");
let player2Header = document.getElementById("header-player2");
let body = document.getElementById("body");
let nameP1 = document.getElementById("nameP1");
let nameP2 = document.getElementById("nameP2");
document.getElementById("input-howmany").value = 1;
let p1Score = 0;
let p2Score = 0;

const changeLimit = () => {
    if(document.getElementById("input-howmany").value == 1) {
        document.getElementById("input-howmany").value = 3;
    } else if(document.getElementById("input-howmany").value == 3) {
        document.getElementById("input-howmany").value = 5;
    } else if(document.getElementById("input-howmany").value == 5) {
        document.getElementById("input-howmany").value = 7;
    } else if(document.getElementById("input-howmany").value == 7) {
        document.getElementById("input-howmany").value = 10;
    } else if(document.getElementById("input-howmany").value == 10) {
        document.getElementById("input-howmany").value = 1;
    }
}

const restartFunc = () => {
    p1Score = 0;
    p2Score = 0;
    player1.textContent = p1Score;
    player2.textContent = p2Score;
    document.getElementById("input-howmany").value = 1;
    player1Header.style.display = "block";
    player2Header.style.display = "block";
    buttonPlayer1.disabled = false;
    buttonPlayer2.disabled = false;
    buttonLimit.disabled = false;
};

buttonLimit.addEventListener("click", changeLimit);

buttonPlayer1.addEventListener("click", () => {
    p1Score++;
    player1.textContent = p1Score;
    if(document.getElementById("input-howmany").value == player1.textContent){
        player2Header.style.display = "none";
        buttonPlayer1.disabled = true;
        buttonLimit.disabled = true;
    }
});

buttonPlayer2.addEventListener("click", () => {
    p2Score++;
    player2.textContent = p2Score;
    if(document.getElementById("input-howmany").value == player2.textContent){
        player1Header.style.display = "none";
        buttonPlayer2.disabled = true;
        buttonLimit.disabled = true;
    }
});

buttonRestart.addEventListener("click", restartFunc);

(function(){
    let nombreP1 = prompt("Nombre del jugador uno: ");
    let nombreP2 = prompt("Nombre del jugador dos: ");
    nameP1.textContent = nombreP1;
    nameP2.textContent = nombreP2;
})();