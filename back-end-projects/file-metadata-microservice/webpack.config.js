module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	loaders: [
	{test: /\.css$/, loader: 'style!css!'}
	]
}