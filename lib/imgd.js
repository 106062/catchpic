"use strict"

const fs = require("fs");
const fetch = require("node-fetch");

async function download(url, name, folder) {
	const response = await fetch(url);
	const buffer = await response.buffer();
	fs.writeFile(`./${folder}/${name}`, buffer, () =>
		console.log(`From ${url} \nGET `, name, " ...✅")
	);
}

module.exports = {
	download,
};
