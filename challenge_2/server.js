var toCSV = function(json) {
  let input = JSON.parse(json);
  let output = "";
  let headers = [];
  for (let key in input) {
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
    for (let i = 0; i < obj.children.length; i++) {
      traverse(obj.children[i]);
    }
  };
  traverse(input, output);
  return output;
};