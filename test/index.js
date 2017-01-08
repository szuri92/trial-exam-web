'use strict';

var test = require('tape');
var dcrypt = require('./../decrypt.js')

test('decrypt simple text', function (t) {
    var actual = decrypter('bcd');
    var expected = 'abc';
    t.equal(actual, expected);
    t.end();
});
