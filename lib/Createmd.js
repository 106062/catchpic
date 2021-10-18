"use strict";

const fs = require("fs");

const path = require("../config/sample.json").folder;
const seporter = "---\n";
const format = "|--|--|--|\n";

function CreateTitle(file, title, page_s, page_e) {
    try {
        fs.writeFileSync(`./file/${file}`, `# ${title}\n`, "utf-8");
        for (let i = page_s; i <= page_e; i++) {
            fs.appendFileSync(`./file/${file}`, `- [${i}](#${i})\n`);
        }
        fs.appendFileSync(`./file/${file}`, seporter);
    } catch (e) {
        console.log("e" + e);
    }
}

async function PrintPage(file, name, page) {
    try {
        let str = "";
        str += `## ${page}\n`;
        //![]()
        for (let i = 1; i <= 12; i++) {
            let src = `../../${path}${name}-${page}-${i}.jpg`;
            if ((i % 3) === 0) {
                str += `|![${i}](${src})|\n`;
                if (i === 3) {
                    str += format;
                }
            } else {
                str += `|![${i}](${src})`;
            }
        }
        str += seporter;
        fs.appendFileSync(`./file/${file}`, str);
        console.log(`page: `, page, "...✅");
    } catch (e) {
        console.log("print error ", e);
    }
}

module.exports = {
    CreateTitle,
    PrintPage
};
