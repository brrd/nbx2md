#!/usr/bin/env node

const fs = require("fs").promises;
const nbx2md = require("./index.js");

const args = process.argv.slice(2);

if (args.length !== 2) {
	console.log("Usage: nbx2md path/to/input.nbx path/to/output.md");
	return;
} 

const input = args[0];
const output = args[1];

async function convert(input, output) {
	const data = await fs.readFile(input, "utf8");
	const obj = JSON.parse(data);
	const md = nbx2md(obj);
	await fs.writeFile(output, md, "utf8");
}

convert(input, output);