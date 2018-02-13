var app = {};

var state = {
  playerX: "",
  playerO: "",
  turn: true,
  movesLeft: 9,
  playing: true,
  board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
};

var view = {
  playerX: function(name) {
    document.getElementById("playerX").innerHTML = `X: ${name}`;
  },
  playerO: function(name) {
    document.getElementById("playerO").innerHTML = `O: ${name}`;
  },
  resetDisabled: function(bool) {
    document.getElementById("reset-button").disabled = bool;
  },
  setCell: function(cell, text) {
    document.getElementById(cell).innerHTML = text;
  },
  clearDOMBoard: function() {
    for (let i = 0; i < 9; i++) {
      document.getElementsByClassName("cell")[i].innerHTML = "---";
    }
  },
  setResult: function(text) {
    document.getElementById("result-div").innerHTML = text;
  },
  incrementX: function() {
    document.getElementById("xWins").innerHTML =
      Number.parseInt(document.getElementById("xWins").innerHTML) + 1;
  },
  incrementO: function() {
    document.getElementById("oWins").innerHTML =
      Number.parseInt(document.getElementById("oWins").innerHTML) + 1;
  }
};

var controller = {
  getXname: function() {
    return prompt("Player X, please enter your name:");
  },
  getOname: function() {
    return prompt("Player O, please enter your name:");
  },
  handleClick: function(e) {
    if (state.playing && e.srcElement.className === "cell") {
      app.evaluate(e.target.id);
    } else if (e.target.id === "reset-button") {
      app.clearBoard();
    }
  }
};

app.initialize = function() {
  state.playerX = controller.getXname();
  state.playerO = controller.getOname();

  view.playerX(state.playerX);
  view.playerO(state.playerO);
  view.resetDisabled(true);

  document.addEventListener("click", function(e) {
    controller.handleClick(e);
  });
};

app.evaluate = function(cell) {
  let row = Number.parseInt(cell.charAt(0));
  let col = Number.parseInt(cell.charAt(1));
  if (state.board[row][col] === 0) {
    view.setCell(cell, state.turn ? "X" : "O");
    state.board[row][col] = state.turn ? 1 : -1;

    let winner = app.getWinner();
    if (winner !== undefined) {
      app.endGame(winner);
      return;
    }

    state.turn = !state.turn;
    state.movesLeft--;
    if (state.movesLeft <= 0) {
      app.endGame();
    }
    if (app.getWinner() !== undefined) {
      app.endGame(app.getWinner());
    }
  }
};

app.endGame = function(outcome) {
  state.playing = false;
  if (outcome === "X") {
    view.setResult("X won!");
    view.incrementX();
  } else if (outcome === "O") {
    view.setResult("O won!");
    view.incrementO();
  } else {
    view.setResult("It's a tie!");
  }
  view.resetDisabled(false);
};

app.clearBoard = function() {
  // turn = true;
  state.movesLeft = 9;
  view.setResult("");
  view.clearDOMBoard();
  state.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  state.playing = true;
  view.resetDisabled(true);
};

app.getWinner = function() {
  if (app.getMajDiagSum() === 3 || app.getMinDiagSum() === 3) {
    return "X";
  }
  if (app.getMajDiagSum() === -3 || app.getMinDiagSum() === -3) {
    return "O";
  }
  for (let i = 0; i < 3; i++) {
    if (app.getRowSum(i) === 3 || app.getColSum(i) === 3) {
      return "X";
    }
    if (app.getRowSum(i) === -3 || app.getColSum(i) === -3) {
      return "O";
    }
  }
};

app.getRowSum = function(row) {
  return state.board[row].reduce((acc, current) => acc + current);
};
app.getColSum = function(col) {
  return [state.board[0][col], state.board[1][col], state.board[2][col]].reduce(
    (acc, current) => acc + current
  );
};
app.getMajDiagSum = function() {
  return [state.board[0][0], state.board[1][1], state.board[2][2]].reduce(
    (acc, current) => acc + current
  );
};
app.getMinDiagSum = function() {
  return [state.board[0][2], state.board[1][1], state.board[2][0]].reduce(
    (acc, current) => acc + current
  );
};

app.rotateBoard = function() {
  let tempboard = [[],[],[]];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      tempboard[2 - col][row] = state.board[row][col];
    }
  }
};

app.applyGravity = function() {
  
};

app.renderDOMBoard = function() {
  
};

app.initialize();
