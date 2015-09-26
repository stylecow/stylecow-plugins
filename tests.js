"use strict";

var plugins = require('./index');

plugins.getAll().forEach(function (plugin) {
    describe(plugin, function () {
        require('stylecow-plugin-' + plugin + '/tests/cases');
    });
});
