"use strict";

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
        allPlugins = Object.keys(require('./package.json').dependencies).map(value => value.slice(16));
    }

    return allPlugins;
}

module.exports = Plugins;