"use strict";

var products = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

var ProductRow = React.createClass({
	displayName: "ProductRow",

	render: function render() {
		var name = this.props.product.stocked ? this.props.product.name : React.createElement(
			"span",
			{ style: { color: 'red' } },
			this.props.product.name
		);
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				name
			),
			React.createElement(
				"td",
				null,
				this.props.product.price
			)
		);
	}
});

var ProductCategoryRow = React.createClass({
	displayName: "ProductCategoryRow",

	render: function render() {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"th",
				{ colSpan: "2" },
				this.props.category
			)
		);
	}
});

var ProductTable = React.createClass({
	displayName: "ProductTable",

	render: function render() {
		var rows = [];
		var lastCategory = null;
		this.props.products.map(function (product) {
			if (!product.stocked && this.props.isFiltered || product.name.indexOf(this.props.userText) === -1) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(React.createElement(ProductCategoryRow, { category: product.category }));
			}
			rows.push(React.createElement(ProductRow, { product: product }));
			lastCategory = product.category;
		}.bind(this));
		return React.createElement(
			"table",
			{ className: "table table-striped table-hover" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Name"
					),
					React.createElement(
						"th",
						null,
						"Price"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				rows
			)
		);
	}
});

var SearchBar = React.createClass({
	displayName: "SearchBar",

	handleChange: function handleChange() {
		this.props.onUserInput(this.refs.uCheck.checked, this.refs.text.value);
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"form",
				null,
				React.createElement("input", { type: "text", ref: "text", placeholder: "search...", value: this.props.userText, onChange: this.handleChange }),
				React.createElement(
					"p",
					null,
					React.createElement("input", { ref: "uCheck", type: "checkbox", onChange: this.handleChange, checked: this.props.isFiltered }),
					" Click to hide items not in stock "
				)
			)
		);
	}
});

var FilterableProductTable = React.createClass({
	displayName: "FilterableProductTable",

	getInitialState: function getInitialState() {
		return { isFiltered: false, userText: '' };
	},
	onUserInput: function onUserInput(isFiltered, userText) {
		this.setState({ isFiltered: isFiltered, userText: userText });
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "filterable-table" },
			React.createElement(SearchBar, { isFiltered: this.state.isFiltered, userText: this.state.userText, onUserInput: this.onUserInput }),
			React.createElement(ProductTable, { products: this.props.products,
				isFiltered: this.state.isFiltered, userText: this.state.userText })
		);
	}
});

React.render(React.createElement(FilterableProductTable, { products: products }), document.getElementById("displayMe"));