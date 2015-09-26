"use strict";

var fs = require('fs');

var Plugins = function (plugins) {
    if (arguments.length === 0) {
        plugins = Plugins.getAll();
    }

    return function (tasks) {
        if (plugins) {
            plugins.forEach(plugin => tasks.use(require('stylecow-plugin-' + plugin)));
        }
    }
};

var allPlugins;

Plugins.getAll = function () {
    if (!allPlugins) {
        allPlugins = fs.readdirSync(__dirname + '/node_modules')
            .filter(value => value.slice(0, 16) === 'stylecow-plugin-')
            .map(value => value.slice(16));
    }

    return allPlugins;
}

module.exports = Plugins;