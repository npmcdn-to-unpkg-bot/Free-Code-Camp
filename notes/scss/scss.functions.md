
Index (F) » Sass » Script » Functions (frames)
Class List Method List File List 
Module: Sass::Script::Functions
Included in:EvaluationContextDefined in:/Users/ceppstei/Projects/sass-lang/.sass/lib/sass/script/functions.rb
Overview

Methods in this module are accessible from the SassScript context. For example, you can write

$color: hsl(120deg, 100%, 50%)
and it will call #hsl.

The following functions are provided:

Note: These functions are described in more detail below.

RGB Functions
rgb($red, $green, $blue)
Creates a Color from red, green, and blue values.
rgba($red, $green, $blue, $alpha)
Creates a Color from red, green, blue, and alpha values.
red($color)
Gets the red component of a color.
green($color)
Gets the green component of a color.
blue($color)
Gets the blue component of a color.
mix($color1, $color2, [$weight])
Mixes two colors together.
HSL Functions
hsl($hue, $saturation, $lightness)
Creates a Color from hue, saturation, and lightness values.
hsla($hue, $saturation, $lightness, $alpha)
Creates a Color from hue, saturation, lightness, and alpha values.
hue($color)
Gets the hue component of a color.
saturation($color)
Gets the saturation component of a color.
lightness($color)
Gets the lightness component of a color.
adjust-hue($color, $degrees)
Changes the hue of a color.
lighten($color, $amount)
Makes a color lighter.
darken($color, $amount)
Makes a color darker.
saturate($color, $amount)
Makes a color more saturated.
desaturate($color, $amount)
Makes a color less saturated.
grayscale($color)
Converts a color to grayscale.
complement($color)
Returns the complement of a color.
invert($color)
Returns the inverse of a color.
Opacity Functions
alpha($color) / opacity($color)
Gets the alpha component (opacity) of a color.
rgba($color, $alpha)
Changes the alpha component for a color.
opacify($color, $amount) / fade-in($color, $amount)
Makes a color more opaque.
transparentize($color, $amount) / fade-out($color, $amount)
Makes a color more transparent.
Other Color Functions
adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
Increases or decreases one or more components of a color.
scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])
Fluidly scales one or more properties of a color.
change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
Changes one or more properties of a color.
ie-hex-str($color)
Converts a color into the format understood by IE filters.
String Functions
unquote($string)
Removes quotes from a string.
quote($string)
Adds quotes to a string.
str-length($string)
Returns the number of characters in a string.
str-insert($string, $insert, $index)
Inserts $insert into $string at $index.
str-index($string, $substring)
Returns the index of the first occurrence of $substring in $string.
str-slice($string, $start-at, [$end-at])
Extracts a substring from $string.
to-upper-case($string)
Converts a string to upper case.
to-lower-case($string)
Converts a string to lower case.
Number Functions
percentage($number)
Converts a unitless number to a percentage.
round($number)
Rounds a number to the nearest whole number.
ceil($number)
Rounds a number up to the next whole number.
floor($number)
Rounds a number down to the previous whole number.
abs($number)
Returns the absolute value of a number.
min($numbers…)
Finds the minimum of several numbers.
max($numbers…)
Finds the maximum of several numbers.
random([$limit])
Returns a random number.
List Functions
Lists in Sass are immutable; all list functions return a new list rather than updating the existing list in-place.

All list functions work for maps as well, treating them as lists of pairs.

length($list)
Returns the length of a list.
nth($list, $n)
Returns a specific item in a list.
set-nth($list, $n, $value)
Replaces the nth item in a list.
join($list1, $list2, [$separator])
Joins together two lists into one.
append($list1, $val, [$separator])
Appends a single value onto the end of a list.
zip($lists…)
Combines several lists into a single multidimensional list.
index($list, $value)
Returns the position of a value within a list.
list-separator($list)
Returns the separator of a list.
Map Functions
Maps in Sass are immutable; all map functions return a new map rather than updating the existing map in-place.

map-get($map, $key)
Returns the value in a map associated with a given key.
map-merge($map1, $map2)
Merges two maps together into a new map.
map-remove($map, $keys…)
Returns a new map with keys removed.
map-keys($map)
Returns a list of all keys in a map.
map-values($map)
Returns a list of all values in a map.
map-has-key($map, $key)
Returns whether a map has a value associated with a given key.
keywords($args)
Returns the keywords passed to a function that takes variable arguments.
Selector Functions
Selector functions are very liberal in the formats they support for selector arguments. They can take a plain string, a list of lists as returned by & or anything in between:

A plain string, such as ".foo .bar, .baz .bang".
A space-separated list of strings such as (".foo" ".bar").
A comma-separated list of strings such as (".foo .bar", ".baz .bang").
A comma-separated list of space-separated lists of strings such as ((".foo" ".bar"), (".baz" ".bang")).
In general, selector functions allow placeholder selectors (%foo) but disallow parent-reference selectors (&).

selector-nest($selectors…)
Nests selector beneath one another like they would be nested in the stylesheet.
selector-append($selectors…)
Appends selectors to one another without spaces in between.
selector-extend($selector, $extendee, $extender)
Extends $extendee with $extender within $selector.
selector-replace($selector, $original, $replacement)
Replaces $original with $replacement within $selector.
selector-unify($selector1, $selector2)
Unifies two selectors to produce a selector that matches elements matched by both.
is-superselector($super, $sub)
Returns whether $super matches all the elements $sub does, and possibly more.
simple-selectors($selector)
Returns the simple selectors that comprise a compound selector.
selector-parse($selector)
Parses a selector into the format returned by &.
Introspection Functions
feature-exists($feature)
Returns whether a feature exists in the current Sass runtime.
variable-exists($name)
Returns whether a variable with the given name exists in the current scope.
global-variable-exists($name)
Returns whether a variable with the given name exists in the global scope.
function-exists($name)
Returns whether a function with the given name exists.
mixin-exists($name)
Returns whether a mixin with the given name exists.
inspect($value)
Returns the string representation of a value as it would be represented in Sass.
type-of($value)
Returns the type of a value.
unit($number)
Returns the unit(s) associated with a number.
unitless($number)
Returns whether a number has units.
comparable($number1, $number2)
Returns whether two numbers can be added, subtracted, or compared.
call($name, $args…)
Dynamically calls a Sass function.
Miscellaneous Functions
if($condition, $if-true, $if-false)
Returns one of two values, depending on whether or not $condition is true.
unique-id()
Returns a unique CSS identifier.
Adding Custom Functions
New Sass functions can be added by adding Ruby methods to this module. For example:

module Sass::Script::Functions
  def reverse(string)
    assert_type string, :String
    Sass::Script::Value::String.new(string.value.reverse)
  end
  declare :reverse, [:string]
end
Calling Functions.declare tells Sass the argument names for your function. If omitted, the function will still work, but will not be able to accept keyword arguments. Functions.declare can also allow your function to take arbitrary keyword arguments.

There are a few things to keep in mind when modifying this module. First of all, the arguments passed are Value objects. Value objects are also expected to be returned. This means that Ruby values must be unwrapped and wrapped.

Most Value objects support the value accessor for getting their Ruby values. Color objects, though, must be accessed using rgb, red, green, or blue.

Second, making Ruby functions accessible from Sass introduces the temptation to do things like database access within stylesheets. This is generally a bad idea; since Sass files are by default only compiled once, dynamic code is not a great fit.

If you really, really need to compile Sass on each request, first make sure you have adequate caching set up. Then you can use Engine to render the code, using the options parameter to pass in data that can be accessed from your Sass functions.

Within one of the functions in this module, methods of EvaluationContext can be used.

Caveats

When creating new Value objects within functions, be aware that it’s not safe to call #to_s (or other methods that use the string representation) on those objects without first setting the #options attribute.

Defined Under Namespace

Classes: EvaluationContext, Signature

Class Method Summary (collapse)

+ declare(method_name, args, options = {})
Declare a Sass signature for a Ruby-defined function.
+ (Random) random_number_generator
Get Sass’s internal random number generator.
+ (Integer) random_seed=(seed)
Sets the random seed used by Sass’s internal random number generator.
+ ({Symbol => Object}?) signature(method_name, arg_arity, kwarg_arity)
Determine the correct signature for the number of arguments passed in for a given function.
Instance Method Summary (collapse)

- (Sass::Script::Value::Number) abs($number)
Returns the absolute value of a number.
- (Sass::Script::Value::Color) adjust_color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
Increases or decreases one or more properties of a color.
- (Sass::Script::Value::Color) adjust_hue($color, $degrees)
Changes the hue of a color.
- (Sass::Script::Value::Number) alpha($color)
Returns the alpha component (opacity) of a color.
- (Sass::Script::Value::List) append($list, $val, $separator:auto)
Appends a single value onto the end of a list.
- (Sass::Script::Value::Number) blue($color)
Gets the blue component of a color.
- call($name, $args...)
Dynamically calls a function.
- (Sass::Script::Value::Number) ceil($number)
Rounds a number up to the next whole number.
- (Sass::Script::Value::Color) change_color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])
Changes one or more properties of a color.
- (Sass::Script::Value::Bool) comparable($number1, $number2)
Returns whether two numbers can added, subtracted, or compared.
- (Sass::Script::Value::Color) complement($color)   
Returns the complement of a color.
- (Sass::Script::Value::String) counter($args...)   
This function only exists as a workaround for IE7‘s content: counter bug.
- (Sass::Script::Value::String) counters($args...)
This function only exists as a workaround for IE7‘s content: counter bug.
- (Sass::Script::Value::Color) darken($color, $amount)
Makes a color darker.
- (Sass::Script::Value::Color) desaturate($color, $amount)
Makes a color less saturated.
- (Sass::Script::Value::Bool) feature_exists($feature)
Returns whether a feature exists in the current Sass runtime.
- (Sass::Script::Value::Number) floor($number)
Rounds a number down to the previous whole number.
- (Sass::Script::Value::Bool) function_exists($name)
Check whether a function with the given name exists.
- (Sass::Script::Value::Bool) global_variable_exists($name)
Check whether a variable with the given name exists in the global scope (at the top level of the file).
- (Sass::Script::Value::Color) grayscale($color)
Converts a color to grayscale.
- (Sass::Script::Value::Number) green($color)
Gets the green component of a color.
- (Sass::Script::Value::Color) hsl($hue, $saturation, $lightness)
Creates a Color from hue, saturation, and lightness values.
- (Sass::Script::Value::Color) hsla($hue, $saturation, $lightness, $alpha)
Creates a Color from hue, saturation, lightness, and alpha values.
- (Sass::Script::Value::Number) hue($color)
Returns the hue component of a color.
- (Sass::Script::Value::String) ie_hex_str($color)
Converts a color into the format understood by IE filters.
- (Sass::Script::Value::Base) if($condition, $if-true, $if-false)
Returns one of two values, depending on whether or not $condition is true.
- (Sass::Script::Value::Number, Sass::Script::Value::Null) index($list, $value)
Returns the position of a value within a list.
- (Sass::Script::Value::String) inspect($value)
Return a string containing the value as its Sass representation.
- (Sass::Script::Value::Color) invert($color)
Returns the inverse (negative) of a color.
- (Sass::Script::Value::Bool) is_superselector($super, $sub)
Returns whether $super is a superselector of $sub.
- (Sass::Script::Value::List) join($list1, $list2, $separator:auto)
Joins together two lists into one.
- (Sass::Script::Value::Map) keywords($args)
Returns the map of named arguments passed to a function or mixin that takes a variable argument list.
- (Sass::Script::Value::Number) length($list)
Return the length of a list.
- (Sass::Script::Value::Color) lighten($color, $amount)
Makes a color lighter.
- (Sass::Script::Value::Number) lightness($color)   
Returns the lightness component of a color.
- (Sass::Script::Value::String) list_separator($list)
Returns the separator of a list.
- (Sass::Script::Value::Base) map_get($map, $key)   
Returns the value in a map associated with the given key.
- (Sass::Script::Value::Bool) map_has_key($map, $key)
Returns whether a map has a value associated with a given key.
- (List) map_keys($map)
Returns a list of all keys in a map.
- (Sass::Script::Value::Map) map_merge($map1, $map2)
Merges two maps together into a new map.
- (Sass::Script::Value::Map) map_remove($map, $keys...)
Returns a new map with keys removed.
- (List) map_values($map)
Returns a list of all values in a map.
- (Sass::Script::Value::Number) max($numbers...)
Finds the maximum of several numbers.
- (Sass::Script::Value::Number) min($numbers...)
Finds the minimum of several numbers.
- (Sass::Script::Value::Color) mix($color1, $color2, $weight:50%)
Mixes two colors together.
- (Sass::Script::Value::Bool) mixin_exists($name)   
Check whether a mixin with the given name exists.
- (Sass::Script::Value::Base) nth($list, $n)
Gets the nth item in a list.
- (Sass::Script::Value::Color) opacify($color, $amount) (also: #fade_in)
Makes a color more opaque.
- (Sass::Script::Value::Number) opacity($color)
Returns the alpha component (opacity) of a color.
- (Sass::Script::Value::Number) percentage($number)
Converts a unitless number to a percentage.
- (Sass::Script::Value::String) quote($string)
Add quotes to a string if the string isn’t quoted, or returns the same string if it is.
- random(limit = nil)
- (Sass::Script::Value::Number) red($color)
Gets the red component of a color.
- (Sass::Script::Value::Color) rgb($red, $green, $blue)
Creates a Color object from red, green, and blue values.
- rgba(*args)
Creates a Color from red, green, blue, and alpha values.
- (Sass::Script::Value::Number) round($number)
Rounds a number to the nearest whole number.
- (Sass::Script::Value::Color) saturate($color, $amount)
Makes a color more saturated.
- (Sass::Script::Value::Number) saturation($color)
Returns the saturation component of a color.
- (Sass::Script::Value::Color) scale_color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])
Fluidly scales one or more properties of a color.
- (Sass::Script::Value::List) selector_append($selectors...)
Return a new selector with all selectors in $selectors appended one another as though they had been nested in the stylesheet as $selector1 { &$selector2 { ... } }.
- (Sass::Script::Value::List) selector_extend($selector, $extendee, $extender)
Returns a new version of $selector with $extendee extended with $extender.
- (Sass::Script::Value::List) selector_nest($selectors...)
Return a new selector with all selectors in $selectors nested beneath one another as though they had been nested in the stylesheet as $selector1 { $selector2 { ... } }.
- (Sass::Script::Value::List) selector_parse($selector)
Parses a user-provided selector into a list of lists of strings as returned by &.
- (Sass::Script::Value::List) selector_replace($selector, $original, $replacement)
Replaces all instances of $original with $replacement in $selector.
- (Sass::Script::Value::List, Sass::Script::Value::Null) selector_unify($selector1, $selector2)
Unifies two selectors into a single selector that matches only elements matched by both input selectors.
- (Sass::Script::Value::List) set
Return a new list, based on the list provided, but with the nth element changed to the value given.
- (Sass::Script::Value::List) simple_selectors($selector)
Returns the simple selectors that comprise the compound selector $selector.
- (Sass::Script::Value::Number, Sass::Script::Value::Null) str_index($string, $substring)
Returns the index of the first occurrence of $substring in $string.
- (Sass::Script::Value::String) str_insert($string, $insert, $index)
Inserts $insert into $string at $index.
- (Sass::Script::Value::Number) str_length($string)
Returns the number of characters in a string.
- (Sass::Script::Value::String) str_slice($string, $start-at, $end-at:-1)
Extracts a substring from $string.
- (Sass::Script::Value::String) to_lower_case($string)
Convert a string to lower case,.
- (Sass::Script::Value::String) to_upper_case($string)
Converts a string to upper case.
- (Sass::Script::Value::Color) transparentize($color, $amount) (also: #fade_out)
Makes a color more transparent.
- (Sass::Script::Value::String) type_of($value)
Returns the type of a value.
- (Sass::Script::Value::String) unique_id
Returns a unique CSS identifier.
- (Sass::Script::Value::String) unit($number)
Returns the unit(s) associated with a number.
- (Sass::Script::Value::Bool) unitless($number)
Returns whether a number has units.
- (Sass::Script::Value::String) unquote($string)
Removes quotes from a string.
- (Sass::Script::Value::Bool) variable_exists($name)
Check whether a variable with the given name exists in the current scope or in the global scope.
- (Sass::Script::Value::List) zip($lists...)
Combines several lists into a single multidimensional list.
Class Method Details

+ declare(method_name, args, options = {})

Declare a Sass signature for a Ruby-defined function. This includes the names of the arguments, whether the function takes a variable number of arguments, and whether the function takes an arbitrary set of keyword arguments.

It’s not necessary to declare a signature for a function. However, without a signature it won’t support keyword arguments.

A single function can have multiple signatures declared as long as each one takes a different number of arguments. It’s also possible to declare multiple signatures that all take the same number of arguments, but none of them but the first will be used unless the user uses keyword arguments.

Examples:

declare :rgba, [:hex, :alpha]
declare :rgba, [:red, :green, :blue, :alpha]
declare :accepts_anything, [], :var_args => true, :var_kwargs => true
declare :some_func, [:foo, :bar, :baz], :var_kwargs => true
Parameters:
method_name (Symbol) — The name of the method whose signature is being declared.
args (Array<Symbol>) — The names of the arguments for the function signature.
options (Hash) (defaults to: {}) — a customizable set of options
Options Hash (options):
:var_args (Boolean) — default: false — Whether the function accepts a variable number of (unnamed) arguments in addition to the named arguments.
:var_kwargs (Boolean) — default: false — Whether the function accepts other keyword arguments in addition to those in :args. If this is true, the Ruby function will be passed a hash from strings to Values as the last argument. In addition, if this is true and :var_args is not, Sass will ensure that the last argument passed is a hash.
[View source]
+ (Random) random_number_generator

Get Sass’s internal random number generator.

Returns:
(Random)
[View source]
+ (Integer) random_seed=(seed)

Sets the random seed used by Sass’s internal random number generator.

This can be used to ensure consistent random number sequences which allows for consistent results when testing, etc.

Parameters:
seed (Integer)
Returns:
(Integer) — The same seed.
[View source]
+ ({Symbol => Object}?) signature(method_name, arg_arity, kwarg_arity)

Determine the correct signature for the number of arguments passed in for a given function. If no signatures match, the first signature is returned for error messaging.

Parameters:
method_name (Symbol) — The name of the Ruby function to be called.
arg_arity (Fixnum) — The number of unnamed arguments the function was passed.
kwarg_arity (Fixnum) — The number of keyword arguments the function was passed.
Returns:
({Symbol => Object}, nil) — The signature options for the matching signature, or nil if no signatures are declared for this function. See declare.
[View source]
Instance Method Details

- (Sass::Script::Value::Number) abs($number)

Returns the absolute value of a number.

Examples:

abs(10px) => 10px
abs(-10px) => 10px
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if $number isn’t a number
[View source]
- (Sass::Script::Value::Color) adjust_color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])

Increases or decreases one or more properties of a color. This can change the red, green, blue, hue, saturation, value, and alpha properties. The properties are specified as keyword arguments, and are added to or subtracted from the color’s current value for that property.

All properties are optional. You can’t specify both RGB properties ($red, $green, $blue) and HSL properties ($hue, $saturation, $value) at the same time.

Examples:

adjust-color(#102030, $blue: 5) => #102035
adjust-color(#102030, $red: -5, $blue: 5) => #0b2035
adjust-color(hsl(25, 100%, 80%), $lightness: -30%, $alpha: -0.4) => hsla(25, 100%, 50%, 0.6)
Parameters:
$color (Sass::Script::Value::Color)
$red (Sass::Script::Value::Number) — The adjustment to make on the red component, between -255 and 255 inclusive
$green (Sass::Script::Value::Number) — The adjustment to make on the green component, between -255 and 255 inclusive
$blue (Sass::Script::Value::Number) — The adjustment to make on the blue component, between -255 and 255 inclusive
$hue (Sass::Script::Value::Number) — The adjustment to make on the hue component, in degrees
$saturation (Sass::Script::Value::Number) — The adjustment to make on the saturation component, between -100% and 100% inclusive
$lightness (Sass::Script::Value::Number) — The adjustment to make on the lightness component, between -100% and 100% inclusive
$alpha (Sass::Script::Value::Number) — The adjustment to make on the alpha component, between -1 and 1 inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if any parameter is the wrong type or out-of bounds, or if RGB properties and HSL properties are adjusted at the same time
[View source]
- (Sass::Script::Value::Color) adjust_hue($color, $degrees)

Changes the hue of a color. Takes a color and a number of degrees (usually between -360deg and 360deg), and returns a color with the hue rotated along the color wheel by that amount.

Examples:

adjust-hue(hsl(120, 30%, 90%), 60deg) => hsl(180, 30%, 90%)
adjust-hue(hsl(120, 30%, 90%), -60deg) => hsl(60, 30%, 90%)
adjust-hue(#811, 45deg) => #886a11
Parameters:
$color (Sass::Script::Value::Color)
$degrees (Sass::Script::Value::Number) — The number of degrees to rotate the hue
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if either parameter is the wrong type
[View source]
- (Sass::Script::Value::Number) alpha($color)

Returns the alpha component (opacity) of a color. This is 1 unless otherwise specified.

This function also supports the proprietary Microsoft alpha(opacity=20) syntax as a special case.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The alpha component, between 0 and 1
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::List) append($list, $val, $separator:auto)

Appends a single value onto the end of a list.

Unless the $separator argument is passed, if the list had only one item, the resulting list will be space-separated.

Like all list functions, append() returns a new list rather than modifying its argument in place.

Examples:

append(10px 20px, 30px) => 10px 20px 30px
append((blue, red), green) => blue, red, green
append(10px 20px, 30px 40px) => 10px 20px (30px 40px)
append(10px, 20px, comma) => 10px, 20px
append((blue, red), green, space) => blue red green
Parameters:
$list (Sass::Script::Value::Base)
$val (Sass::Script::Value::Base)
$separator (Sass::Script::Value::String) — The list separator to use. If this is comma or space, that separator will be used. If this is auto (the default), the separator is determined as explained above.
Returns:
(Sass::Script::Value::List)
[View source]
- (Sass::Script::Value::Number) blue($color)

Gets the blue component of a color. Calculated from HSL where necessary via this algorithm.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The blue component, between 0 and 255 inclusive
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- call($name, $args...)

Dynamically calls a function. This can call user-defined functions, built-in functions, or plain CSS functions. It will pass along all arguments, including keyword arguments, to the called function.

Examples:

call(rgb, 10, 100, 255) => #0a64ff
call(scale-color, #0a64ff, $lightness: -10%) => #0058ef

$fn: nth;
call($fn, (a b c), 2) => b
Parameters:
$name (String) — The name of the function to call.
[View source]
- (Sass::Script::Value::Number) ceil($number)

Rounds a number up to the next whole number.

Examples:

ceil(10.4px) => 11px
ceil(10.6px) => 11px
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if $number isn’t a number
[View source]
- (Sass::Script::Value::Color) change_color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])

Changes one or more properties of a color. This can change the red, green, blue, hue, saturation, value, and alpha properties. The properties are specified as keyword arguments, and replace the color’s current value for that property.

All properties are optional. You can’t specify both RGB properties ($red, $green, $blue) and HSL properties ($hue, $saturation, $value) at the same time.

Examples:

change-color(#102030, $blue: 5) => #102005
change-color(#102030, $red: 120, $blue: 5) => #782005
change-color(hsl(25, 100%, 80%), $lightness: 40%, $alpha: 0.8) => hsla(25, 100%, 40%, 0.8)
Parameters:
$color (Sass::Script::Value::Color)
$red (Sass::Script::Value::Number) — The new red component for the color, within 0 and 255 inclusive
$green (Sass::Script::Value::Number) — The new green component for the color, within 0 and 255 inclusive
$blue (Sass::Script::Value::Number) — The new blue component for the color, within 0 and 255 inclusive
$hue (Sass::Script::Value::Number) — The new hue component for the color, in degrees
$saturation (Sass::Script::Value::Number) — The new saturation component for the color, between 0% and 100% inclusive
$lightness (Sass::Script::Value::Number) — The new lightness component for the color, within 0% and 100% inclusive
$alpha (Sass::Script::Value::Number) — The new alpha component for the color, within 0 and 1 inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if any parameter is the wrong type or out-of bounds, or if RGB properties and HSL properties are adjusted at the same time
[View source]
- (Sass::Script::Value::Bool) comparable($number1, $number2)

Returns whether two numbers can added, subtracted, or compared.

Examples:

comparable(2px, 1px) => true
comparable(100px, 3em) => false
comparable(10cm, 3mm) => true
Parameters:
$number1 (Sass::Script::Value::Number)
$number2 (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Bool)
Raises:
(ArgumentError) — if either parameter is the wrong type
[View source]
- (Sass::Script::Value::Color) complement($color)

Returns the complement of a color. This is identical to adjust-hue(color, 180deg).

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $color isn’t a color
See Also:
#adjust-hue
[View source]
- (Sass::Script::Value::String) counter($args...)

This function only exists as a workaround for IE7‘s content: counter bug. It works identically to any other plain-CSS function, except it avoids adding spaces between the argument commas.

Examples:

counter(item, ".") => counter(item,".")
Returns:
(Sass::Script::Value::String)
[View source]
- (Sass::Script::Value::String) counters($args...)

This function only exists as a workaround for IE7‘s content: counter bug. It works identically to any other plain-CSS function, except it avoids adding spaces between the argument commas.

Examples:

counters(item, ".") => counters(item,".")
Returns:
(Sass::Script::Value::String)
[View source]
- (Sass::Script::Value::Color) darken($color, $amount)

Makes a color darker. Takes a color and a number between 0% and 100%, and returns a color with the lightness decreased by that amount.

Examples:

darken(hsl(25, 100%, 80%), 30%) => hsl(25, 100%, 50%)
darken(#800, 20%) => #200
Parameters:
$color (Sass::Script::Value::Color)
$amount (Sass::Script::Value::Number) — The amount to decrease the lightness by, between 0% and 100%
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $amount is out of bounds, or either parameter is the wrong type
See Also:
#lighten
[View source]
- (Sass::Script::Value::Color) desaturate($color, $amount)

Makes a color less saturated. Takes a color and a number between 0% and 100%, and returns a color with the saturation decreased by that value.

Examples:

desaturate(hsl(120, 30%, 90%), 20%) => hsl(120, 10%, 90%)
desaturate(#855, 20%) => #726b6b
Parameters:
$color (Sass::Script::Value::Color)
$amount (Sass::Script::Value::Number) — The amount to decrease the saturation by, between 0% and 100%
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $amount is out of bounds, or either parameter is the wrong type
See Also:
#saturate
[View source]
- (Sass::Script::Value::Bool) feature_exists($feature)

Returns whether a feature exists in the current Sass runtime.

The following features are supported:

global-variable-shadowing indicates that a local variable will shadow a global variable unless !global is used.
extend-selector-pseudoclass indicates that @extend will reach into selector pseudoclasses like :not.
units-level-3 indicates full support for unit arithmetic using units defined in the Values and Units Level 3 spec.
at-error indicates that the Sass @error directive is supported.
Examples:

feature-exists(some-feature-that-exists) => true
feature-exists(what-is-this-i-dont-know) => false
Parameters:
$feature (Sass::Script::Value::String) — The name of the feature
Returns:
(Sass::Script::Value::Bool) — Whether the feature is supported in this version of Sass
Raises:
(ArgumentError) — if $feature isn’t a string
[View source]
- (Sass::Script::Value::Number) floor($number)

Rounds a number down to the previous whole number.

Examples:

floor(10.4px) => 10px
floor(10.6px) => 10px
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if $number isn’t a number
[View source]
- (Sass::Script::Value::Bool) function_exists($name)

Check whether a function with the given name exists.

Examples:

function-exists(lighten) => true

@function myfunc { @return "something"; }
function-exists(myfunc) => true
Parameters:
name (Sass::Script::Value::String) — The name of the function to check.
Returns:
(Sass::Script::Value::Bool) — Whether the function is defined.
[View source]
- (Sass::Script::Value::Bool) global_variable_exists($name)

Check whether a variable with the given name exists in the global scope (at the top level of the file).

Examples:

$a-false-value: false;
global-variable-exists(a-false-value) => true

.foo {
  $some-var: false;
  @if global-variable-exists(some-var) { /* false, doesn't run */ }
}
Parameters:
$name (Sass::Script::Value::String) — The name of the variable to check. The name should not include the $.
Returns:
(Sass::Script::Value::Bool) — Whether the variable is defined in the global scope.
[View source]
- (Sass::Script::Value::Color) grayscale($color)

Converts a color to grayscale. This is identical to desaturate(color, 100%).

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $color isn’t a color
See Also:
#desaturate
[View source]
- (Sass::Script::Value::Number) green($color)

Gets the green component of a color. Calculated from HSL where necessary via this algorithm.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The green component, between 0 and 255 inclusive
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::Color) hsl($hue, $saturation, $lightness)

Creates a Color from hue, saturation, and lightness values. Uses the algorithm from the CSS3 spec.

Parameters:
$hue (Sass::Script::Value::Number) — The hue of the color. Should be between 0 and 360 degrees, inclusive
$saturation (Sass::Script::Value::Number) — The saturation of the color. Must be between 0% and 100%, inclusive
$lightness (Sass::Script::Value::Number) — The lightness of the color. Must be between 0% and 100%, inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $saturation or $lightness are out of bounds or any parameter is the wrong type
See Also:
#hsla
[View source]
- (Sass::Script::Value::Color) hsla($hue, $saturation, $lightness, $alpha)

Creates a Color from hue, saturation, lightness, and alpha values. Uses the algorithm from the CSS3 spec.

Parameters:
$hue (Sass::Script::Value::Number) — The hue of the color. Should be between 0 and 360 degrees, inclusive
$saturation (Sass::Script::Value::Number) — The saturation of the color. Must be between 0% and 100%, inclusive
$lightness (Sass::Script::Value::Number) — The lightness of the color. Must be between 0% and 100%, inclusive
$alpha (Sass::Script::Value::Number) — The opacity of the color. Must be between 0 and 1, inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $saturation, $lightness, or $alpha are out of bounds or any parameter is the wrong type
See Also:
#hsl
[View source]
- (Sass::Script::Value::Number) hue($color)

Returns the hue component of a color. See the CSS3 HSL specification. Calculated from RGB where necessary via this algorithm.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The hue component, between 0deg and 360deg
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::String) ie_hex_str($color)

Converts a color into the format understood by IE filters.

Examples:

ie-hex-str(#abc) => #FFAABBCC
ie-hex-str(#3322BB) => #FF3322BB
ie-hex-str(rgba(0, 255, 0, 0.5)) => #8000FF00
Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::String) — The IE-formatted string representation of the color
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::Base) if($condition, $if-true, $if-false)

Returns one of two values, depending on whether or not $condition is true. Just like in @if, all values other than false and null are considered to be true.

Examples:

if(true, 1px, 2px) => 1px
if(false, 1px, 2px) => 2px
Parameters:
$condition (Sass::Script::Value::Base) — Whether the $if-true or $if-false will be returned
$if-true (Sass::Script::Tree::Node)
$if-false (Sass::Script::Tree::Node)
Returns:
(Sass::Script::Value::Base) — $if-true or $if-false
[View source]
- (Sass::Script::Value::Number, Sass::Script::Value::Null) index($list, $value)

Returns the position of a value within a list. If the value isn’t found, returns null instead.

Note that unlike some languages, the first item in a Sass list is number 1, the second number 2, and so forth.

This can return the position of a pair in a map as well.

Examples:

index(1px solid red, solid) => 2
index(1px solid red, dashed) => null
index((width: 10px, height: 20px), (height 20px)) => 2
Parameters:
$list (Sass::Script::Value::Base)
$value (Sass::Script::Value::Base)
Returns:
(Sass::Script::Value::Number, Sass::Script::Value::Null) —  The 1-based index of $value in $list, or null
[View source]
- (Sass::Script::Value::String) inspect($value)

Return a string containing the value as its Sass representation.

Parameters:
$value (Sass::Script::Value::Base) — The value to inspect.
Returns:
(Sass::Script::Value::String) — A representation of the value as it would be written in Sass.
[View source]
- (Sass::Script::Value::Color) invert($color)

Returns the inverse (negative) of a color. The red, green, and blue values are inverted, while the opacity is left alone.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::Bool) is_superselector($super, $sub)

Returns whether $super is a superselector of $sub. This means that $super matches all the elements that $sub matches, as well as possibly additional elements. In general, simpler selectors tend to be superselectors of more complex oned.

Examples:

is-superselector(".foo", ".foo.bar") => true
is-superselector(".foo.bar", ".foo") => false
is-superselector(".bar", ".foo .bar") => true
is-superselector(".foo .bar", ".bar") => false
Returns Whether $selector1 is a superselector of $selector2.

Parameters:
$super (Sass::Script::Value::String, Sass::Script::Value::List) — The potential superselector. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
$sub (Sass::Script::Value::String, Sass::Script::Value::List) — The potential subselector. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::Bool) — Whether $selector1 is a superselector of $selector2.
[View source]
- (Sass::Script::Value::List) join($list1, $list2, $separator:auto)

Joins together two lists into one.

Unless $separator is passed, if one list is comma-separated and one is space-separated, the first parameter’s separator is used for the resulting list. If both lists have fewer than two items, spaces are used for the resulting list.

Like all list functions, join() returns a new list rather than modifying its arguments in place.

Examples:

join(10px 20px, 30px 40px) => 10px 20px 30px 40px
join((blue, red), (#abc, #def)) => blue, red, #abc, #def
join(10px, 20px) => 10px 20px
join(10px, 20px, comma) => 10px, 20px
join((blue, red), (#abc, #def), space) => blue red #abc #def
Parameters:
$list1 (Sass::Script::Value::Base)
$list2 (Sass::Script::Value::Base)
$separator (Sass::Script::Value::String) — The list separator to use. If this is comma or space, that separator will be used. If this is auto (the default), the separator is determined as explained above.
Returns:
(Sass::Script::Value::List)
[View source]
- (Sass::Script::Value::Map) keywords($args)

Returns the map of named arguments passed to a function or mixin that takes a variable argument list. The argument names are strings, and they do not contain the leading $.

Examples:

@mixin foo($args...) {
  @debug keywords($args); //=> (arg1: val, arg2: val)
}

@include foo($arg1: val, $arg2: val);
Parameters:
$args (Sass::Script::Value::ArgList)
Returns:
(Sass::Script::Value::Map)
Raises:
(ArgumentError) — if $args isn’t a variable argument list
[View source]
- (Sass::Script::Value::Number) length($list)

Return the length of a list.

This can return the number of pairs in a map as well.

Examples:

length(10px) => 1
length(10px 20px 30px) => 3
length((width: 10px, height: 20px)) => 2
Parameters:
$list (Sass::Script::Value::Base)
Returns:
(Sass::Script::Value::Number)
[View source]
- (Sass::Script::Value::Color) lighten($color, $amount)

Makes a color lighter. Takes a color and a number between 0% and 100%, and returns a color with the lightness increased by that amount.

Examples:

lighten(hsl(0, 0%, 0%), 30%) => hsl(0, 0, 30)
lighten(#800, 20%) => #e00
Parameters:
$color (Sass::Script::Value::Color)
$amount (Sass::Script::Value::Number) — The amount to increase the lightness by, between 0% and 100%
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $amount is out of bounds, or either parameter is the wrong type
See Also:
#darken
[View source]
- (Sass::Script::Value::Number) lightness($color)

Returns the lightness component of a color. See the CSS3 HSL specification. Calculated from RGB where necessary via this algorithm.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The lightness component, between 0% and 100%
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::String) list_separator($list)

Returns the separator of a list. If the list doesn’t have a separator due to having fewer than two elements, returns space.

Examples:

list-separator(1px 2px 3px) => space
list-separator(1px, 2px, 3px) => comma
list-separator('foo') => space
Parameters:
$list (Sass::Script::Value::Base)
Returns:
(Sass::Script::Value::String) — comma or space
[View source]
- (Sass::Script::Value::Base) map_get($map, $key)

Returns the value in a map associated with the given key. If the map doesn’t have such a key, returns null.

Examples:

map-get(("foo": 1, "bar": 2), "foo") => 1
map-get(("foo": 1, "bar": 2), "bar") => 2
map-get(("foo": 1, "bar": 2), "baz") => null
Parameters:
$map (Sass::Script::Value::Map)
$key (Sass::Script::Value::Base)
Returns:
(Sass::Script::Value::Base) — The value indexed by $key, or null if the map doesn’t contain the given key
Raises:
(ArgumentError) — if $map is not a map
[View source]
- (Sass::Script::Value::Bool) map_has_key($map, $key)

Returns whether a map has a value associated with a given key.

Examples:

map-has-key(("foo": 1, "bar": 2), "foo") => true
map-has-key(("foo": 1, "bar": 2), "baz") => false
Parameters:
$map (Sass::Script::Value::Map)
$key (Sass::Script::Value::Base)
Returns:
(Sass::Script::Value::Bool)
Raises:
(ArgumentError) — if $map is not a map
[View source]
- (List) map_keys($map)

Returns a list of all keys in a map.

Examples:

map-keys(("foo": 1, "bar": 2)) => "foo", "bar"
Parameters:
$map (Map)
Returns:
(List) — the list of keys, comma-separated
Raises:
(ArgumentError) — if $map is not a map
[View source]
- (Sass::Script::Value::Map) map_merge($map1, $map2)

Merges two maps together into a new map. Keys in $map2 will take precedence over keys in $map1.

This is the best way to add new values to a map.

All keys in the returned map that also appear in $map1 will have the same order as in $map1. New keys from $map2 will be placed at the end of the map.

Like all map functions, map-merge() returns a new map rather than modifying its arguments in place.

Examples:

map-merge(("foo": 1), ("bar": 2)) => ("foo": 1, "bar": 2)
map-merge(("foo": 1, "bar": 2), ("bar": 3)) => ("foo": 1, "bar": 3)
Parameters:
$map1 (Sass::Script::Value::Map)
$map2 (Sass::Script::Value::Map)
Returns:
(Sass::Script::Value::Map)
Raises:
(ArgumentError) — if either parameter is not a map
[View source]
- (Sass::Script::Value::Map) map_remove($map, $keys...)

Returns a new map with keys removed.

Like all map functions, map-merge() returns a new map rather than modifying its arguments in place.

Examples:

map-remove(("foo": 1, "bar": 2), "bar") => ("foo": 1)
map-remove(("foo": 1, "bar": 2, "baz": 3), "bar", "baz") => ("foo": 1)
map-remove(("foo": 1, "bar": 2), "baz") => ("foo": 1, "bar": 2)
Parameters:
$map (Sass::Script::Value::Map)
$keys ([Sass::Script::Value::Base])
Returns:
(Sass::Script::Value::Map)
Raises:
(ArgumentError) — if $map is not a map
[View source]
- (List) map_values($map)

Returns a list of all values in a map. This list may include duplicate values, if multiple keys have the same value.

Examples:

map-values(("foo": 1, "bar": 2)) => 1, 2
map-values(("foo": 1, "bar": 2, "baz": 1)) => 1, 2, 1
Parameters:
$map (Map)
Returns:
(List) — the list of values, comma-separated
Raises:
(ArgumentError) — if $map is not a map
[View source]
- (Sass::Script::Value::Number) max($numbers...)

Finds the maximum of several numbers. This function takes any number of arguments.

Examples:

max(1px, 4px) => 4px
max(5em, 3em, 4em) => 5em
Parameters:
$numbers ([Sass::Script::Value::Number])
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if any argument isn’t a number, or if not all of the arguments have comparable units
[View source]
- (Sass::Script::Value::Number) min($numbers...)

Finds the minimum of several numbers. This function takes any number of arguments.

Examples:

min(1px, 4px) => 1px
min(5em, 3em, 4em) => 3em
Parameters:
$numbers ([Sass::Script::Value::Number])
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if any argument isn’t a number, or if not all of the arguments have comparable units
[View source]
- (Sass::Script::Value::Color) mix($color1, $color2, $weight:50%)

Mixes two colors together. Specifically, takes the average of each of the RGB components, optionally weighted by the given percentage. The opacity of the colors is also considered when weighting the components.

The weight specifies the amount of the first color that should be included in the returned color. The default, 50%, means that half the first color and half the second color should be used. 25% means that a quarter of the first color and three quarters of the second color should be used.

Examples:

mix(#f00, #00f) => #7f007f
mix(#f00, #00f, 25%) => #3f00bf
mix(rgba(255, 0, 0, 0.5), #00f) => rgba(63, 0, 191, 0.75)
Parameters:
$color1 (Sass::Script::Value::Color)
$color2 (Sass::Script::Value::Color)
$weight (Sass::Script::Value::Number) — The relative weight of each color. Closer to 0% gives more weight to $color1, closer to 100% gives more weight to $color2
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $weight is out of bounds or any parameter is the wrong type
[View source]
- (Sass::Script::Value::Bool) mixin_exists($name)

Check whether a mixin with the given name exists.

Examples:

mixin-exists(nonexistent) => false

@mixin red-text { color: red; }
mixin-exists(red-text) => true
Parameters:
name (Sass::Script::Value::String) — The name of the mixin to check.
Returns:
(Sass::Script::Value::Bool) — Whether the mixin is defined.
[View source]
- (Sass::Script::Value::Base) nth($list, $n)

Gets the nth item in a list.

Note that unlike some languages, the first item in a Sass list is number 1, the second number 2, and so forth.

This can return the nth pair in a map as well.

Negative index values address elements in reverse order, starting with the last element in the list.

Examples:

nth(10px 20px 30px, 1) => 10px
nth((Helvetica, Arial, sans-serif), 3) => sans-serif
nth((width: 10px, length: 20px), 2) => length, 20px
Parameters:
$list (Sass::Script::Value::Base)
$n (Sass::Script::Value::Number) — The index of the item to get. Negative indices count from the end of the list.
Returns:
(Sass::Script::Value::Base)
Raises:
(ArgumentError) — if $n isn’t an integer between 1 and the length of $list
[View source]
- (Sass::Script::Value::Color) opacify($color, $amount)
Also known as: fade_in
Makes a color more opaque. Takes a color and a number between 0 and 1, and returns a color with the opacity increased by that amount.

Examples:

opacify(rgba(0, 0, 0, 0.5), 0.1) => rgba(0, 0, 0, 0.6)
opacify(rgba(0, 0, 17, 0.8), 0.2) => #001
Parameters:
$color (Sass::Script::Value::Color)
$amount (Sass::Script::Value::Number) — The amount to increase the opacity by, between 0 and 1
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $amount is out of bounds, or either parameter is the wrong type
See Also:
#transparentize
[View source]
- (Sass::Script::Value::Number) opacity($color)

Returns the alpha component (opacity) of a color. This is 1 unless otherwise specified.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The alpha component, between 0 and 1
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::Number) percentage($number) 

Converts a unitless number to a percentage.

Examples:

percentage(0.2) => 20%
percentage(100px / 50px) => 200%
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if $number isn’t a unitless number
[View source]
- (Sass::Script::Value::String) quote($string)

Add quotes to a string if the string isn’t quoted, or returns the same string if it is.

Examples:

quote("foo") => "foo"
quote(foo) => "foo"
Parameters:
$string (Sass::Script::Value::String)
Returns:
(Sass::Script::Value::String)
Raises:
(ArgumentError) — if $string isn’t a string
See Also:
#unquote
[View source]
- (Sass::Script::Value::Number) random
- (Sass::Script::Value::Number) random($limit)
Overloads:
- (Sass::Script::Value::Number) random
- (Sass::Script::Value::Number) random($limit)
Return a decimal between 0 and 1, inclusive of 0 but not 1.

Returns:
(Sass::Script::Value::Number) — A decimal value.
Return an integer between 1 and $limit, inclusive of both 1 and $limit.

Parameters:
$limit (Sass::Script::Value::Number) — The maximum of the random integer to be returned, a positive integer.
Returns:
(Sass::Script::Value::Number) — An integer.
Raises:
(ArgumentError) — if the $limit is not 1 or greater
[View source]
- (Sass::Script::Value::Number) red($color)

Gets the red component of a color. Calculated from HSL where necessary via this algorithm.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The red component, between 0 and 255 inclusive
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::Color) rgb($red, $green, $blue)

Creates a Color object from red, green, and blue values.

Parameters:
$red (Sass::Script::Value::Number) — The amount of red in the color. Must be between 0 and 255 inclusive, or between 0% and 100% inclusive
$green (Sass::Script::Value::Number) — The amount of green in the color. Must be between 0 and 255 inclusive, or between 0% and 100% inclusive
$blue (Sass::Script::Value::Number) — The amount of blue in the color. Must be between 0 and 255 inclusive, or between 0% and 100% inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if any parameter is the wrong type or out of bounds
See Also:
#rgba
[View source]
- (Sass::Script::Value::Color) rgba($red, $green, $blue, $alpha)
- (Sass::Script::Value::Color) rgba($color, $alpha) 
Creates a Color from red, green, blue, and alpha values.

Overloads:
- (Sass::Script::Value::Color) rgba($red, $green, $blue, $alpha)
- (Sass::Script::Value::Color) rgba($color, $alpha)
Parameters:
$red (Sass::Script::Value::Number) — The amount of red in the color. Must be between 0 and 255 inclusive or 0% and 100% inclusive
$green (Sass::Script::Value::Number) — The amount of green in the color. Must be between 0 and 255 inclusive or 0% and 100% inclusive
$blue (Sass::Script::Value::Number) — The amount of blue in the color. Must be between 0 and 255 inclusive or 0% and 100% inclusive
$alpha (Sass::Script::Value::Number) — The opacity of the color. Must be between 0 and 1 inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if any parameter is the wrong type or out of bounds
Sets the opacity of an existing color.

Examples:

rgba(#102030, 0.5) => rgba(16, 32, 48, 0.5)
rgba(blue, 0.2)    => rgba(0, 0, 255, 0.2)
Parameters:
$color (Sass::Script::Value::Color) — The color whose opacity will be changed.
$alpha (Sass::Script::Value::Number) — The new opacity of the color. Must be between 0 and 1 inclusive
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $alpha is out of bounds or either parameter is the wrong type
See Also:
#rgb
[View source]
- (Sass::Script::Value::Number) round($number)

Rounds a number to the nearest whole number.

Examples:

round(10.4px) => 10px
round(10.6px) => 11px
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if $number isn’t a number
[View source]
- (Sass::Script::Value::Color) saturate($color, $amount)

Makes a color more saturated. Takes a color and a number between 0% and 100%, and returns a color with the saturation increased by that amount.

Examples:

saturate(hsl(120, 30%, 90%), 20%) => hsl(120, 50%, 90%)
saturate(#855, 20%) => #9e3f3f
Parameters:
$color (Sass::Script::Value::Color)
$amount (Sass::Script::Value::Number) — The amount to increase the saturation by, between 0% and 100%
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $amount is out of bounds, or either parameter is the wrong type
See Also:
#desaturate
[View source]
- (Sass::Script::Value::Number) saturation($color)

Returns the saturation component of a color. See the CSS3 HSL specification. Calculated from RGB where necessary via this algorithm.

Parameters:
$color (Sass::Script::Value::Color)
Returns:
(Sass::Script::Value::Number) — The saturation component, between 0% and 100%
Raises:
(ArgumentError) — if $color isn’t a color
[View source]
- (Sass::Script::Value::Color) scale_color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])

Fluidly scales one or more properties of a color. Unlike adjust-color, which changes a color’s properties by fixed amounts, scale-color fluidly changes them based on how high or low they already are. That means that lightening an already-light color with scale-color won’t change the lightness much, but lightening a dark color by the same amount will change it more dramatically. This has the benefit of making scale-color($color, ...) have a similar effect regardless of what $color is.

For example, the lightness of a color can be anywhere between 0% and 100%. If scale-color($color, $lightness: 40%) is called, the resulting color’s lightness will be 40% of the way between its original lightness and 100. If scale-color($color, $lightness: -40%) is called instead, the lightness will be 40% of the way between the original and 0.

This can change the red, green, blue, saturation, value, and alpha properties. The properties are specified as keyword arguments. All arguments should be percentages between 0% and 100%.

All properties are optional. You can’t specify both RGB properties ($red, $green, $blue) and HSL properties ($saturation, $value) at the same time.

Examples:

scale-color(hsl(120, 70%, 80%), $lightness: 50%) => hsl(120, 70%, 90%)
scale-color(rgb(200, 150%, 170%), $green: -40%, $blue: 70%) => rgb(200, 90, 229)
scale-color(hsl(200, 70%, 80%), $saturation: -90%, $alpha: -30%) => hsla(200, 7%, 80%, 0.7)
Parameters:
$color (Sass::Script::Value::Color)
$red (Sass::Script::Value::Number)
$green (Sass::Script::Value::Number)
$blue (Sass::Script::Value::Number)
$saturation (Sass::Script::Value::Number)
$lightness (Sass::Script::Value::Number)
$alpha (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if any parameter is the wrong type or out-of bounds, or if RGB properties and HSL properties are adjusted at the same time
[View source]
- (Sass::Script::Value::List) selector_append($selectors...)

Return a new selector with all selectors in $selectors appended one another as though they had been nested in the stylesheet as $selector1 { &$selector2 { ... } }.

Examples:

selector-append(".foo", ".bar", ".baz") => .foo.bar.baz
selector-append(".a .foo", ".b .bar") => "a .foo.b .bar"
selector-append(".foo", "-suffix") => ".foo-suffix"
Returns A list of lists of strings representing the result of appending $selectors. This is in the same format as a selector returned by &.

Parameters:
$selectors ([Sass::Script::Value::String, Sass::Script::Value::List]) — The selectors to append. At least one selector must be passed. Each of these can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::List) — A list of lists of strings representing the result of appending $selectors. This is in the same format as a selector returned by &.
Raises:
(ArgumentError) — if a selector could not be appended.
[View source]
- (Sass::Script::Value::List) selector_extend($selector, $extendee, $extender)

Returns a new version of $selector with $extendee extended with $extender. This works just like the result of

$selector { ... }
$extender { @extend $extendee }
Examples:

selector-extend(".a .b", ".b", ".foo .bar") => .a .b, .a .foo .bar, .foo .a .bar
Returns A list of lists of strings representing the result of the extension. This is in the same format as a selector returned by &.

Parameters:
$selector (Sass::Script::Value::String, Sass::Script::Value::List) — The selector within which $extendee is extended with $extender. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
$extendee (Sass::Script::Value::String, Sass::Script::Value::List) — The selector being extended. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
$extender (Sass::Script::Value::String, Sass::Script::Value::List) — The selector being injected into $selector. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::List) — A list of lists of strings representing the result of the extension. This is in the same format as a selector returned by &.
Raises:
(ArgumentError) — if the extension fails
[View source]
- (Sass::Script::Value::List) selector_nest($selectors...)

Return a new selector with all selectors in $selectors nested beneath one another as though they had been nested in the stylesheet as $selector1 { $selector2 { ... } }.

Unlike most selector functions, selector-nest allows the parent selector & to be used in any selector but the first.

Examples:

selector-nest(".foo", ".bar", ".baz") => .foo .bar .baz
selector-nest(".a .foo", ".b .bar") => .a .foo .b .bar
selector-nest(".foo", "&.bar") => .foo.bar
Returns A list of lists of strings representing the result of nesting $selectors. This is in the same format as a selector returned by &.

Parameters:
$selectors ([Sass::Script::Value::String, Sass::Script::Value::List]) — The selectors to nest. At least one selector must be passed. Each of these can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::List) — A list of lists of strings representing the result of nesting $selectors. This is in the same format as a selector returned by &.
[View source]
- (Sass::Script::Value::List) selector_parse($selector)

Parses a user-provided selector into a list of lists of strings as returned by &.

Examples:

selector-parse(".foo .bar, .baz .bang") => ('.foo' '.bar', '.baz' '.bang')
Returns A list of lists of strings representing $selector. This is in the same format as a selector returned by &.

Parameters:
$selector (Sass::Script::Value::String, Sass::Script::Value::List) — The selector to parse. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::List) — A list of lists of strings representing $selector. This is in the same format as a selector returned by &.
[View source]
- (Sass::Script::Value::List) selector_replace($selector, $original, $replacement)

Replaces all instances of $original with $replacement in $selector

This works by using @extend and throwing away the original selector. This means that it can be used to do very advanced replacements; see the examples below.

Examples:

selector-replace(".foo .bar", ".bar", ".baz") => ".foo .baz"
selector-replace(".foo.bar.baz", ".foo.baz", ".qux") => ".bar.qux"
Returns A list of lists of strings representing the result of the extension. This is in the same format as a selector returned by &.

Parameters:
$selector (Sass::Script::Value::String, Sass::Script::Value::List) — The selector within which $original is replaced with $replacement. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
$original (Sass::Script::Value::String, Sass::Script::Value::List) — The selector being replaced. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
$replacement (Sass::Script::Value::String, Sass::Script::Value::List) — The selector that $original is being replaced with. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::List) — A list of lists of strings representing the result of the extension. This is in the same format as a selector returned by &.
Raises:
(ArgumentError) — if the replacement fails
[View source]
- (Sass::Script::Value::List, Sass::Script::Value::Null) selector_unify($selector1, $selector2)

Unifies two selectors into a single selector that matches only elements matched by both input selectors. Returns null if there is no such selector.

Like the selector unification done for @extend, this doesn’t guarantee that the output selector will match all elements matched by both input selectors. For example, if .a .b is unified with .x .y, .a .x .b.y, .x .a .b.y will be returned, but .a.x .b.y will not. This avoids exponential output size while matching all elements that are likely to exist in practice.

Examples:

selector-unify(".a", ".b") => .a.b
selector-unify(".a .b", ".x .y") => .a .x .b.y, .x .a .b.y
selector-unify(".a.b", ".b.c") => .a.b.c
selector-unify("#a", "#b") => null
Returns A list of lists of strings representing the result of the unification, or null if no unification exists. This is in the same format as a selector returned by &.

Parameters:
$selector1 (Sass::Script::Value::String, Sass::Script::Value::List) — The first selector to be unified. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
$selector2 (Sass::Script::Value::String, Sass::Script::Value::List) — The second selector to be unified. This can be either a string, a list of strings, or a list of lists of strings as returned by &.
Returns:
(Sass::Script::Value::List, Sass::Script::Value::Null) — A list of lists of strings representing the result of the unification, or null if no unification exists. This is in the same format as a selector returned by &.
[View source]
- (Sass::Script::Value::List) set

Return a new list, based on the list provided, but with the nth element changed to the value given.

Note that unlike some languages, the first item in a Sass list is number 1, the second number 2, and so forth.

Negative index values address elements in reverse order, starting with the last element in the list.

Examples:

set-nth($list: 10px 20px 30px, $n: 2, $value: -20px) => 10px -20px 30px
Parameters:
$list (Sass::Script::Value::Base) — The list that will be copied, having the element at index $n changed.
$n (Sass::Script::Value::Number) — The index of the item to set. Negative indices count from the end of the list.
$value (Sass::Script::Value::Base) — The new value at index $n.
Returns:
(Sass::Script::Value::List)
Raises:
(ArgumentError) — if $n isn’t an integer between 1 and the length of $list
[View source]
- (Sass::Script::Value::List) simple_selectors($selector)

Returns the simple selectors that comprise the compound selector $selector.

Note that $selector must be a compound selector. That means it cannot contain commas or spaces. It also means that unlike other selector functions, this takes only strings, not lists.

Examples:

simple-selectors(".foo.bar") => ".foo", ".bar"
simple-selectors(".foo.bar.baz") => ".foo", ".bar", ".baz"
Returns A list of simple selectors in the compound selector.

Parameters:
$selector (Sass::Script::Value::String) — The compound selector whose simple selectors will be extracted.
Returns:
(Sass::Script::Value::List) — A list of simple selectors in the compound selector.
[View source]
- (Sass::Script::Value::Number, Sass::Script::Value::Null) str_index($string, $substring)

Returns the index of the first occurrence of $substring in $string. If there is no such occurrence, returns null.

Note that unlike some languages, the first character in a Sass string is number 1, the second number 2, and so forth.

Examples:

str-index(abcd, a)  => 1
str-index(abcd, ab) => 1
str-index(abcd, X)  => null
str-index(abcd, c)  => 3
Parameters:
$string (Sass::Script::Value::String)
$substring (Sass::Script::Value::String)
Returns:
(Sass::Script::Value::Number, Sass::Script::Value::Null)
Raises:
(ArgumentError) — if any parameter is the wrong type
[View source]
- (Sass::Script::Value::String) str_insert($string, $insert, $index)

Inserts $insert into $string at $index.

Note that unlike some languages, the first character in a Sass string is number 1, the second number 2, and so forth.

Examples:

str-insert("abcd", "X", 1) => "Xabcd"
str-insert("abcd", "X", 4) => "abcXd"
str-insert("abcd", "X", 5) => "abcdX"
Parameters:
$string (Sass::Script::Value::String)
$insert (Sass::Script::Value::String)
$index (Sass::Script::Value::Number) — The position at which $insert will be inserted. Negative indices count from the end of $string. An index that’s outside the bounds of the string will insert $insert at the front or back of the string
Returns:
(Sass::Script::Value::String) — The result string. This will be quoted if and only if $string was quoted
Raises:
(ArgumentError) — if any parameter is the wrong type
[View source]
- (Sass::Script::Value::Number) str_length($string) 

Returns the number of characters in a string.

Examples:

str-length("foo") => 3
Parameters:
$string (Sass::Script::Value::String)
Returns:
(Sass::Script::Value::Number)
Raises:
(ArgumentError) — if $string isn’t a string
[View source]
- (Sass::Script::Value::String) str_slice($string, $start-at, $end-at:-1)

Extracts a substring from $string. The substring will begin at index $start-at and ends at index $end-at.

Note that unlike some languages, the first character in a Sass string is number 1, the second number 2, and so forth.

Examples:

str-slice("abcd", 2, 3)   => "bc"
str-slice("abcd", 2)      => "bcd"
str-slice("abcd", -3, -2) => "bc"
str-slice("abcd", 2, -2)  => "bc"
Returns The substring. This will be quoted if and only if $string was quoted

Parameters:
$start-at (Sass::Script::Value::Number) — The index of the first character of the substring. If this is negative, it counts from the end of $string
$end-before (Sass::Script::Value::Number) — The index of the last character of the substring. If this is negative, it counts from the end of $string. Defaults to -1
Returns:
(Sass::Script::Value::String) — The substring. This will be quoted if and only if $string was quoted
Raises:
(ArgumentError) — if any parameter is the wrong type
[View source]
- (Sass::Script::Value::String) to_lower_case($string)

Convert a string to lower case,

Examples:

to-lower-case(ABCD) => abcd
Parameters:
$string (Sass::Script::Value::String)
Returns:
(Sass::Script::Value::String)
Raises:
(ArgumentError) — if $string isn’t a string
[View source]
- (Sass::Script::Value::String) to_upper_case($string)

Converts a string to upper case.

Examples:

to-upper-case(abcd) => ABCD
Parameters:
$string (Sass::Script::Value::String)
Returns:
(Sass::Script::Value::String)
Raises:
(ArgumentError) — if $string isn’t a string
[View source]
- (Sass::Script::Value::Color) transparentize($color, $amount)
Also known as: fade_out
Makes a color more transparent. Takes a color and a number between 0 and 1, and returns a color with the opacity decreased by that amount.

Examples:

transparentize(rgba(0, 0, 0, 0.5), 0.1) => rgba(0, 0, 0, 0.4)
transparentize(rgba(0, 0, 0, 0.8), 0.2) => rgba(0, 0, 0, 0.6)
Parameters:
$color (Sass::Script::Value::Color)
$amount (Sass::Script::Value::Number) — The amount to decrease the opacity by, between 0 and 1
Returns:
(Sass::Script::Value::Color)
Raises:
(ArgumentError) — if $amount is out of bounds, or either parameter is the wrong type
See Also:
#opacify
[View source]
- (Sass::Script::Value::String) type_of($value)

Returns the type of a value.

Examples:

type-of(100px)  => number
type-of(asdf)   => string
type-of("asdf") => string
type-of(true)   => bool
type-of(#fff)   => color
type-of(blue)   => color
Parameters:
$value (Sass::Script::Value::Base) — The value to inspect
Returns:
(Sass::Script::Value::String) — The unquoted string name of the value’s type
[View source]
- (Sass::Script::Value::String) unique_id

Returns a unique CSS identifier. The identifier is returned as an unquoted string. The identifier returned is only guaranteed to be unique within the scope of a single Sass run.

Returns:
(Sass::Script::Value::String)
[View source]
- (Sass::Script::Value::String) unit($number)

Returns the unit(s) associated with a number. Complex units are sorted in alphabetical order by numerator and denominator.

Examples:

unit(100) => ""
unit(100px) => "px"
unit(3em) => "em"
unit(10px * 5em) => "em*px"
unit(10px * 5em / 30cm / 1rem) => "em*px/cm*rem"
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::String) — The unit(s) of the number, as a quoted string
Raises:
(ArgumentError) — if $number isn’t a number
[View source]
- (Sass::Script::Value::Bool) unitless($number)

Returns whether a number has units.

Examples:

unitless(100) => true
unitless(100px) => false
Parameters:
$number (Sass::Script::Value::Number)
Returns:
(Sass::Script::Value::Bool)
Raises:
(ArgumentError) — if $number isn’t a number
[View source]
- (Sass::Script::Value::String) unquote($string)

Removes quotes from a string. If the string is already unquoted, this will return it unmodified.

Examples:

unquote("foo") => foo
unquote(foo) => foo
Parameters:
$string (Sass::Script::Value::String)
Returns:
(Sass::Script::Value::String)
Raises:
(ArgumentError) — if $string isn’t a string
See Also:
#quote
[View source]
- (Sass::Script::Value::Bool) variable_exists($name)

Check whether a variable with the given name exists in the current scope or in the global scope.

Examples:

$a-false-value: false;
variable-exists(a-false-value) => true

variable-exists(nonexistent) => false
Parameters:
$name (Sass::Script::Value::String) — The name of the variable to check. The name should not include the $.
Returns:
(Sass::Script::Value::Bool) — Whether the variable is defined in the current scope.
[View source]
- (Sass::Script::Value::List) zip($lists...)

Combines several lists into a single multidimensional list. The nth value of the resulting list is a space separated list of the source lists’ nth values.

The length of the resulting list is the length of the shortest list.

Examples:

zip(1px 1px 3px, solid dashed solid, red green blue)
=> 1px solid red, 1px dashed green, 3px solid blue
Parameters:
$lists ([Sass::Script::Value::Base])
Returns:
(Sass::Script::Value::List)
[View source]
Generated on Mon Mar 28 16:42:35 2016 by yard 0.8.7.6 (ruby-2.2.3).

