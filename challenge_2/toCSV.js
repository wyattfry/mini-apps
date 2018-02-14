module.exports = function(object, lnNums = false, filter) {

  // Header Row
  let row = 1;
  let output = "";
  let headers = [];
  for (let key in object) {
    if (key !== "children") {
      headers.push(key);
    }
  }
  headers.push('parentId');
  output += (lnNums ? 'id,' : '') + headers.join() + "\n";


  // Data Rows
  let getProps = function(obj) {
    let props = [];
    for (let key in obj) {
      if (key === "children") {
      } else {
        props.push(obj[key]);
      }
    }
    return props;
  };
  
  let traverse = function(obj, parent = '') {
    if (parent) {
      parent = ',' + parent;
    }
    // Filter Here
    let filterMatch = false;

    if (filter !== '') {
      for (let key in obj) {
        if (obj[key].toString().includes(filter)) {
          filterMatch = true;
        } 
      }
    }

    if (!filterMatch) {
      output += (lnNums ? row++ + ',' : '') + getProps(obj).join() + parent + "\n";
      var parentRow = row - 1;
      if (obj.hasOwnProperty('children')) {
        for (let i = 0; i < obj.children.length; i++) {
          traverse(obj.children[i], parentRow);
        }
      }
    }
  };

  traverse(object);

  return output;
};