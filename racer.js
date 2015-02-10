function updatePlayerPosition(playerIndex, position) {
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

updatePlayerPosition(1)