# Mini-Apps
## 1: Tic-Tac-Toe

### Requirements
- First move starts with player X
- App must detect win or tie, then display appropriate message
- Have a reset button
- Page only loads once

### Initial Version
- Use only native DOM methods only, i.e. no jQuery, or other libs etc
- All code should be in app.js
- All html in index.html
- Use default styling, no separate .css

### Plan
1. O-ICE
2. Diagram
3. Pseudo-code
4. Implement
5. Test


### O-ICE
- __Input:__ clicks on the DOM, on a 3 x 3 grid
- __Output:__ alernating X and O within the clicked cells, evaluates for win / tie, resets
- __Constraints:__ no time or space restrictions, certain miscellaneous constraints, i.e. no refreshing page, use native JS only unless very stuck
- __Edge Cases:__ none atm


### Diagram
![diagram 1](https://github.com/wyattfry/images/blob/master/ttt-diagram1.png?raw=true)

This diagram represents the general process. The complexity not expressed here would be:

- alternating between X and O
- helper methods for determining win / tie
- not changing already-clicked cells

### Pseudocode
```pseudocode
// setup board
// make a 2D array to represent 'board'
//   'X' = true, 'O' = false, '' = undef
// make a 'turn' variable to keep track of whose turn it is
//   initialize to true
// add event listeners for cells
//	  calls evaluate helper method
// add event listener for reset button
//   calls setup board helper method


// evaluate (loop until empty cell clicked)
//   if clicked cell not already filled
//     fill cell on DOM with user's mark
//     change appropriate element in board array
//
//     if any row, col or diag contains only X or O
//       end game as win, specify winner
//
//     else if all spaces filled
//       end game as tie
//

// end game (outcome)
//	  disable board
//   if outcome is win (outcome = t/f)
//     display win message and winner
//   else
//     display tie message
```


the end