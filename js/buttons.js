// function for the new match button that clears all the data relative to the board game 
// and send you to the gameBoard page

const newMatch = () => {

    sessionStorage.removeItem('save');
    sessionStorage.removeItem('infoTurns');
    sessionStorage.removeItem('board');

    window.location.href = "../pages/gameBoard.html";

};

// function for teh new game button that send players to the playerSelect page 
// where they can set the names 

const newGame = () => {

    sessionStorage.clear();

    window.location.href = "../pages/playerSelect.html";

};