"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Created by trevor on 3/26/17.
var e = require("express");
var fs = require("fs");
var process = require("process");
var express = e();
express.get('', function (req, res) {
    var version = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8'))['version'];
    res.json({ message: 'here...', version: version, cwd: process.cwd() });
});
express.listen(3000);
//# sourceMappingURL=index.js.map