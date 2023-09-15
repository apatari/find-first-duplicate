function findFirstDuplicate(arr) {
  // type your code here
  vals = new Set()
  for(item of arr) {
    if(vals.has(item)) {
      return item
    }
    vals.add(item)
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
  // Iterate over the Array, adding each value to a set
  // Check if the value is in the set already, return that value
  // return -1 if no dupes found.
// And a written explanation of your solution
  // Using a set will provide a quick way to check for duplicates
