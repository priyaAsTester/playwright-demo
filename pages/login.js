// utils/readfile.js
const XLSX  = require('xlsx');
const path  = require('path');

class ReadExcel {
    /**
     * @param {string} filename  – path relative to this module
     */
    constructor(filename) {
        this.path = path.join(__dirname, filename);
    }

    /**
     * read the workbook, grab the given sheet and
     * return an array of objects (one per row).
     * @param {string} [sheetName='Login']
     * @returns {Object[]}
     */
    readfile(sheetName = 'Login') {
        const workbook = XLSX.readFile(this.path);
        const sheet    = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(sheet);
    }
}

module.exports = ReadExcel;