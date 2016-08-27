SCSS
[guides and tutorials](http://thesassway.com/guides)

.block:: after ?

counter-increment:

box-sizing: border-box;

- {}

transform: translate(-50% , -50%);

transition: 0.20s;
content:
z-index: 1;

input: check ~ i {
}

//silent comment for developers

/*comments*/

/////////////////////////////////////////////

@for $i from 1 through $items

/////////////////////////////////////////////

Nesting Selectors:

.foo {
    background: orange;
    p {
        color: blue;
        font-size: 14px;
        font-weight: bold;
    }
}

compiles to:

.foo {
    background: orange;
    .foo p {
        color: blue;
        font-size: 14px;
        font-weight: bold;
    }
}

Nested Properties:

.foo {
    font {
        family: arial;
        weight: bold;
        size: 2em;
    }
}

compiles to:

.foo {

        font-family: arial;
        font-weight: bold;
        font-size: 2em;

}

Ambersand Nested Selection:

allows to redefine parent selectors

a {
    color: blue;
    text-decoration: none;
    &: hover {
        text-decoration: underline;
    }
}

a {
    color: blue;
    text-decoration: none;

}

a: hover {
    text-decoration: underline;
}

will redefine parent no matter how deep you go.

.foo {
    .awesome{
        .class {
            .amazing {
                .things {
                    background: orange;
                    .no-foo & {
                        backgorund: green;
                    }
                }
            }
        }
    }
}

compiles to :

.
foo .awesome .class .amazing .things {
    background: orange;
}

.no-foo .foo .awesome .class .amazing .things {
    background: green;
}

Variables:
start w/ $

$border-color: #ccc;
.box {
    border: 1px solid $border-color;
}

Math:
enclose expressions in parenthasis.

html {
    font-size: ( 12/16) * 1em;
    font-size: ( 12/16) * 100%;
}

Extending classes:

$standard-border-color: gray;
$winning-border-color: green;

.user-dialog-box {
    border: 10px solid $standard-border-color;
    padding: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

}

.alert-winning-user {
    @extend .user-dialog-box;
    border-color: $winning-border-color;
}

Silent Classes:

By replacing . w/ % Sass will not process this rule as CSS unless it is extended with another selector.

$standard-border-color: gray;
$winning-border-color: green;

//reusable default silent class

%standard-dialog-box {
    border: 10px solid $standard-border-color;
    padding: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.user-notification {
    @extend %standard-border-color;
}

.alert-winning-user {
    @extend %standard-border-color;
    border-color: $winning-border-color;
}

Mixins:

Like extneds but have capacity to take arguments. Gives ability to make reusable code. Couple w/ variables to customize output.

@mixin dialog-box($border-color) {
    border: 10px solid $border-color;
    padding: 10px;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
}

To set dafault value:

@mixin dialogbox($border-color: gray) {
    border: $border-color;
}

Object oriented CSS:

1. Separate Structure and skin. Keep structure and positioning in a base object and visual features ( background, color, and border) in extender classes. This ensures no overwriting visual properties.

2. Separate container and content. Don't mimic structure of HTML in CSS. Don't refer to tags or ids. create classes instead.

%button {
    min-width: 100px;
    padding: 1em;
    border-radius: 1em;
}

%twitter-background {
    color: #fff;
    background: #55ace;
}

%facebook-background {
    color: #fff;
    background: #3b5998;
}

.btn {
    &--twitter {
        @extend %button;
        @extend %twitter-background;
    }
    &--facebook {
        @extend %button;
        @extend %facebook-background;
    }
}

<a href="#" class="btn--twitter" >Twitter</a>

Source maps:
help debug higher level languages which compile down to lower level languages.

Map functions:

Example: convert angle to radians.

@function convert-angle($value , $unit-name) {
    $factors: (
        rad: 1 rad,
        deg: 180deg/pi(),
        grad: 200grad/pi(),
        turn: 0.5turn/pi()
    );
    @if not unitless($value) {
        @warn '`#{$value}` should be unitless';
        return false;
    }
    @if not map-has-key ($factors, $unit-name) {
        @warn 'unit `#{$unit-name}` is not valid';
        return false;
    }
    @return $value*map-get($factors , $unit-name );
}
