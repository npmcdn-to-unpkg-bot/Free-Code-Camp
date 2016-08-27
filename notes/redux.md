# Redux
Redux is a predictable state container for Javascript apps. 

### 3 Principals:
- Single Source of Truth (The state of your whole application is stored in a single object tree; the "Store")
-  State is Read-Only ("Immutable")
-  Changes are made Using Pure Functions (to change the state tree we use "actions" called "reducers", these are simple functions which perform a single action)  

### Reducers
 It’s very important that the reducer stays pure. Things you should never do inside a reducer:
1.  Mutate its arguments;
2. Perform side effects like API calls and routing transitions;
3. Call non-pure functions, e.g. Date.now() or Math.random().
 
 We return the previous state in the default case. It’s important to return the previous state for any unknown action.

```javascript
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          //return {...state, completed: todo.completed}
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }}
```
Note that each of these reducers is managing its own part of the global state. The stateparameter is different for every reducer, and corresponds to the part of the state it manages.

## STORE:

The Store is the object that brings them together. The store has the following responsibilities:

* Holds application state;
* Allows access to state via getState();
* Allows state to be updated via dispatch(action);
* Registers listeners via subscribe(listener);
* Handles unregistering of listeners via the function returned by subscribe(listener).

### Store Methods
- Do not create more than one store in an app. Use `combineReducers` to create a root reducer. 
- Store = immutable object. spread properties, concat, and Object.assign({}, state, newData)  
createStore(reducer, [preloadedState], [enhancer])

reducer: function that returns the next state tree. 
preloaded state: initial state. if you have combine reducers must be a plain object. Otherwise you can pass anything the reducer can understand.  
enhancer: (function) applyMiddleware()  

## Containers
 This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component 

```javascript
import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }}

let store = createStore(todos, [ 'Use Redux' ])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'})

console.log(store.getState())// [ 'Use Redux', 'Read the docs' ]
```
	
## Components

Reusable Presentational Components
Presentational components:

prefer functions as oppossed to classes becuase youi can set props as argumentss instead of inside the render moethod. 


```javascript
const TodoList = () => (
  <div>
    <input type="text" />
    <input type="button" className="btn waves-effect red waves-light" value="click"/>
  </div>
);
```
NOTE: did not work with brackets !!!! need parenthasiss.      
and using a ref adds a minified exception!!!!
Avoiding Array Mutations with concat(), slice(), and ...spread
Instead of .push I'm going to use the  concat method which does not modify the array.
const addCounter = (list) => {
  return list.concat ([0]);
};
And I can also use the new ES6  spread operator to write the code in a more concise way:
const addCounter = (list) => {
  return [... list, 0];
};
const removeCounter = (list, index) => {
  return list
    . slice(0 , index)
    . concat(list.slice (index+1 ));
};
Finally, instead of writing it as a method chain with  concat calls, I can use the ES6  spread operator to write it more concisely:
const removeCounter = (list, index) => {
  return [
    ...list.slice (0, index),
    ...list.slice (index + 1)
  ];
};


### Avoiding Object Mutations with Object.assign() and ...spread
```javascript
const toggleTodo = (todo) => {
  return Object .assign({}, todo, {
    completed : ! todo.completed
  });
};
Another option that does not require a polyfill is use the new  Object  spread operator  which is not part of ES6 however it is proposed for ES7 it is "fairly popular" and it is  enabled in Babel if you use the "stage 2 preset":
const toggleTodo = (todo) => {
  return {
    ...todo,
    completed : ! todo.completed
  }
};
```


Note: While the spread operator is an ES6 Standard for Array, its only a Draft for Object proposed for ES7 which means it is not yet available in any Browser!   

As such I have modified Dan's code to use Object.assign (see Video #10) which (at least*) works in Chrome...:
```javascript
case 'TOGGLE_TODO':
  return state.map(todo => {
    if(todo.id !== action.id){
      return todo;
    }
    return Object.assign({}, todo, {
      completed: !todo.completed
    });
  });
```
The works in ALL Modern Browsers Today (Without Babel) way of doing this is:
```javascript
case 'TOGGLE_TODO':
  return state.map(todo => {
    if(todo.id !== action.id){
      return todo;
    }
    var keys = Object.keys(todo); // IE9+
    var toggled = {};             // new object to avoid mutation
    keys.forEach(function(index) {
      toggled.index = todo.index; // copy all properties/values of todo
    });
    toggled.completed = !todo.completed
    return toggled;
  });
```


using the React callback ref  API where ref is a function it gets the  node corresponding to the ref and I'm saving that node  in this case this.input so I'm able to  read the value of the input inside my event handler, I'm reading this.input.value and I'm also able to  reset that value after dispatching the action so that the field is cleared.

## Redux Thunk

##### Working example CANT GET WORKING
 ```javascript
//Allows you to dispatch a function to the store.
//Regular Action
const update = () =>{
  return{
      type: 'UPDATE'
  };
}
//thunk  function
function tick(){
  return function(dispatch, getState){
    console.log('hello')
    dispatch(update())
    setTimeout( () => {
      document.write('hello')
    }, 2000)
  }

}
//Note do not need thunk with above example as this will work
function tick(){
  store.dispatch(update())
  setTimeout(() =>{
    document.write('hello')
  }, 2000)
}

const reducer = (state = 0, action) =>{
    switch(action.type){
        case 'UPDATE':
            return state + 1;
        default:
            return state;
    }
}
const app = Redux.combineReducers({
  reducer
})
const createStoreWithMiddleware = Redux.applyMiddleware(ReduxThunk.default)(Redux.createStore)
//const store = Redux.createStore(app, Redux.applyMiddleware(ReduxThunk.default), window.devToolsExtension ? window.devToolsExtension() : undefined);
const store = createStoreWithMiddleware(app, window.devToolsExtension ? window.devToolsExtension() : undefined)

//store.dispatch(tick())
tick();
```
