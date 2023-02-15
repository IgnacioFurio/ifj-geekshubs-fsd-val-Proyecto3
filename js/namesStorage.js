// input 1 capture
let input1 = document.getElementById("Player1")
let player1;

input1.addEventListener("input", () => {player1 = input1.value})

// input 2 capture 
let input2 = document.getElementById("Player2")
let player2;

input2.addEventListener("input", () => {player2 = input2.value})



// session storage function 
const GuardaNombres = ()=> {
    // aqui ponemos nombres predefinidos en caso de que no sean introducidos por input 
    if(player1 === undefined){
        player1 = "Player 1"
    }
    if(player2 === undefined){
        player2 = "Player 2"
    }

        // aqui introducimos los nombres en el storage 
        sessionStorage.setItem("Player1Name", player1)
        sessionStorage.setItem("Player2Name", player2)


    // con esto abrimos la ventana de juego si todo esta rellenado 
    window.location.href = "../pages/gameBoard.html";
};
