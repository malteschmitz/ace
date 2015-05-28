define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var SaltHighlightRules = require("./salt_highlight_rules").SaltHighlightRules;
// TODO: pick appropriate fold mode
var FoldMode = require("./folding/coffee").FoldMode;

var Mode = function() {
    this.HighlightRules = SaltHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
       
    this.lineCommentStart = ["--"];
    this.blockComment = [];
    
    this.$id = "ace/mode/salt";
}).call(Mode.prototype);

exports.Mode = Mode;
});