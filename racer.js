function getPlayerCells(playerNum) {
  // > get the descendent html tags from the query selector
  return document.querySelectorAll("#player" + (playerNum) + "_strip > td");
}

function getPlayerPosition(playerNum) {
  var playerCells = getPlayerCells(playerNum);
  Array.prototype.forEach.call( playerCells, function(cell, index) {
    if (cell.classList.contains("active") == true) {
      console.log("hello");
      console.log(index);
    }
  });
}

function updatePlayerPosition(playerNum, position) {
  var playerCells = getPlayerCells(playerNum);

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
    getPlayerPosition(1);
    updatePlayerPosition(1, 5);
  }
  else { (event.keyCode == 77)  // 'm'
    getPlayerPosition(2);
    updatePlayerPosition(2, 5);
  }
}

window.onload = function() {
  document.addEventListener('keyup', movePlayer, false);
}

getPlayerPosition(1)
