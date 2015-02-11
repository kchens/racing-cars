function updatePlayerPosition(playerIndex, position) {
  // > get the descendent html tags from the query selector
  playerCells = document.querySelectorAll("#player" + (playerIndex) + "_strip > td");

  Array.prototype.forEach.call( playerCells,(function(cell, index) {
    if (index == position) {
      cell.className = "active";
    }
    else {
      cell.className = "";
    }
  }));
}

function movePlayer(event) {
  if (event.keyCode == 90 ) { // 'z'
    updatePlayerPosition(1, 5);
  }
  else { (event.keyCode == 77)  // 'm'
    updatePlayerPosition(2, 5);
  }
}

window.onload = function() {
  document.addEventListener('keyup', movePlayer, false);
}
