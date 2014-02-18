jquery-active-nav-toggler
=========================

This very simple plugin helps setting an `active` class to your
navigation components to the last clicked element.

# Usage
## Basic (boostrap compliant)

```` javascript
$("ul").activeNavToggler();
````

## Options

`activeClass`: the class to be applied to currently active children (default: `"active"`).

`childSelector`: the child selector that toggles activation (default: `"li"`).

`action`: Ignored unless `"disable"` is given (default: `"enable"`).

```` javascript
// Toggle 'current' class when '.child' element are clicked
$(".container").activeNavToggler({
  childSelector: '.child',
  activeClass: 'current'
});

// Disable plugin on '.container'
$(".container").activeNavToggler({
  action: 'disable'
});
````

# Installation

Insert `dist/jquery.active-nav-toggler.js` (or:
`dist/jquery.active-nav-toggler.min.js`) to your project.

Alternatively, and when this plugin will be published, you'll be able to use 
bower: 

`bower install jquery-active-nav-toggler`
