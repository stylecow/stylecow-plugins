"use strict";

let plugins = require('./index');
let assert = require('assert');

plugins.getAll().forEach(function (plugin) {
    describe(plugin, function () {
        require('stylecow-plugin-' + plugin + '/tests/cases');
    });
});

describe('Plugins load', function () {
    it('Must return all plugins', function() {
        assert.deepEqual([
                "base64",
                "calc",
                "color",
                "custom-media",
                "custom-selector",
                "extend",
                "fixes",
                "flex",
                "import",
                "matches",
                "media-queries",
                "msfilter-background-alpha",
                "msfilter-linear-gradient",
                "msfilter-transform",
                "nested-rules",
                "prefixes",
                "rem",
                "variables",
                "webkit-gradient"
            ],
            plugins.getAll()
        );
    });
});
