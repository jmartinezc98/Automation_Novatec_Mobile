// En el archivo ReadExcelData.js (habilidad)
const Excel = require('exceljs');

class ReadExcelData {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getOperandsAndOperator() {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(this.filePath);
        const worksheet = workbook.getWorksheet('Operaciones');

        const firstRow = worksheet.getRow(2);
        const firstOperand = firstRow.getCell('A').value; 
        const secondOperand = firstRow.getCell('B').value;

        return { firstOperand, secondOperand};
    }
}

module.exports = ReadExcelData;
