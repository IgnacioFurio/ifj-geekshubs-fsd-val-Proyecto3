// SESSION STORAGE 
// div's captured for setting the names  
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

// sesion storage captured strings
let name1 = sessionStorage.getItem("Player1Name")
let name2 = sessionStorage.getItem("Player2Name")

// setting the names inside the div's meant for that
player1.innerHTML = `${name1}`
player2.innerHTML = `${name2}`

/////////////////   TIC TAC TOE ////////////////////

// array: current board status 

let game = ["", "", "", "", "", "", "", "", ""]

// in case you minimized the "window" this is all the data of the previous game

const saveMatchData = () => {

    let checkMatchData = sessionStorage.getItem("save")

    if (checkMatchData === "save"){
        
        // take the game board array data saved from session storage
        game = JSON.parse(sessionStorage.getItem("board"))
        
        // take the turn and token object data saved from local storage
        infoTurns = JSON.parse(sessionStorage.getItem("infoTurns"))
        
        for(let i = 0 ; i < game.length; i++){
            
            let setToken = document.getElementById(`${[i]}`)        
            
            switch(game[i]){
                case "O":
                    setToken.innerHTML = '<img src="../assets/circle.png" class="token" alt="">'
                    break;
                case "X":
                    setToken.innerHTML = '<img src="../assets/cross.png" class="token" alt="">'
                break;
                default:
                    setToken.innerHTML = ""
            };
        };
    };
    
};

// WINNER VALIDATION

// array; victory chek 

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

// function: winner 

let playerWinner = "";

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
            // going to the winners page 
            window.location.href = "../pages/winner.html"
            // setting the winners name to session storage
            if(infoTurns.turn % 2 === 0){
                playerWinner = name1
                sessionStorage.setItem("Winner", playerWinner)
            }else if(infoTurns.turn % 2 !== 0){
                playerWinner = name2
                sessionStorage.setItem("Winner", playerWinner)
            };
        };
    };

};

// INFORMATION FOR THE PLAYERS

// initial information
let infoP1 = document.getElementById("infoP1")
let infoP2 = document.getElementById("infoP2")

infoP1.innerHTML = "Set a token on the board"
infoP2.innerHTML = "Wait until your turn"

// function: information for the players during the game

const info = () => {

    if(infoTurns.turn % 2 !== 0 && infoTurns.tokenP1 === 0 && infoTurns.turn > 6){
        infoP1.innerHTML = "Choose a token of your own"
        infoP2.innerHTML = "Wait until your next turn"
    }else if(infoTurns.turn % 2 === 0 && infoTurns.tokenP2 === 0 && infoTurns.turn > 6){
        infoP2.innerHTML = "Choose a token of your own"
        infoP1.innerHTML = "Wait until your next turn"
    }else if(infoTurns.turn % 2 !== 0){
        infoP2.innerHTML = "Wait until your next turn"
        infoP1.innerHTML = "Set a token on the board"
    }else if (infoTurns.turn % 2 === 0){
        infoP1.innerHTML = "Wait until your next turn"
        infoP2.innerHTML = "Set a token on the board"
    };

};

// DIFFERENT INDEX THAT ARE IMPORTANT TO RUN THE GAME 

// general info of tokens and turns 
let infoTurns = {
    turn: 1,

    tokenP1: 3,
    tokenP2: 3
}

// THE GAME

// building board
let board = Array.from(document.getElementsByClassName("cellDesign"));

// mapping board 

// first step is to check if there was a game going on before minimize the "window" and set the board

saveMatchData()


// TIME TO PLAY

// this info is set here so if you have minimized the window you can see the information as it was 
// before minimize the window 
info()

board.map(
    (cell) => {
        cell.addEventListener('click', () => {
            
            console.log(infoTurns.turn)
            // to set tokens before both playes has 3 tokens in game 
            if(cell.innerHTML === "" && infoTurns.turn <= 6){
                // to paint the cell 
                infoTurns.turn % 2 !== 0 ? cell.innerHTML = '<img src="../assets/circle.png" class="token" alt="">' : cell.innerHTML = '<img src="../assets/cross.png" class="token" alt="">';
                // to set place in the game array
                infoTurns.turn % 2 !== 0 ? game[cell.id] = "O" : game[cell.id] = "X";
                // take 1 token from the current player 
                infoTurns.turn % 2 !== 0 ? infoTurns.tokenP1-- : infoTurns.tokenP2--;    
                infoTurns.turn++
            }
            // to retire a "O" token 
            else if (cell.innerHTML === '<img src="../assets/circle.png" class="token" alt="">' && infoTurns.turn % 2 !== 0  && infoTurns.tokenP1 === 0){
                // to clean the cell 
                cell.innerHTML = "";
                // to clean place in the array 
                game[cell.id] = "";
                // give one token to the current player 
                infoTurns.tokenP1 ++
            }
            // to retire a "X" token 
            else if (cell.innerHTML === '<img src="../assets/cross.png" class="token" alt="">' && infoTurns.turn % 2 === 0 && infoTurns.turn > 6 && infoTurns.tokenP2 === 0){
                // to clean the cell 
                cell.innerHTML = "";
                // to clean place in the array 
                game[cell.id] = "";
                // give one token to the current player 
                infoTurns.tokenP2 ++
            }else if(cell.innerHTML === "" && infoTurns.turn % 2 !== 0 && infoTurns.tokenP1 === 1 && infoTurns.turn > 6){
                // to paint the cell 
                cell.innerHTML = '<img src="../assets/circle.png" class="token" alt="">';
                // to set place in the game array
                game[cell.id] = "O";
                // take 1 token from the current player 
                infoTurns.tokenP1--;    
                infoTurns.turn++
            }else if(cell.innerHTML === "" && infoTurns.turn % 2 === 0 && infoTurns.tokenP2 === 1 && infoTurns.turn > 6){
                // to paint the cell 
                cell.innerHTML = '<img src="../assets/cross.png" class="token" alt="">';
                // to set place in the game array
                game[cell.id] = "X";
                // take 1 token from the current player 
                infoTurns.tokenP2--;    
                infoTurns.turn++
            };;
            
            // checking winner 
            winner()

            // instructions for players
            info()

            // save the actual game in an array inside the session storage 
            sessionStorage.setItem("board", JSON.stringify(game))

            // save the actual game in an array inside the session storage 
            sessionStorage.setItem("infoTurns", JSON.stringify(infoTurns))

            // this is the mark that allow the function saveMatchData to set the board game 
            // as it was before minimize the window 
            sessionStorage.setItem("save", "save")            
        })
    }
)