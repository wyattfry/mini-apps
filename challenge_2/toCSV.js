module.exports = function(object) {
  let output = "";
  let headers = [];
  for (let key in object) {
    if (key !== "children") {
      headers.push(key);
    }
  }
  output += headers.join() + "\n";
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
  let traverse = function(obj) {
    output += getProps(obj).join() + "\n";
    if (obj.hasOwnProperty('children')) {
      for (let i = 0; i < obj.children.length; i++) {
        traverse(obj.children[i]);
      }
    }
    
  };
  traverse(object, output);
  return output;
};
// TODO handle rows with different columns