/**
    @overview This is just an example.
    @module plugins/json
    @author ChenJing
 */
'use strict';

var logger = require('jsdoc/util/logger');

exports.handlers = {
    newDoclet: function(e) {
        // if (typeof e.doclet.description === 'string') {
        //     if (e.doclet.params)
        //      logger.warn(e.doclet.params[0])
        // }
    }
};

exports.defineTags = function(dictionary) {
    dictionary.defineTag("json", {
        mustHaveValue: true,
        canHaveType: true,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            // logger.warn(tag);
            // logger.warn(tag.value.type.names[0]);
            if (doclet.json === undefined) {
                doclet.json = [tag.value];
            } else {
                doclet.json.push(tag.value);
            }
        }
    });
};
