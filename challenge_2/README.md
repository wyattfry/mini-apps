# Mini-Apps
## Challenge 2: CSV Report Generator


### Components
- __server.js:__ node / express server script, serves the files in the ``client`` folder, converts JSON to CSV
- __client/app.js:__ handles submitting JSON to server, should receive a CSV-formatted response and display on same page
- __client/index.html:__ static front-end page

__Example Data__

- samples/csv_report.csv
- samples/sales_report.json

### TODO
* [ ] create a ``package.json`` to store dependencies
* [ ] prevent default (page reload) when user submits data

### Diagram
![diagram1](https://github.com/wyattfry/images/blob/master/json-to-csv-diagram.png?raw=true)

The picture has some flaws: the html form is not contained in the ``app.js`` file, and I am currently having trouble getting the entered text from the textarea to the server through a POST request. I feel like I should get help, read documentation, bet can't decide for which component. I'd guess JavaScript. I am using the __axios__ npm package to make sending http messages easier. It partially and briefly worked, but now it doesn't.

Kind of working now, I believe the problem was that ``axios.post()`` takes a path (string), and an object to send, and I was trying to send just a string of the user input.
