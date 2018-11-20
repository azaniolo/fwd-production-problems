//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
  var x = num * 2;
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):

(function() {
  var x = 5;

  function double(num) {
    var x = num * 2;
    return x;
  }

  double(6);
  console.log('The value of x is:', x, 'It should be 5.');
})();

//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

// For the sake of not adding another global variable to get the desired
// undefined result.

try {
  console.log(i); // should be 'undefined', not 3
}
catch {
  console.log("Variable 'i' is undefined.");
}

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

/* Since the variable x is also the name of the argument, it is treated as a
local variable and takes precedence over the global variable.  If the argument
name within the function was anything else, the global value of x would be
changed.  The same result could be achieved with a different variable name
by putting var before the x therefore creating a locally scoped variable x. */

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
