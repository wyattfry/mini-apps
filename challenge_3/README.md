#Mini-App 3: Connect 4
2018 February 14

__Goals__

* make the game Connect 4 as a single-page app, using React and Express
* separate concerns

### Repo Structure
* __server.js__: serves index.html, Express server app
* __client/app.js__: React game logic
* __index.html__: links to transpiled component file (bundle.js), _minimal styling_ (<= 30 min), board should resemble actual, not necessarily be close to it
* __React__: UI
* __Babel__: transpile React ES6 to ES5

### TODO
* [x] read learn docs
* [x] explore and understand given files (empty)
* [x] ``npm install --save express``
* [x] write server.js to serve static files in ``client``
* [ ] babel should watch for file changes
* [ ] detect and report win or tie
* [ ] page refresh restarts game
* [ ] write >= 4 tests of end-of-game logic (ties; horiz, vert, diag wins), run either with node or in browser

### Log

__13:34__ - How to proceed? Npm init, install Babel, Express, Axios, Morgan, Body-Parser, Webpack. I have a boilerplate package.json dependencies list and Webpack file, I could try using those.

__14:01 UI mock-up__

```
~ Connect 4 ~
type column number to play piece
| | | | | | | |
| | | | | | | |
|o| | | | | | |
|x|o|x| | | | |
|o|x|o|o| | | |
|x|x|x|o| | | |
---------------
 1 2 3 4 5 6 7
~ Player o wins! ~
turn: x
```

I think this could be accomplished using a bunch of ``<span>`` elements with a ``pre`` style. I think the  ascii interface would be cool, but I don't know if the connect 4 playing public would. It might actually be easier to do a more conventional GUI, perhaps with an HTML5 canvas. I'll focus on the logic first.

__14:08__ - but first, let's just get the server running and server the static files. I changed the npm start script to ``nodemon --inspect server.js`` to auto-refresh on file change.

__14:20__ - Express's famous 4-line server, up and running, server the static ``client`` directory. Then I practiced erasing it and re-writing it from memory a few times. Now to figure out the font end, i.e. React and Babel.

__14:50__ - a little distracted, took time to clean up my local file organization. But I installed --save and --save-dev all the modules I think I will need, now to figure out Webpack to produce a ``bundle.js`` file for the client so it can use those modules. Here's my current ``packge.json``:

```json
{
  "name": "connect_4",
  "version": "1.0.0",
  "description": "Connect 4 game written with node/express server and react client",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --inspect server.js"
  },
  "author": "Wyatt Fry",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2",
    "jquery": "^3.3.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "webpack": "^3.11.0"
  }
}
```

I don't know what all those babel-* modules do, but it is a boilerplate recommendation. But, in anticipation of Webpack:

- I added two new dirs, ``client/src`` and ``client/dist``
- moved ``index.html`` and ``style.css`` to ``dist``
- moved ``app.js`` to ``src``
- changed the ``express.static()`` to serve ``dist`` in ``server.js``

Does Webpack then bundle ``app.js`` and all the dependencies (e.g. React, React-DOM, jQuery) together? Yes.

__15:22__ - having trouble with Webpack, I added a script to package.json to run ``webpack -d --watch``, but it says now that the file must be JSON, not just JS.

__16:04__ - I did a few things that I think all helped:

* installed Webpack globally
* added an ``index.jsx`` file to ``src``

__16:45__ - I reviewed a previous React project to refamiliarize myself with it. I've also added a lot of files in the last steps, it might be time for an updated components list, or a diagram.

__Repo Structure__

* client
    * dist
        * __bundle.js__: ``index.html``'s script dependencies, produced by webpack
        * __index.html__: served static element, main webpage
        * __style.css__: style for ``index.html``
    * src
        * __index.jsx__: React entry point
        * components
            * __app.jsx__: React app parent component, I will add more components here, I imagine header, board, outcome message, user prompt
* __server.js__: Express server, node entry point


__React Components__

I am trying to decide what the MVP in this case would be, the simplest, least sophisitcated implementation, and struggling coming up with one. There are too many unknowns for me. It might help if we list out the React Components:

* index.jsx
    * app.jsx - __App__:
        * __Header__:
        * __Board__:
            * __Column__: 
        * __Messages__: display game outcome

I think that is the simplest way to organize the component hierarchy. Now, how about state? On one hand, I would guess that __Board__ is the only stateful component, as it stores the piece positions. Yes, and it could pass the proper sequence to each column. Its state could have a key called 'board' thats key is an array, indices correspond to columns (0 - 6, though user will enter 1 - 7)

__Controllers__ - Ok, then what is the simplest way for the players to interact? First I thought by typing column numbers. Then I thought it might be more direct if the users click on columns. Now, maybe typing a number is fine. I would like to not hard-code the rows and columns if it is not going to cost my sanity. So where do the dimensions come from? Let's start with Board.

__Game Logic__ - I suppose Board could also handle this, it could have some properties that are callback functions, like _handleWin(winner)_ and _handleTie()_ that App passes in.

__19:04__ - Feeling distressed, other students have been finished for a while

__19:13__ - Working on implementing Board and Column, just trying to get form, then implement function. Wondering about the View aspect, how represent the board and pieces. I could have a light circle on a dark square for each cell, then just change the color of the circle, based on CSS class perhaps. I saw Ilias' board, just do circles.

__19:47__ - I couldn't get any React things to appear on the webpage, asked Kevin L. for help, he saw the problem: my `<script>` element for `bundle.js` was before the element I was attaching it to. I moved it after it and now I get different error messages: progress.

__20:01__ - Finally got some React stuff on screen. Phew. A bit overwhelmed by the amount of knowledge one must remember. Since 19:47 I've been fixing what ended up being about 10 errors, some ES6 things, some forgotten exports or imports. I still am fuzzy on the syntax for importing and exporting, e.g. `default`, module.exports vs. export default, require, import

__20:50__ - I have form. I couldn't figure out how to dynamically make the board, just hard coded a 7 by 6 board.