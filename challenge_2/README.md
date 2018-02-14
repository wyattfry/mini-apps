# Mini-Apps
## Challenge 2: CSV Report Generator
_2018 February 13_
### Components
- __server.js:__ node / express server script, serves the files in the ``client`` folder, converts JSON to CSV
- __client/app.js:__ handles submitting JSON to server, should receive a CSV-formatted response and display on same page
- __client/index.html:__ static front-end page

__Example Data__

- samples/csv_report.csv
- samples/sales_report.json

### TODO
* [x] create a ``package.json`` to store dependencies
* [x] prevent default (page reload) when user submits data
* [x] line numbers
* [x] add ``parentId`` column to returned csv
* [x] add filter option
* [ ] allow optional fields

### Diagram
![diagram1](https://github.com/wyattfry/images/blob/master/json-to-csv-diagram.png?raw=true)

The picture has some flaws: the html form is not contained in the ``app.js`` file, and I am currently having trouble getting the entered text from the textarea to the server through a POST request. I feel like I should get help, read documentation, bet can't decide for which component. I'd guess JavaScript. I am using the __axios__ npm package to make sending http messages easier. It partially and briefly worked, but now it doesn't.

Kind of working now, I believe the problem was mainly that ``axios.post()`` takes a path (string), and an object to send, and I was trying to send just a string of the user input.

Once info was going back and forth, it only took a few minutes to finish hooking everything up.

__20:19__ - Current problem: working on implementing a ``parentId`` column, it produces the header row correctly, but the first data row has another header row appended, then a blank line, then the rest of the data rows. Here is what it should be:

id | First Name | parentId
--- | --- | ---
1 | Joshie | -
2 | Beth Jr | 1
3 | Smitty | 2
4 | Allen | 2
5 | Beth | 1 

__20:47__ - It was cruft that was producing the double row. My helper method used to get passed a second argument, ``output``, but I took it out when I moved it inside the main method, but forgot to remove the second argument when I called the function. Times like this make me miss Java. Now I need to fix the number being passed to the children; it's now 1, 2, 3, 4. Should be 1, 2, 2, 1 as noted in above table.