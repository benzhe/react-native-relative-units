'use strict';

const Dimensions = require('Dimensions');

const dimensions = Dimensions.get('window');

function Units(baseSize) {
    this.vw = dimensions.width / 100;
    this.vh = dimensions.height / 100;
    this.bp = (dimensions.width / baseSize).toFixed(2) * 1;
    this.fr = (num) => Math.floor(num);
    this.cl = (num) => Math.ceil(num);
    this.r = (num) => Math.round(num);
}

module.exports = function(baseSize) {
    return new Units(baseSize);
};
