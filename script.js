//your JS code here. If required.
// Create the student object with a property called name
const student = {
  name: "John"
};

// Add a getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage:
console.log(student.getKeys()); // Output: ["name"]
