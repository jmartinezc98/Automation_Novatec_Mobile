// const { Task } = require('serenity-js');
// const { Enter, Click } = require('serenity-js/lib/screenplay-protractor');
// const { CalculatorScreen } = require('../screen/CalculatorScreen');

// class PerformOperation {
//     static of(operation) {
//         return new PerformOperation(operation);
//     }

//     performAs(actor) {
//         switch (this.operation) {
//             case 'addition':
//                 return actor.attemptsTo(
//                     Click.on(CalculatorScreen.addButton())
//                 );
//             // Implementar casos para resta y multiplicación
//             default:
//                 throw new Error(`Operación Matemática '${this.operation}' No Soportada`);
//         }
//     }

//     constructor(operation, operands) {
//         this.operation = operation;
//         this.operands = operands;
//     }
// }

// module.exports.PerformOperation = PerformOperation;