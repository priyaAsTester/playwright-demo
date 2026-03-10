const XLSX = require('xlsx');
const path = require('path');

/**
 * ReadExcel class to read and parse Excel files
 * Returns data as JSON objects
 */
class ReadExcel {
    /**
     * Constructor - initializes the Excel file path
     * @param {string} filename - name of the xlsx file
     */
    constructor(filename) {
        this.path = path.join(__dirname, filename);
        this.workbook = null;
    }

    /**
     * Read Excel file and return data from a specific sheet
     * @param {string} [sheetName='Login'] - name of the sheet to read
     * @returns {Array} Array of objects with row data
     */
    readfile(sheetName = 'Login') {
        try {
            this.workbook = XLSX.readFile(this.path);
            const sheet = this.workbook.Sheets[sheetName];
            
            if (!sheet) {
                throw new Error(`Sheet "${sheetName}" not found in workbook`);
            }
            
            const data = XLSX.utils.sheet_to_json(sheet);
            return data;
        } catch (error) {
            console.error(`Error reading Excel file: ${error.message}`);
            throw error;
        }
    }

    /**
     * Get all sheet names from the workbook
     * @returns {Array} Array of sheet names
     */
    getSheetNames() {
        if (!this.workbook) {
            this.workbook = XLSX.readFile(this.path);
        }
        return this.workbook.SheetNames;
    }

    /**
     * Read and return data from all sheets
     * @returns {Object} Object with sheet names as keys and data arrays as values
     */
    readAllSheets() {
        try {
            this.workbook = XLSX.readFile(this.path);
            const allData = {};
            
            this.workbook.SheetNames.forEach(sheetName => {
                const sheet = this.workbook.Sheets[sheetName];
                allData[sheetName] = XLSX.utils.sheet_to_json(sheet);
            });
            
            return allData;
        } catch (error) {
            console.error(`Error reading Excel file: ${error.message}`);
            throw error;
        }
    }
}

module.exports = ReadExcel;