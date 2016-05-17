var labelModule = require('./label/label'),
    inputModule = require('./input/input');

module.exports = angular
    .module('writeModule', ['labelModule', 'inputModule']);