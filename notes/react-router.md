# React Router
```javascript
import { Router, Route, hashHistory} from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
 </Router/>
),
document.getElementById('root');
```
## Links
IndexLink - active = current page
Link - active = page and parent routes
```javascript
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return (
      <ul role="nav">
        <li><Link to='/about'>About</Link</li>
      </ul>
    );
  }
});
```
#### Link Classes
activeStyle=
activeClassName=
### Nested Routes
Place nested routes as a subcomponent of route and reference as children props.
```javascript
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Place nested routes here */}
      <Route path="/about" component={About}/>
      <Route path="polls" component={Polls}/>
    </Route>
  </Router>
),
document.getElementById('root')
);

// in App.js

render(){
  return(
    <div>
	{this.props.children}
    </div>
  );
}
```
### URL Params
place in app root

```
<Route path='/polls/:username/:repo' component={Repo}/>

// in Repo.js

return </h2>{this.props.params.repoName}</h2>

// in Repos.js
<Link to="repos/reactjs/react"</Link></li>
```

