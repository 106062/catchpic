"use strict";
const fs = require("fs");

let  CreateTitle = require("./lib/Createmd.js").CreateTitle;
const PrintPage = require("./lib/Createmd.js").PrintPage;

const config = require("./config/sample.json");

const name = config.name;
const end_page = config.end;

function main() {
    try {
        let _file = "";
        for (let i = 0; i < end_page;) {
            let file = `${name}-${i + 1}-${i + 10}.md`;
            _file = file;
            CreateTitle(file, name, (i + 1), (i + 10));
            for (let j = (i + 1); j <= (i + 10); j++) {
                PrintPage(_file, name, j);
            }
            i += 10;
        }
    } catch (e) {
        console.log(e);
    }
}

main();