// div's captured for setting the names  
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

// sesion storage captured strings
let name1 = sessionStorage.getItem("Player1Name")
let name2 = sessionStorage.getItem("Player2Name")

// setting the names inside the div's meant for that
player1.innerHTML = `${name1}`
player2.innerHTML = `${name2}`



// board check 
let board = Array.from(document.getElementsByClassName("cellDesign"));
console.log(board)
let turn = 1;

let token = 1


board.map(
    (cell) => {
        cell.addEventListener('click', () => {
                if(cell.innerHTML === "" && turn <= 6){
                    turn % 2 !== 0 ? cell.innerHTML = '<img src="../assets/circle.png" class="token" alt="">' : cell.innerHTML = '<img src="../assets/cross.png" class="token" alt="">';
                    turn ++ ;           
                }else if (cell.innerHTML === '<img src="../assets/circle.png" class="token" alt="">' && turn % 2 !== 0 && turn > 6 && token === 1){
                    cell.innerHTML = "";
                    token --
                }else if (cell.innerHTML === '<img src="../assets/cross.png" class="token" alt="">' && turn % 2 === 0 && turn > 6 && token === 1){
                    cell.innerHTML = "";
                    token --
                }else if (cell.innerHTML === "" && turn > 6 && token === 0){
                    turn % 2 !== 0 ? cell.innerHTML = '<img src="../assets/circle.png" class="token" alt="">' : cell.innerHTML = '<img src="../assets/cross.png" class="token" alt="">';
                    turn++
                    token++
                };
        })
    }
)





// function that checks if someone has won the game 

// const winner = () => {

//     let check = Array.from(document.getElementsByClassName("cellDesign"))
//     switch(check){
//         case (check[0] === check[1] && check[1] === check[2] && check[0] != ""):

        
//     };

// };