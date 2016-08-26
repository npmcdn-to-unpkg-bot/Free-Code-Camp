# React
a Javascript library for building user interfaces. 


### Initialization: 
- getDefaultProps 
    -  redux place MyVar.defaultProps = {}; outside components  
-  getInitialState
    -  redux state = {};
-  componentWillMount
-  render 
-  componentDidMount.  

### state changes: 
- shouldComponentUpdate
- componentWillUpdate
- render
- componentdDidUpdate
- componentWillUnmount.  

### props changes:
- componentWillReceiveProps 
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate.  

```javascript
const MyVar extends React.Component{
// Initialization
  constructor(props){
	super();
	state = {};
	defaultProps = {};
	//componentDidMount
  }
  }
```
#### Initial Mounting
```javascript
  componentWillMount() {
    called before rendering.Do not manipulate DOM. Prepare for rendering.

    Invoked once, both on the client and server, immediately before the initial rendering occurs.If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
  }
  render() {
    required! when called it should examine props and state and
    return a single child element.Can return null or false to render nothing.Render should be pure. Don't modify state and does not read or write DOM (e.g. setTimeout)

    Never access refs inside of any component 's render mothon - or while any component's render method is running in the call stack.
  }
  componentDidMount() {
    Interact w / DOM, get data, use setTimeout.Invoked once on the client side.

    Invoked once, only on the client(not on the server), immediately after the initial rendering occurs.At this point in the lifecycle, you can access any refs to your children(e.g., to access the underlying DOM representation).The componentDidMount() method of child components is invoked before that of parent components.

    If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.

  },
```
#### Initial Unmounting
```javascript
  componentWillUnmount() {
    clean up operations(remove timers) called before component is removed from DOM
  },
```
  ### Lifestyle Methods
  
  #### Updating
  ```javascript
  componentWillReceiveProps(nextProps) {
    Invoked when a component is receiving new props.This method is not called
    for the initial render.

    Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState().The old props can be accessed via this.props.Calling this.setState() within this function will not trigger an additional render.

    One common mistake is for code executed during this lifecycle method to assume that props have changed.
    If you need to perform operations in response to a state change, use componentWillUpdate.
      //EXAMPLE
    componentWillReceiveProps(nextProps) {
      this.setState({
        likesIncreasing: nextProps.likeCount > this.props.likeCount
      });
    }
  }
  shouldComponentUpdate: function(nextProps, nextState) {
        // You can access `this.props` and `this.state` here
        // This function should return a boolean, whether the component should re-render.
         Use this as an opportunity to return false when you 're certain that the transition to the new props and state will not require a component update.

		shouldComponentUpdate: function(nextProps, nextState) {
			return nextProps.id !== this.props.id;
		}
      },

      If shouldComponentUpdate returns false, then render() will be completely skipped until the next state change.In addition, componentWillUpdate and componentDidUpdate will not be called.

    By default, shouldComponentUpdate always returns true to prevent subtle bugs when state is mutated in place, but if you are careful to always treat state as immutable and to read only from props and state in render() then you can override shouldComponentUpdate with an implementation that compares the old props and state to their replacements. If performance is a bottleneck, especially with dozens or hundreds of components, use shouldComponentUpdate to speed up your app.
  },
  componentWillUpdate(nextProps, nextState) {
    Invoked immediately before rendering when new props or state are being received.This method is not called
    for the initial render. Use this as an opportunity to perform preparation before an update occurs. You cannot use this.setState() in this method.If you need to update state in response to a prop change, use componentWillReceiveProps instead.
  },
  componentDidUpdate(prevProps, prevState) {
    invoked immediately after the component 's updates are flushed to the DOM. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated.
```
  #### Unmounting
  ```javascript
    componentWillUnmount() {
    Invoked immediately before a component is unmounted from the DOM.

    Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
  },

	render() {
	  console.log(this.state.board);
	  return (
		<div className=" table">
			{this.state.board.map(function(item, index) {
				return (
					<Cell key={index} id={index}  placeTile={this.placeTile} state={this.state.board[index]}/>
				);
			}.bind(this) )}
			</div>
	  );
	}
});	
// can place props outside component:  
MyVar.defaultProps = {};
```### React ES6 & ES5 differences:
The class’constructor now assumes the role previously filled by componentWillMount:

// The ES5 way
```javascript
var EmbedModal = React.createClass({
  componentWillMount: function() { … },
});
```
// The ES6+ way
```javascript
export class Counter extends React.Component {
  constructor(props) {
    // only pass props when you want to access this.props in constructor
    // Which is probably redundant since you already have a reference to it
    super(props);
    this.state = {count: props.initialCount};
	//Note: binding of this in constructor
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
```
#### When in development (not production), if any component is not given a required prop, or is given the wrong type for one of its props, then React will log an error to let you know. This has several benefits:  

+ It can catch bugs early, by preventing silly mistakes
+ If you use isRequired, then you don't need to check for undefined or null as often
+ It acts as documentation, saving readers from having to search through a component to find all the props that it needs  

```javascript
Counter.propTypes = { 
	initialCount: React.PropTypes.number,
	// more examples
	numbers: React.PropTypes.arrayOf(Reac.PropTypes.number)
}
Counter.defaultProps = { 
  initialCount: 0 
};
```
### No Autobinding

Methods follow the same semantics as regular ES6 classes, meaning that they don't automatically bind this to the instance. You'll have to explicitly use .bind(this) or arrow functions =>:
```javascript
// You can use bind() to preserve `this`
<div onClick={this.tick.bind(this)}>

// Or you can use arrow functions
<div onClick={() => this.tick()}>
```
We recommend that you bind your event handlers in the constructor so they are only bound once for every instance:
```javascript
constructor(props) {
  super(props);
  this.state = {count: props.initialCount};
  this.tick = this.tick.bind(this);
}
```## Transferring Props
You can use JSX spread attributes to merge the old props with additional values:  
`<Component {...this.props} more="values" />`

#### Manual Transfer  
Most of the time you should explicitly pass the properties down. This ensures that you only expose a subset of the inner API, one that you know will work.  
```javascript
function FancyCheckbox(props) {
  var fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
  return (
    <div className={fancyClass} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
ReactDOM.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById('example')
);
```
Sometimes it's fragile and tedious to pass every property along. In that case you can use destructuring assignment with rest properties to extract a set of unknown properties. List out all the properties that you would like to consume, followed by ...other.
```javascript
//This ensures that you pass down all the props EXCEPT the ones you're consuming yourself.
var { checked, ...other } = props;

function FancyCheckbox(props) {
  var { checked, ...other } = props;
  var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
  // `other` contains { onClick: console.log } but not the checked property
  return (
    <div {...other} className={fancyClass} />
  );
}
ReactDOM.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById('example')
);
```

Always use the destructuring pattern when transferring unknown other props.
```javascript
function FancyCheckbox(props) {
  var fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
  // ANTI-PATTERN: `checked` would be passed down to the inner component
  return (
    <div {...props} className={fancyClass} />
  );
}
```
### Transferring Props: A Shortcut

A common type of React component is one that extends a basic HTML element in a simple way. Often you'll want to copy any HTML attributes passed to your component to the underlying HTML element. To save typing, you can use the JSX spread syntax to achieve this:
```javascript
var CheckLink = React.createClass({
  render: function() {
    // This takes any props passed to CheckLink and copies them to <a>
    return <a {...this.props}>{'√ '}{this.props.children}</a>;
  }
});

ReactDOM.render(
  <CheckLink href="/checked.html">
    Click here!
  </CheckLink>,
  document.getElementById('example')
);
```
Another difference is that propTypes and defaultProps are defined as properties on the constructor instead of in the class body.
```javascript
export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
```## Load Initial Data via AJAX
Fetch data in componentDidMount.When the response arrives, store the data in state, triggering a render to update your UI.  
When fetching data asynchronously, use componentWillUnmount to cancel any outstanding requests before the component is unmounted.  

This example fetches the desired Github user 's latest gist:
```javascript
var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function(result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
            {this.state.username}'s last gist is
            <a href={this.state.lastGistUrl}>here</a>.
          </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  mountNode
);
```## DOM differences

All DOM properties and attributs should be camelCase except
for data - and aria - which should remain lowercase.    

style attribute accepts camelCase rathen than CSS string(prevents security holes)  

JSX Elements:  
for built - in DOM nodes should use className and htmlFor.custom elements should use class and for.

#### Supported Events

React normalizes events to have consistant properties across browsers.

#### Clipboard events:  
events that occur due to user indirectly entering text:  
- onCopy
- oncut
- onPaste  
(props: DOMDataTransfer, clipboardData, onCompositionUpdate)  
#### Composition Events:
- onCompositionEnd
- onCompositionStart  
(prop: string, date)

#### Form events: 
- onChange
- onInput 
- onSubmit
#### Selection events: 
- onSelect
- UI Event 
- onScroll

## Forms:
events: onChange, defaultValue (checkbox uses defaultChecked)  
note: checkbox and radio use check event, not change.  
textarea: value, 
input: value
radio: checked
checkbox: checked
selected: option

example:
```javascript  
//Select Multiple Example
<select multiple={true} value={['B' , 'C' ]}>
	<option value="A">Apple</option>
	<option value="B">Banana</option>
	<option value="C">Carrot</option>
</select>
```
