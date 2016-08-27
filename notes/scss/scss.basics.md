Variables

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Here's an example:

SCSS SYNTAX

$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;}

CSS

body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

Nesting

SCSS SYNTAX

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }}

CSS

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;}

nav li {
  display: inline-block;}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

Import
// _reset.scss
html,body,ul,ol {
  margin: 0;
  padding: 0;}

// base.scss
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;}

Mixins

SCSS SYNTAX

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px);
}

To create a mixin you use the @mixin directive and give it a name. We've named our mixin border-radius. We're also using the variable $radius inside the parentheses so we can pass in a radius of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin. When your CSS is generated it'll look like this:

.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}

Extend/Inheritance
This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY.
SCSS SYNTAX

.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;}

.success {
  @extend .message;
  border-color: green;}

.error {
  @extend .message;
  border-color: red;}

.warning {
  @extend .message;
  border-color: yellow;}

The magic happens with the generated CSS, and this helps you avoid having to write multiple class names on HTML elements. This is what it looks like:

.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;}

.success {
  border-color: green;}

.error {
  border-color: red;}

.warning {
  border-color: yellow;
}

Operators
SCSS SYNTAX

.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}

We've created a very simple fluid grid, based on 960px. Operations in Sass let us do something like take pixel values and convert them to percentages without much hassle. The generated CSS will look like:

.container {
  width: 100%;}

article[role="main"] {
  float: left;
  width: 62.5%;}

aside[role="complementary"] {
  float: right;
  width: 31.25%;}
