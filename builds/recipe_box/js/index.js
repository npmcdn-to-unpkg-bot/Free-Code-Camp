"use strict";

var Panel = ReactBootstrap.Panel,
    Accordion = ReactBootstrap.Accordion;
var Button = ReactBootstrap.Button,
    Input = ReactBootstrap.Input;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem;

var recipes = typeof localStorage["recipelist"] != "undefined" ? JSON.parse(localStorage["recipelist"]) : [{ title: "Taco", ingredients: ["Beef", "Seasoning", "Tortilla"], directions: " add" }, { title: "Chicken Noodle Soup", ingredients: ["Chicken", "Onion", "Carrots", "Celery", "noodles"], directions: "add" }];

var RecipeList = React.createClass({
	displayName: "RecipeList",

	render: function render() {
		var recipelist = function recipelist(item) {
			return React.createElement(
				ListGroupItem,
				null,
				item
			);
		};
		return React.createElement(
			ListGroup,
			null,
			this.props.ingredients.map(recipelist)
		);
	}
});

var RecipeTitle = React.createClass({
	displayName: "RecipeTitle",

	render: function render() {
		return React.createElement(
			"h3",
			null,
			" ",
			this.props.title
		);
	}
});

var RecipeDirections = React.createClass({
	displayName: "RecipeDirections",

	render: function render() {
		return React.createElement(
			"p",
			null,
			" ",
			this.props.directions
		);
	}
});

var Recipe = React.createClass({
	displayName: "Recipe",

	getInitialState: function getInitialState() {
		return { showEditModal: false, edIng: this.props.ingredients };
	},
	deleteRecipe: function deleteRecipe(e) {
		e.preventDefault();

		recipes.splice(this.props.index, 1);
		update();
	},
	hideModal: function hideModal(e) {
		e.preventDefault();
		this.setState({ showEditModal: false });
	},
	showModal: function showModal(e) {
		e.preventDefault();
		this.setState({ showEditModal: true });
	},
	handleEdit: function handleEdit(e) {
		e.preventDefault();
		console.log(recipes[this.props.index].ingredients);
		console.log($("#changeIngredients").val());
		this.setState({ showEditModal: false });

		update();
	},
	updateEdit: function updateEdit(e) {
		this.setState({ edIng: e.target.value });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				null,
				React.createElement(RecipeTitle, { title: this.props.title }),
				React.createElement(RecipeList, { ingredients: this.props.ingredients })
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"h4",
					null,
					React.createElement(
						"strong",
						null,
						"Directions:"
					)
				),
				React.createElement(RecipeDirections, { directions: this.props.directions })
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ className: "btn btn-danger", bsStyle: "danger", id: "btn-del" + this.props.index, onClick: this.deleteRecipe },
					"Delete"
				),
				React.createElement(
					"button",
					{ className: "btn btn-primary", id: "btn-edit" + this.props.index, onClick: this.showModal },
					" Edit"
				)
			),
			React.createElement(
				Modal,
				{ show: this.state.showEditModal, onHide: this.hideModal },
				React.createElement(
					Modal.Header,
					{ closeButton: true },
					React.createElement(
						Modal.Title,
						{ id: "editModalTitle" },
						"Edit Recipe"
					)
				),
				React.createElement(
					Modal.Body,
					null,
					React.createElement(
						"form",
						null,
						React.createElement(
							"h4",
							null,
							"Recipe"
						),
						React.createElement("input", { value: this.props.title, type: "text", label: "Recipe", id: "title" }),
						React.createElement(
							"h4",
							null,
							"Ingredients"
						),
						React.createElement("input", { type: "text", id: "changeIngredients", size: "40", label: "ingredients", value: this.state.edIng, onChange: this.updateEdit })
					)
				),
				React.createElement(
					Modal.Footer,
					null,
					React.createElement(
						"button",
						{ className: "btn btn-info", onClick: this.handleEdit },
						"Edit Recipe"
					),
					React.createElement(
						"button",
						{ className: "btn btn-warning", onClick: this.hideModal },
						"Close"
					)
				)
			)
		);
	}
});

var RecipeBook = React.createClass({
	displayName: "RecipeBook",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				Accordion,
				null,
				this.props.data
			)
		);
	}
});

var AddRecipe = React.createClass({
	displayName: "AddRecipe",

	getInitialState: function getInitialState() {
		return { text: '', texting: [], showModal: false };
	},
	onChange: function onChange(e) {
		this.setState({ text: this.refs.title.value, texting: this.refs.ingredients.value });
	},

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var nextRecipe = { title: this.refs.title.value, ingredients: this.refs.ingredients.value.split(",") };
		var nextText = '';
		console.log(nextRecipe);
		recipes.push({ title: nextRecipe.title, ingredients: nextRecipe.ingredients });
		console.log(recipes);
		this.setState({ text: nextText, texting: nextText, showModal: false });
		update();
	},
	handleClick: function handleClick(e) {
		e.preventDefault();
		this.setState({ showModal: true });
	},
	hide: function hide(e) {
		e.preventDefault();
		this.setState({ showModal: false });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.handleClick, className: "btn btn-lg btn-primary" },
					"Add A Recipe!!!"
				)
			),
			React.createElement(
				Modal,
				{ show: this.state.showModal },
				React.createElement(
					Modal.Header,
					{ closeButton: true },
					React.createElement(
						Modal.Title,
						{ id: "modalTitle" },
						"Add a Recipe"
					)
				),
				React.createElement(
					Modal.Body,
					null,
					React.createElement(
						"form",
						{ onSubmit: this.handleSubmit },
						React.createElement(
							"h4",
							null,
							React.createElement(
								"strong",
								null,
								"Recipe Title"
							)
						),
						React.createElement("input", { type: "text", ref: "title", value: this.state.text, onChange: this.onChange }),
						React.createElement(
							"h4",
							null,
							React.createElement(
								"strong",
								null,
								"Ingredients"
							)
						),
						React.createElement("input", { type: "text", ref: "ingredients", value: this.state.texting, onChange: this.onChange, placeholder: "Enter Ingredients, Separated By Commas", size: "35" }),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ className: "btn btn-lg btn-primary" },
							"Add The Recipe!"
						),
						React.createElement(
							"button",
							{ onClick: this.hide, className: "btn btn-lg btn-info" },
							"Close"
						)
					)
				)
			)
		);
	}
});

function update() {
	localStorage.setItem("recipelist", JSON.stringify(recipes));
	var rows = [];
	for (var i = 0; i < recipes.length; i++) {
		rows.push(React.createElement(
			Panel,
			{ header: recipes[i].title, eventKey: i, bsStyle: "success" },
			React.createElement(Recipe, { title: recipes[i].title, ingredients: recipes[i].ingredients, index: i, directions: recipes[i].directions })
		));
	}
	React.render(React.createElement(RecipeBook, { data: rows }), document.getElementById("displayMe"));
}
React.render(React.createElement(AddRecipe, null), document.getElementById('fcctop'));
update();