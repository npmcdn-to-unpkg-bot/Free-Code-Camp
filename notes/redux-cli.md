# Redux Client
### Package Contents
##### Koa Server
The starter kit comes with the alpha version of [Koa](https://github.com/koajs/koa) server that is not meant to be used in production out of the box. You can build upon the server but that goes beyond this starter kit. [See deployment notes](https://github.com/davezuko/react-redux-starter-kit#deployment) at ./README.md.  
##### Code Quality
[Karma](https://karma-runner.github.io/) - a spectacular test runner - is used to run the tests. Check out ./build/karma.conf.js for test configurations.

[Mocha](https://mochajs.org/) test framework with chai, sinon-chai, chai-as-promised, and chai-enzyme for various assertions.

[PhantomJS](http://phantomjs.org/) headless webkit server that allows us to mock browser environment without having to launch real browser.

Code coverage reports/instrumentation with [isparta].

[ESLint](http://eslint.org/) for code linting. You can see and modify the linting rules at ./eslintrc
### Adding Route
add new childroute to route index 
```javascript
./src/routes/index.js

    // ...omitted for brewity

    require.ensure([], (require) => {
      next(null, [
        // Provide store for async reducers and middleware
        require('./Counter').default(store),
        require('./Zen').default(store),
        require('./NotFound').default
      ])
    })

// ...omitted for brevity
```
./src/routes/Zen/index.js
```javascript
import { injectReducer } from '../../store/reducers'

export default (store) => ({  
  path: 'zen',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ZenContainer',
      './modules/zen'
    ], (require) => {
      const Zen = require('./containers/ZenContainer').default
      const zenReducer = require('./modules/zen').default

      injectReducer(store, {
        key: 'zen',
        reducer: zenReducer
      })

      next(null, Zen)
    })
  }
})
```
We also use the provided injectReducer function to dynamically inject our reducer to the store (with the key zen, we'll see the state definition in the next section). Note that we could as well have multiple reducers on our component and use the combinReducers function from redux to send them to injectReducer function.
