'use strict';

var _ReactRedux = ReactRedux;
var connect = _ReactRedux.connect;
var Provider = _ReactRedux.Provider;
var _Redux = Redux;
var createStore = _Redux.createStore;
var applyMiddleware = _Redux.applyMiddleware;
var combineReducers = _Redux.combineReducers;

var recipes = function recipes() {
  if (!!localStorage['recipelist']) {
    return JSON.parse(localStorage['recipelist']);
  }
  var rec = [{
    title: 'Taco',
    ingredients: ['Beef', 'Seasoning', 'Tortilla'],
    directions: ' add'
  }, {
    title: 'Chicken Noodle Soup',
    ingredients: ['Chicken', 'Onion', 'Carrots', 'Celery', 'noodles'],
    directions: 'add'
  }];
  return rec;
};

//ACTIONS
var newRecipe = function newRecipe(title, ingredients, directions) {
  return {
    type: 'NEW_RECIPE',
    title: title,
    ingredients: ingredients,
    directions: directions
  };
};
var delRecipe = function delRecipe(title) {
  return {
    type: 'DELETE_RECIPE',
    title: title
  };
};
//Reducers
var recipesReducer = function recipesReducer(state, action) {
  switch (action.type) {
    case 'NEW_RECIPE':
      return [].concat(state, [{
        title: action.title,
        ingredients: action.ingredients,
        directions: action.directions
      }]);
    case 'DELETE_RECIPE':
      return state.filter(function (s) {
        return s.title !== action.title;
      });
    default:
      return state;
  }
};

var RecipeList_ = function RecipeList_(_ref) {
  var list = _ref.list;

  var rl = store.getState();
  var rec = [];
  list.forEach(function (r) {
    rec.push(React.createElement(Recipe, { reci: r }));
  });
  return React.createElement(
    'div',
    null,
    rec
  );
};
var mapStateToProps_RecipeList = function mapStateToProps_RecipeList(state) {
  return {
    list: state
  };
};
var RecipeList = connect(mapStateToProps_RecipeList)(RecipeList_);
var Recipe = function Recipe(_ref2) {
  var reci = _ref2.reci;

  var i = [];
  var d = [];
  reci.ingredients.forEach(function (ing) {
    i.push(React.createElement(
      'li',
      null,
      ing
    ));
  });

  var klass = reci.title.replace(/\s/g, '-');
  return React.createElement(
    'div',
    { className: 'row' },
    React.createElement(
      'div',
      { className: 'card col-xs-12 col-md-4 col-lg-2' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'h4',
          null,
          React.createElement(
            'a',
            { className: 'btn btn-primary', 'data-toggle': 'collapse', href: '#' + klass },
            reci.title
          )
        ),
        React.createElement(
          'button',
          { className: 'btn',
            onClick: function onClick() {
              return deleteRecipe(klass);
            } },
          'Delete'
        )
      ),
      React.createElement(
        'div',
        { className: 'collapse', id: klass },
        React.createElement(
          'h6',
          null,
          'Ingredients'
        ),
        React.createElement(
          'ul',
          null,
          i
        ),
        React.createElement(
          'h5',
          null,
          'Directions'
        ),
        React.createElement(
          'p',
          null,
          reci.directions
        )
      )
    )
  );
};
var AddRecipeButton = function AddRecipeButton() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { type: 'button', className: 'btn btn-floating', 'data-toggle': 'modal', 'data-target': '#addRecModal' },
      '          ',
      React.createElement(
        'i',
        { className: 'material-icons' },
        'add'
      )
    ),
    React.createElement(
      'div',
      { className: 'modal fade', id: 'addRecModal' },
      React.createElement(
        'div',
        { className: 'modal-body' },
        React.createElement(
          'form',
          {
            className: 'form',
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              addRecipe();
            } },
          React.createElement(
            'div',
            { className: 'form-group row' },
            React.createElement(
              'label',
              { 'for': 'title', className: 'col-form-label col-xs-2' },
              'Title:'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-10' },
              React.createElement('input', { className: 'form-control', name: 'title', type: 'text' })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group row' },
            React.createElement(
              'label',
              { 'for': 'ingredients', className: 'col-form-label col-xs-2' },
              'Ingredients:'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-10' },
              React.createElement('input', { className: 'form-control col-xs-8', name: 'ingredients', type: 'text' })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group row' },
            React.createElement(
              'label',
              { 'for': 'directions', className: 'col-form-label  col-xs-2' },
              'Directions:'
            ),
            React.createElement(
              'div',
              { className: 'col-xs-10' },
              React.createElement('input', { className: 'form-control', name: 'directions', type: 'text' })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group row' },
            React.createElement(
              'button',
              { className: 'btn', 'data-toggle': 'modal', 'data-target': '#addRecModal' },
              'add'
            )
          )
        )
      )
    )
  );
};

function addRecipe() {
  $('.modal').toggle();
  var f = $('.form').serializeArray();
  var t = f[0];
  var ing = f[1];
  var dir = f[2];

  var ingArr = ing.value.split(',');
  store.dispatch(newRecipe(t.value, ingArr, dir.value));
  $('.form')[0].reset();
  var jStr = JSON.stringify(store.getState());
  localStorage.setItem('recipelist', jStr);
}

function deleteRecipe(title) {
  store.dispatch(delRecipe(title));
  var jStr = JSON.stringify(store.getState());
  localStorage.setItem('recipelist', jStr);
}

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Recipe Box'
    ),
    React.createElement(RecipeList, null),
    React.createElement(AddRecipeButton, null)
  );
};
var store = Redux.createStore(recipesReducer, recipes(), window.devToolsExtension ? window.devToolsExtension() : undefined);
ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(App, null)
), document.getElementById('root'));
/*
$(window).bind('beforeunload', function(){
   
  return confirm('do you really wnat to exit bruh?')
 
});
*/