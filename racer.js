function update_player_position(player) {
  player_obj = document.querySelector(player);
  td_active = player_obj.querySelector(".active");
  td_active_next = td_active.nextElementSibling

  if ( td_active_next !== null ) {
    td_active.nextElementSibling.className = "active";
    td_active.className = "";
  } else {
    winner(player);
    playAgain();
  }
}


function on_key_press(e) {
  if (e.keyCode === 90) {
    update_player_position('#player1_strip');
  } else if (e.keyCode === 77) {
    update_player_position('#player2_strip');
  }
}

function winner(player) {
  alert(player + " Wins!");
}

function playAgain() {
  var input = prompt("Play again? Y/N");
  switch(input){
    case 'Y':
      newGame();
      document.addEventListener('keydown', on_key_press, false);
    case 'N':
  }
}

var newGame = function() {
  var track = document.querySelectorAll("tr td");
  for (var i = 0; i < track.length ; i++) {
    track[i].className = "";
  }
  track[0].className = 'active';
  track[track.length / 2].className = "active";
}

window.onload = function() {
  document.addEventListener('keydown', on_key_press, false);
}