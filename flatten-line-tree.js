/**
 * Turn a tree structure of lines into a flat list of lines.
 * Lines are in array form following the form,
 * [ [x1,y1], [x2, y2] ]
 * 
 * @param {any} input 
 * @returns 
 */
export default function flattenLineTree(input) {

  if (!Array.isArray(input)) {
    throw TypeError('Input value is not an array type ' + input);
  }

  if (isPath(input)) {
    return input;
  }

  let output = [];
  input.forEach(ele => {

    if (isPath(ele)) {
      output.push(ele);
    }
    else {
      output = output.concat(flattenLineTree(ele));
    }
  });

  return output;
}

/**
  * Returns true if the object is an array of the form,
  * [ [x, y], ... ]
  * 
  * @param {any} obj The object to be tested
  * @returns {boolean}
  */
function isPath(obj) {
  return Array.isArray(obj) && obj.length != 0 &&
    obj.reduce((acc, cur) => {
      return acc && !isNaN(cur[0]) && !isNaN(cur[1]);
    }, true);
}
