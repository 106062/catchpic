"use strict";

require("json5/lib/register");

const fs = require("fs");
const config = require("../config/config.json5");
const downloading = require("../lib/imgd").download;

async function main() {
	for (let count = 0; count < config.filelist.length; count++) { 
		const folder = config.filelist[count].name + config.filelist[count].page_S + "-" +
						config.filelist[count].page_E + config.filelist[count].desc;
		const start_P = config.filelist[count].page_S;
		const end_P = config.filelist[count].page_E;
		const name = config.filelist[count].name;

		if (!fs.existsSync(`./${folder}`)) {
			fs.mkdirSync(`./${folder}`);
		}

		for (let i = start_P; i <= end_P; i++) {
			for (let j = 1; j <= config.img_size; j++) {
				const url = config.main_url + name + "/" + i + "/" + name + "-" + j + ".jpg";
                //const url = config.main_url + "cute-" + name + "-" + j + ".jpg";
				const _name = name + "-" + i + "-" + j + ".jpg";
                
				try {
					await downloading(url, _name, folder);
				} catch (err) {
					console.log(err);
				}
			}
		}
	}
}

main();

