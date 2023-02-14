let winnerDiv = document.getElementById("winner")

let nameWinner = sessionStorage.getItem("Winner")

winnerDiv.innerHTML = `${nameWinner},`