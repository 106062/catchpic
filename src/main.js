"use strict";

require("json5/lib/register");

const fs = require("fs");
const config = require("../config/config.json5");
const downloading = require("../lib/imgd").download;

async function main() {
	const folder = config.name;

	if (!fs.existsSync(`./${folder}`)) {
		fs.mkdirSync(`./${folder}`);
	}

	for (let i = config.page_S; i <= config.page_E; i++) { 
		for (let j = 1; j <= config.img_size; j++) {
			const url = config.main_url + config.name + "/" + i + "/" + config.name + "-" + j + ".jpg";
			const name = config.name + "-" + i + "-" + j + ".jpg";
			try {
				await downloading(url, name);
			} catch (err) {
				console.log(err);
			}
		}
	}
}

main();
