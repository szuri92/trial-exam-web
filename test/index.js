'use strict';

var test = require('tape');
var dcrypt = require('./../decrypt.js')

test('decrypt abc by 1', function (t) {
    var actual = dcrypt.decrypt('abc', 1);
    var expected = 'bcd';
    t.equal(actual, expected);
    t.end();
});

test('decrypt simple text', function (t) {
    var actual = dcrypt.decrypt('bcd', -1);
    var expected = 'abc';
    t.equal(actual, expected);
    t.end();
});

test('negative overflow', function (t) {
    var actual = dcrypt.decrypt('abc', -1);
    var expected = 'zab';
    t.equal(actual, expected);
    t.end();
});

test('positive overflow', function (t) {
    var actual = dcrypt.decrypt('xyz', 1);
    var expected = 'yza';
    t.equal(actual, expected);
    t.end();
});
