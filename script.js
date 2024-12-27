let turn = 'O';
let total_turn = 0;

const winnerArray = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6']];
const boardArray = new Array(9).fill('E');
// console.log(boardArray);


// checking current position me koi winner huaa hai ya nhi.
function validateWinner () {
    
    for(let [index0, index1, index2] of winnerArray) {
        if(boardArray[index0] != 'E' && boardArray[index0] === boardArray[index1] && boardArray[index1] === boardArray[index2]) {
            return 1;
        }        
    }

    return 0;
}

// Board Logic function
const boardLogic = (event) => {
    
    const element = event.target;
    // console.log(element);
    
    if(boardArray[element.id]==='E')
    {
        total_turn++;

        if(turn === 'X') {
            element.innerHTML = turn;
            boardArray[element.id] = turn;
            console.log(boardArray);
            turn = 'O';
            
            if(validateWinner()) {
                document.getElementById('show-result').innerHTML = 'Winner is X';
                board.removeEventListener('click',boardLogic);
                return;
            }
        }
        else {
            element.innerHTML = turn;
            boardArray[element.id] = turn;
            console.log(boardArray);
            turn = 'X';
            
            if(validateWinner()) {
                document.getElementById('show-result').innerHTML = 'Winner is O'
                board.removeEventListener('click', boardLogic)
                return;
            }
        }
    }

    
}

// add event on board (parent element)
const board = document.getElementById('game-board');
board.addEventListener('click', boardLogic);


// restart the game
const restartButton = document.getElementById('btn');
restartButton.addEventListener('click', () => {
    turn = 'O'
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((element) => {
        element.innerHTML = "";
    })
    document.getElementById('show-result').innerHTML = "";
    total_turn = 0;

    // boardArray = new Array(9).fill('E');
    for(let i = 0; i<boardArray.length; i++)
        boardArray[i] = 'E';
    board.addEventListener('click', boardLogic);

})
