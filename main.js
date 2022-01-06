"use strict";
const fs = require("fs");

const  CreateTitle = require("./lib/Createmd.js").CreateTitle;
const PrintPage = require("./lib/Createmd.js").PrintPage;

const config = require("./config/sample.json");

const name = config.name;
const end_page = config.end;

function main() {
    try {
        let _file = "";
        for (let start = 0; start < end_page;) {
            let file = `${name}-${start + 1}-${start + 10}.md`;
            _file = file;
            console.log(start);
            CreateTitle(file, name, (start + 1), (start + 10));
            for (let j = (start + 1); j <= (start + 10); j++) {
                PrintPage(_file, name, j);
            }
            start += 10;
        }
    } catch (e) {
        console.log(e);
    }
}

main();
