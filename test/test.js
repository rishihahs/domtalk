var test = require('tape');
var html = require('./html');

var domtalk = require('../');

html(); // Set up mock html page;

test('css selector from DOM element', function(t) {
    t.plan(1);

    var el = document.getElementsByTagName('a')[2];
    var selector = '#container *:nth-child(1) *:nth-child(1) *:nth-child(3) *:nth-child(1)';

    t.equal(domtalk.getSelectorFromElement(el), selector);
});

test('DOM element from css selector', function(t) {
    t.plan(1);

    var el = document.getElementsByTagName('a')[2];
    var selector = 'body *:nth-child(1) *:nth-child(1) *:nth-child(1) *:nth-child(3) *:nth-child(1)';

    t.equal(domtalk.getElementFromSelector(selector), el);
});