function getPlayerCells(playerNum) {
  // > get the descendent html tags from the query selector
  return document.querySelectorAll("#player" + (playerNum) + "_strip > td");
}

function getPlayerPosition(playerNum) {
  var playerCells = getPlayerCells(playerNum);
  // Array.prototype.forEach.call( playerCells, function(cell, index) {
  //   if (cell.classList.contains("active") === true) {
  //     console.log("hello");
  //     index;
  //   }
  // });
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

window.onload = function() {
  document.addEventListener('keyup', movePlayer, false);
}

getPlayerPosition(1)
