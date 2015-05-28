define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var SaltHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = { start: 
       [ { caseInsensitive: true,
           token: 'keyword.operator',
           regex: '\\b(?:!|&&|->|:|;|<->|accepton|after|always|and|assert|before|between|else|equals|event|eventually|excl|exclusive|F|false|finally|from|G|globally|holding|if|implies|incl|inclusive|never|next|nextn|not|occurring|opt|optional|or|prop(?:erty|osition)|R|rejecton|releases|req|required|then|true|U|until|upto|W|weak|X|\\|\\|)\\b' } ] }
    
    this.normalizeRules();
};

oop.inherits(SaltHighlightRules, TextHighlightRules);

exports.SaltHighlightRules = SaltHighlightRules;
});