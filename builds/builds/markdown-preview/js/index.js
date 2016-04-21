"use strict";

var MarkdownPreviewer = React.createClass({
	displayName: "MarkdownPreviewer",

	getInitialState: function getInitialState() {
		return { value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[My Blog](http://joechimienti.wordpress.com)*' };
	},
	handleChange: function handleChange() {
		this.setState({ value: this.refs.textarea.value });
	},
	rawMarkup: function rawMarkup() {
		return { __html: marked(this.state.value, { sanitize: true }) };
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col col-sm-6" },
				React.createElement(
					"h3",
					{ "class": "page-header" },
					"Input Markdown"
				),
				React.createElement("textarea", {
					onChange: this.handleChange,
					defaultValue: this.state.value,
					rows: "22",
					cols: "50",
					ref: "textarea" })
			),
			React.createElement(
				"div",
				{ className: "col col-sm-6" },
				React.createElement(
					"h3",
					null,
					"Output"
				),
				React.createElement("span", {
					className: "content",
					dangerouslySetInnerHTML: this.rawMarkup()
				})
			)
		);
	}
});

React.render(React.createElement(MarkdownPreviewer, null), document.getElementById('markdownPreview'));