'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var dimensions = Dimensions.get('window');

function Units(baseSize) {
    this.vw = dimensions.width / 100;
    this.vh = dimensions.height / 100;
    this.bp = dimensions.width / baseSize;
}

module.exports = function(baseSize) {
    if(!baseSize) 
        return console.error("Missing baseSize");
    else 
        return new Units(baseSize);
}