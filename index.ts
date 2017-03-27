// Created by trevor on 3/26/17.
import * as e from 'express';
import * as fs from 'fs';
import * as process from 'process';

let express = e();

express.get('', function (req, res) {
	let version = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8'))['version'];
	res.json({message: 'here...', version: version, cwd: process.cwd()});
});

express.listen(3000);