// div's captured for setting the names  
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

// sesion storage captured strings
let name1 = sessionStorage.getItem("Player1Name")
let name2 = sessionStorage.getItem("Player2Name")

// setting the names inside the div's meant for that
player1.innerHTML = `${name1}`
player2.innerHTML = `${name2}`



// setting board and tokens
let board = Array.from(document.getElementsByClassName("cellDesign"));


// current board status 
let game = ["", "", "", "", "", "", "", "", ""]

// victory array to check 
let victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0 ,3 ,6],
    [1, 4, 7],
    [2, 5, 8],
    [0 ,4 ,8],
    [2 ,4 ,6],
];

// winner function 

let playerWinner;

const winner = () => {    
    // we are going to check every win condition at victory array
    for(let i = 0; i < victory.length ; i++){
        // setting win condition value to check every loop
        let winCondition = victory[i]
        
        let position0 = game[winCondition[0]];
        let position1 = game[winCondition[1]];
        let position2 = game[winCondition[2]];
        // checking if somwone won the game 
        if(position0 === position1 && position1 === position2 && position0 !== ""){
            // going to the winnes page 
            window.location.href = "../pages/winner.html"
            // setting the winners name 
            if(turn % 2 !== 0){
                playerWinner = name1
                sessionStorage.setItem("Winner", playerWinner)
            }else{
                playerWinner = name2
                sessionStorage.setItem("Winner", playerWinner)
            };
        };
    };

};

// setting the basics for the game 

let turn = 1;

let token = 1

let infoP1 = document.getElementById("infoP1")
let infoP2 = document.getElementById("infoP2")

infoP1.innerHTML = "Set a token on the board"
infoP2.innerHTML = "Wait until your turn"

// information for the players 

const info = () => {
    console.log(turn)
    if(turn % 2 !== 0){
        infoP1.innerHTML = "Wait until your next turn"
        infoP2.innerHTML = "Set a token on the board"
    }else if (turn % 2 === 0){
        infoP2.innerHTML = "Wait until your next turn"
        infoP1.innerHTML = "Set a token on the board"
    };
};




board.map(
    (cell) => {
        cell.addEventListener('click', () => {
            // to set tokens before both playes has 3 tokens in game 
            if(cell.innerHTML === "" && turn <= 6){
                // instructions for players
                info()
                // to paint the cell 
                turn % 2 !== 0 ? cell.innerHTML = '<img src="../assets/circle.png" class="token" alt="">' : cell.innerHTML = '<img src="../assets/cross.png" class="token" alt="">';
                // to set place in the game array
                turn % 2 !== 0 ? game[cell.id] = "O" : game[cell.id] = "X";
                // checking winner 
                winner()
                turn ++ ;           
            }
            // to retire a "O" token 
            else if (cell.innerHTML === '<img src="../assets/circle.png" class="token" alt="">' && turn % 2 !== 0 && turn > 6 && token === 1){
                // instructions for players
                info()
                // to clean the cell 
                cell.innerHTML = "";
                // to clean place in the array 
                game[cell.id] = "";

                token --
            }
            // to retire a "X" token 
            else if (cell.innerHTML === '<img src="../assets/cross.png" class="token" alt="">' && turn % 2 === 0 && turn > 6 && token === 1){
                // instructions for players
                info()
                // to clean the cell 
                cell.innerHTML = "";
                // to clean place in the array 
                game[cell.id] = "";
                token --
            }
            // to set again the token removed (both players)
            else if (cell.innerHTML === "" && turn > 6 && token === 0){
                turn % 2 !== 0 ? cell.innerHTML = '<img src="../assets/circle.png" class="token" alt="">' : cell.innerHTML = '<img src="../assets/cross.png" class="token" alt="">';
                // to set place in the game array
                turn % 2 !== 0 ? game[cell.id] = "O" : game[cell.id] = "X";
                // checking winner 
                winner()
                info()
                turn++
                token++
            };
        })
    }
)



