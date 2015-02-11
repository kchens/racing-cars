startState = {
  player1: { position: 0 },
  player2: { position: 0 }
}

var winner = false;

function setPlayerStart() {
  for( var index = 0; index < Object.keys(startState).length; index++ ) {
    var playerNum = index + 1
    document.querySelectorAll('.active')[index].remove()
    getPlayerCells(playerNum)[0].className = "active"
  }
}

function getPlayerCells(playerNum) {
  // > get the descendent html tags from the query selector
  return document.querySelectorAll("#player" + (playerNum) + "_strip > td");
}

function getPlayerPosition(playerNum) {
  var playerCells = getPlayerCells(playerNum);
  // Array.prototype.forEach.call doesn't work for some reason
  for( var index = 0; index < playerCells.length - 1; index++ ) {
    if (playerCells[index].classList.contains("active") === true) {
      return index;
    }
  }
}

function updatePlayerPosition(playerNum, position) {
  var playerCells = getPlayerCells(playerNum);
  var currentPosition = getPlayerPosition(playerNum);
  var nextPosition = currentPosition + 1;
  Array.prototype.forEach.call( playerCells,(function(cell, index) {
    if (index == nextPosition) {
      cell.className = "active";
      foundWinner(playerNum);
    }
    else {
      cell.className = "";
    }
  }));
}

function movePlayer(event) {
  if (event.keyCode == 90 ) { // 'z'
    updatePlayerPosition(1);
  }
  else { (event.keyCode == 77)  // 'm'
    updatePlayerPosition(2);
  }
}

function foundWinner(playerNum) {
  winner = Array.prototype.pop.call(getPlayerCells(playerNum))
                                  .classList.contains('active')
  if (winner === true) {
    alert("Player " + playerNum + " wins!");
    document.removeEventListener('keyup', movePlayer, false);
  }
}


window.onload = function() {
  setPlayerStart()
  document.addEventListener('keyup', movePlayer, false);
}

