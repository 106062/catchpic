"use strict";
const fs = require("fs");

const  CreateTitle = require("./lib/Createmd.js").CreateTitle;
const PrintPage = require("./lib/Createmd.js").PrintPage;

const config = require("./config/sample.json");

const folder = config.name + config.start + "-" + config.end;
const name = config.name;
const end_page = config.end;

function main() {
    try {
        if (!fs.existsSync(`./file/${folder}`)) {
            fs.mkdirSync(`./file/${folder}`);
        }

        for (let start = 0; start < end_page;) {
            let file = `${name}-${start + 1}-${start + 10}.md`;
            CreateTitle(file, name, (start + 1), (start + 10));
            for (let j = (start + 1); j <= (start + 10); j++) {
                PrintPage(folder, file, name, j);
            }
            start += 10;
        }
    } catch (e) {
        console.log(e);
    }
}

main();
