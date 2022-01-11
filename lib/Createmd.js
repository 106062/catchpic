"use strict";

const fs = require("fs");

const seporter = "---\n";
const format = "|--|--|--|\n";

// print title
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


// print file src
async function PrintPage(folder, file, name, page) {
    try {
        let str = "";
        str += `## ${page}\n`;
        for (let i = 1; i <= 12; i++) {
            let src = `../../${folder}/${name}-${page}-${i}.jpg`;
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
