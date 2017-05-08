$(document).ready(function() {
  console.log('working');

  let whosTurn = 'x';
  let gameBoard = [0,0,0,0,0,0,0,0,0]
  const winIndex = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
  let winner = '';

  for (let i = 0; i < 9; i++) {
    $('#canvas').append(`<div id=${i}></div>`);
  }

  $('div').click(function() {
    if ($(this).text() === '') {
      if (whosTurn === 'x') {
        gameBoard[parseInt($(this).attr('id'))] = 1;
        $(this).text('x');
        whosTurn = 'o';
      } else {
        gameBoard[parseInt($(this).attr('id'))] = -1;
        $(this).text('o');
        whosTurn = 'x';
      }
    }
    calcWinner();
  })

function calcWinner(){
  for (var i = 0; i < winIndex.length; i++) {
    let sum = 0;
    for (var p = 0; p < winIndex[i].length; p++) {
      sum += gameBoard[winIndex[i][p]];
    }
    if (sum === 3) {
      winner = 'x';
    }else if (sum === -3) {
      winner = 'o';
    }
    if(winner !== ''){
      alert(`Winner is ${winner}`);
      break;
    }
  }

}

})
