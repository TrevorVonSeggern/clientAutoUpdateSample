"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Created by trevor on 3/26/17.
var e = require("express");
var fs = require("fs");
var express = e();
express.get('', function (req, res) {
    var version = JSON.parse(fs.readFileSync('./package.json', 'utf8'))['version'];
    res.json({ message: 'here...', version: version });
});
express.listen(3000);
//# sourceMappingURL=index.js.map