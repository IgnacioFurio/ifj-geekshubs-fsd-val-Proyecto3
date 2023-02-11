// div's captured for setting the names  
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

// sesion storage captured strings
let name1 = sessionStorage.getItem("Player1Name")
let name2 = sessionStorage.getItem("Player2Name")

// setting the names inside the div's meant for that
player1.innerHTML = `${name1}`
player2.innerHTML = `${name2}`


