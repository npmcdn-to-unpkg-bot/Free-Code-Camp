[site](http://github.com/airbnb/javascript)
#### References
use const and let over var  
```javascript
//const and let only exist in the blocks they are defined not function scoped
{
	let a = 1;
	const b = 1;
}
console.log(a) // Reference Error
console.log(b) // Reference Error
```
#### Use shorthand notation

object:
```javascript
//bad
const atom = {
	value: 1,
	addValue: function(value){
		return atom.value + value
	},
};
//good 
const atom = {
	value: 1,
	addValue(value){ // notice shorthand
		return atom.value + value
	}
}
```
Property value shorthand  

```javascript
const lukeSkywalktker = ' Luke Skywalker';
//bad
const obj  = {
	lukeSkywalktker: lukeSkywalktker
}
//good
const obj = {
	lukeSkywalktker
}
```
## Arrays
Use array spreads to copy arrays
```javascript
//bad
const len = items.length;
const itemsCopy = [];
let i;
for (i = 0; i < len; i++){
	itemsCopy[i] = items[i];
}
//good
const itemsCopy = [...items];
```
### Convert to Arrays
use Array.from
```javascript
const foo = document.querySelector('.foo');
const nodes = Array.from(foo)
```
#### Use Return Statements when rarray destructoring except with one liners
```javascript
// good
[ 1, 2 , 3]. map((x) => {
  const y = x + 1 ;
  return x * y;
});

// good
[ 1, 2 , 3]. map(x => x + 1);

// bad
const flat = {};
[[ 0, 1 ], [2, 3], [4 , 5]]. reduce((memo, item, index) => {
  const flatten = memo. concat(item);
  flat[index] = flatten;
});

// good
const flat = {};
[[ 0, 1 ], [2, 3], [4 , 5]]. reduce((memo, item, index) => {
  const flatten = memo. concat(item);
  flat[index] = flatten;
  return flatten;
});

// bad
inbox. filter((msg) => {
  const { subject , author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false ;
  }
});

// good
inbox. filter((msg) => {
  const { subject , author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false ;
});
```
#### Use object destructoring for multiple return values
You can add new properties over time or change the order of things without breaking call sites.
```javascript
const arr = [1 , 2, 3, 4 ];

// bad
const first = arr[0 ];
const second = arr[1 ];

// good
const [first, second] = arr;

// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top ] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);
```
## Strings
Use single quotes '' for strings
```javascript
//bad
const name = "Capt. Janeway";
//good
const name = 'Capt. Janeway';
```
Strings that cause the line to go over 100 characters should be written across multiple lines using string concatenation.

```javascript
//bad
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
// good
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.' ;
```
When programmatically building up strings, use template strings instead of concatenation


Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?' ;
}

// bad
function sayHi(name) {
  return ['How are you, ' , name, '?']. join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```
Never use eval()  on a string, it opens too many vulnerabilities.

## Functions
Use function declarations instead of function expressions
Easier to id in call stacks
Whole body of function declaration is hoisted
```javascript
//bad
const foo = function(){
}
//good
function foo(){
}
```
Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.

ECMA-262 defines a block  as a list of statements. A function declaration is not a statement.

```javascript
// bad
if (currentUser) {
  function test () {
    console.log ('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log ('Yup.');
  };
}
```
Never name a parameter arugments! This will take precedence over arguments object. 
Never use arguments , opt to use rest syntax ... instead.

Why? ...  is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like arguments .
```javascript
// bad
function concatenateAll() {
  const args = Array.prototype .slice.call( arguments);
  return args.join ('');
}

// good
function concatenateAll( ...args) {
  return args.join ('');
}
```
Avoid unneeded ternary statements.

```
// bad
const foo = a ? a : b;
const bar = c ? true : false ;
const baz = c ? false : true ;

// good
const foo = a || b;
const bar = !! c;
const baz = ! c;

// bad
if (test)
  return false ;

// good
if (test) return false;

// good
if (test) {
  return false ;
}

// bad
function foo() { return false ; }

// good
function bar() {
  return false ;
}
```


