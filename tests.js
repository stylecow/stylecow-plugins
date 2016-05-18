"use strict";

let plugins = require('./index');
let assert = require('assert');

plugins.getAll().forEach(function (plugin) {
    if (plugin.endsWith('-loader')) {
        return;
    }
    describe(plugin, function () {
        require('stylecow-plugin-' + plugin + '/tests/cases');
    });
});

describe('Plugins load', function () {
    it('Must return all plugins', function() {
        assert.deepEqual([
                "base64",
                "bower-loader",
                "calc",
                "color",
                "custom-media",
                "custom-selector",
                "extend",
                "fixes",
                "flex",
                "font-variant",
                "import",
                "matches",
                "media-queries",
                "msfilter-background-alpha",
                "msfilter-linear-gradient",
                "msfilter-transform",
                "nested-rules",
                "npm-loader",
                "prefixes",
                "rem",
                "variables",
                "webkit-gradient"
            ],
            plugins.getAll()
        );
    });
});
