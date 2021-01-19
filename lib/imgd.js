"use strict"

const fs = require("fs");
const fetch = require("node-fetch");

async function download(url, name) {
	const response = await fetch(url);
	const buffer = await response.buffer();
	fs.writeFile(`./img/${name}`, buffer, () =>
		console.log(`From ${url} \nGET `, name, " ...✅")
	);
}

module.exports = {
	download,
};
