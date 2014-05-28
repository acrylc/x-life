x-life
================

See the [component page](http://polymerlabs.github.io/untitled-element) for more information.

##Install

Install using <a href='http://bower.io/' target='_blank'>Bower</a> : 

```sh
bower install x-life --save
```

## Usage

<b> \<x-life\> </b> is a web component that renders a Conway's Game of Life instance.

1. Import polymer:
	
	```html
	<script src="bower_components/platform/platform.js"> </script>
	```

2. Import x-life:
	```html
	<link rel='import' href="bower_components/x-life/dist/x-life.html"> 
	```

3. Enjoy!
	```html
	 <x-life> </x-life>
	```

## \<x-life\>

### Options

Attribute  | Options        | Default             | Description
---        | ---         | ---                 | ---
`width` | *int*   | 500             | Specifies the width of the GOL grid.
`height` | *int*   | 500            | Specifies the height of the GOL grid.
`backgroundColor` | *string*   | `white`             | Specifies the background color, in rgb or hex.
`cellColor` | *string*   | `black`             | Specifies the cell color, in rgb or hex.
`cellSize`     | *float*    |  2   | Specifies the pixel size of a cell.


