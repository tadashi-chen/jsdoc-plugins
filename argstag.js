/**
    @overview This is just an example.
    @module plugins/args
    @author ChenJing
 */
'use strict';

var logger = require('jsdoc/util/logger');

exports.handlers = {
    newDoclet: function(e) {
        // if (typeof e.doclet.description === 'string') {
        //      logger.warn(e)
        // }
    }
};

exports.defineTags = function(dictionary) {
    dictionary.defineTag("args", {
        mustHaveValue: true,
        canHaveType: true,
        canHaveName: true,
        onTagged: function(doclet, tag) {
            // logger.warn(tag);
            // logger.warn(tag.value.type.names[0]);
            if (doclet.args === undefined) {
                doclet.args = [tag.value];
            } else {
                doclet.args.push(tag.value);
            }
        }
    });
};
