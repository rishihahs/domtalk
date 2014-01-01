domtalk
========

Generate CSS Selectors for DOM elements. 

For example, this selector can be sent over the wire, and a library like jQuery/Sizzle or Qwery (or just `document#querySelector`) can then be used to get the element from the generated selector.

[![browser support](https://ci.testling.com/rishihahs/domtalk.png)](https://ci.testling.com/rishihahs/domtalk)

methods
--------

    var domtalk = require('domtalk')
    
The `domtalk` object has the following function:

    domtalk.getSelectorFromElement(el)
    
`el` is a DOM element

example
--------

    var domtalk = require('domtalk');
    var el = ...
    var selector = domtalk.getSelectorFromElement(el);
    
    console.log(selector); // "body *:nth-child(1) *:nth-child(3) *:nth-child(3)"
    

license
-------

MIT, See LICENSE