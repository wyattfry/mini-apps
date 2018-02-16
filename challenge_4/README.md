# Mini-App 4: Bowling 🎳
2018 February 15

Create a bowling game using an Express server and React / Babel front-end, game logic in the client side. Focus on building and modeling:

- scoring algorithm
- data structures
- React components

Keep track of / display score of each bowl, frame, and game

__TODO__

- [ ] Write tests that verify whether scoring rules are correctly implemented

__Pin Numbers__

```
7 8 9 10
 4 5 6
  2 3
   1
```

__Rules__

- object of game: score more points than your opponent, maximum possible score: 300 points.
- a game consists of 10 'frames' (rounds)
- a player may roll ball up to 2 times per frame, trying to knock down all 10 pins
- if a player knocks down < 10 pins in a frame, it's called an 'open frame', the points received for that frame equals the number of pins knocked down. On the score sheet, each large square is a frame, and the two small squares in the upper right are the pins knocked down on the two throws, the number in the large square is the total score for that frame:

```
-------
| |7|2|
|9    |
-------
```
- __spare__: if a player knocks down all pins with the second ball, it's called a 'spare', notated as a slash. The points for a spare is 10 plus the points from the following ball (__not frame__):

```
-------------
| |7|/| |3| |
|10+3 |     |
-------------
```
- __strike__: if a player knocks down all pins with the first ball, it is called a 'strike', notated as an 'X'. Points are 10 plus the number of pins knocked down by the next two balls. If a player gets a strike in the 10th frame, they are allowed two additional balls.

```
---------------
|  |X| |  |3|4|
|10+3+4|   7  |
---------------
```

__12:17__ - I think I understand the rules well enough to start working on the code, I am getting stuck on the interface; how to mimic the appearance of a score card. I think it'd be better to just represent it in a more computery way, i.e. a plain old table. Rows are frames, columns are pins knocked down for balls 1 and 2, and final score for the frame:

|Frame|Ball 1|Ball 2|Score|Running Total
|---|---|---|---|---|
|1|7|2|9|9|
|2|7|/|10 + 3 = 13|9 + 13 = 22|
|3|3|5|8|22 + 8 = 30|
|4|X||10 + 3 + 6 = 16|30 + 16 = 46|
|5|3|6|9|46 + 9 = 55|

And so on. I can work on polishing the UI once the basic function is complete.

__13:05__ - General React / Express Setup Procedure:

1. npm init (generates package.json)
2. npm install save dependencies
    1. express
    2. axios (http requests)
    3. morgan
    4. body-parser
    5. jquery
    6. react
    7. react-dom
    8. request
    6. mysql
    7. sequelize
    8. Mongo (mongoose?)
3. npm install save dev-dependencies
    1. webpack (is there a way to generate config? or just copy old one)
    2. babel-core
    3. babel-loader
    4. babel-preset-env
    5. babel-preset-react
4. package.json
    1. change start script to `nodemon --inspect server.js`
    2. add script `"react-dev": "webpack -d --watch"`
5. create file / directory structure

__14:02__ - Ok, got all the above-mentioned done, wasn't totally smooth, but no major snags. And I copied it all out to a separate directory as a template.

__14:34__ - Starting the actual project now. I'll need a text input and a table to represent the score card.

__15:04__ Working on the text input, getting errors, here is what ended up (maybe) working:

```jsx
import React from 'react';
const Input = () => <input type="text"/>;
export default Input;
```
My gotchas:

- don't forget to import (or extend) React for each component
- `<input>` elements _do not have a closing tag_, and must be self-closing, i.e. `/>`, even though it's not necessary in pure HTML.

__15:32__ Playing around too much with the UI / CSS. But I filled in hard-coded HTML for what I expect the working site to look like.

__15:44__ Removed the hard-coded HTML, tried making some dummy data in the parent component `App.jsx`:

```js
var sampleData = [
  {
    number: '1',
    ball1: '7',
    ball2: '2',
    frameScore: '9',
    totalScore: '9',
  },
  {
    number: '2',
    ball1: '7',
    ball2: '/',
    frameScore: '13',
    totalScore: '22',
  }
];
```

I passed it to the ScoreCard component, refactored the jsx in ScoreCard to map data to the table, and it worked.

__16:22__ - Text input now works, committed. Next is the game logic. I conjured until the input worked, I'd like to save what I ended up with to avoid conjuring again.

### Sending User Input to Parent Component

__Child Component "Input"__

```jsx
import React from 'react';
const Input = (props) => <input
  type="text"
  onKeyPress={(e) => (props.handleKeyPress(e))}
  placeholder="Pins knocked down this ball (0-10)"/>;
export default Input;
``` 
__Parent Component "App"__

```jsx
  ...
  render() {
    return (
        <div>
          <h1>Bowling 🎳</h1>
          <Input handleKeyPress={this.handleKeyPress}/>
          <ScoreCard frames={sampleData}/>
        </div>
    );
  }
  handleKeyPress(e) {
    // e.target.value = # of pins to knock down
    if (e.key === 'Enter') {

      if (!this.validateInput(e.target.value)) {
        alert('Please enter a number, 0 to 10');
      } else {
        this.knockDownPins(e.target.value);
      }
      e.target.value = '';
    }
  }
  ...
```

__18:52__: - Back to work after dinner now. Didn't make my goal of finishing MVP by dinner, but I think I am making good progress. Ok, back to the game logic.

__20:08__ - Still working on the logic. Specifically, how to add points back to strikes and spares.

__23:56__ - Logic mostly done, handles open frames, strikes and spares. Just need to handle strikes in frame 10, and stopping the game after frame 10. Trying to think if I have any take aways from this last stretch...

__00:11__ - Strike in frame 10 done.