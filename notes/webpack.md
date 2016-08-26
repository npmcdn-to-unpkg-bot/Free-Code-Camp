# Webpack
Build Tool and Bundler  
Webpack doesn’t build your assets, and then separately bundle your modules, it considers your assets to be modules themselves.  
It’s a wicked smart module packing system. Once properly configured, it’ll know more about your stack then even you do, and it’ll know better than you how to best optimize it.

## Loaders
Loaders are small plugins that basically say “When you encounter this kind of file, do this with it”. Some examples of loaders:
```javascript
{
  // When you import a .ts file, parse it with Typescript
  test: /\.ts/,
  loader: 'typescript',
},
{
  // When you encounter images, compress them with image-webpack (wrapper around imagemin)
  // and then inline them as data64 URLs
  test: /\.(png|jpg|svg)/,
  loaders: ['url', 'image-webpack'],
},
{
  // When you encounter SCSS files, parse them with node-sass, then pass autoprefixer on them
  // then return the results as a string of CSS
  test: /\.scss/,
  loaders: ['css', 'autoprefixer', 'sass'],
}
```javascript

### Getting Started
I also recommend you add node_modules/.bin to your PATH variable to avoid having to type node_modules/.bin/webpack every time. All examples after this won’t show the node_modules/.bin part of the commands I’ll run.  
#### Webpack Config File
```javascript
module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
};
```
```javascript
<!DOCTYPE html>
<html>
<body>
    <h1>My title</h1>
    <a>Click me</a>

    <script src="../builds/bundle.js"></script>
</body>
</html>
```
You can also run `webpack --watch` to make it automatically watch for changes to your files and recompile as needed.
#### Working example
# BABEL LOADER DIDN'T WORK FOR ME
```javascript
npm i --save-dev webpack
npm i -s jquery
```
directory:
app
  - src
    + index.html
	+ index.js
  - webpack.config.js
`//watch bundles on new save`
`//note: / did not work needed \`
`node_modules\.bin\webpack [--watch]` 
npm install babel-loader --save-dev
npm install babel-core babel-preset-es2015 --save-dev
#### create .babelrc file with contents 
`{ "presets": ["es2015"] }`
```javascript
module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
            }
        ],
    }
};
```
### Style loaders

`npm install css-loader style-loader html-loader sass-loader node-sass --save-dev`

loader array.  
```
{
    test:    /\.js/,
    loader:  'babel',
    include: __dirname + '/src',
},
{
    test:   /\.scss/,
    loader: 'style!css!sass',
    // Or
    loaders: ['style', 'css', 'sass'],
},
{
    test:   /\.html/,
    loader: 'html',
}
```
