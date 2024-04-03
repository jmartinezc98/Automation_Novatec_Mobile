const { Actor, BrowseTheWeb } = require('serenity-js');
const { protractor } = require('protractor');
const { PerformOperation } = require('../tasks/OperationTasks');
const { Ensure, equals } = require('serenity-js/lib/screenplay-protractor');
const ReadExcelData = require('../abilities/ReadExcelData');
const { CalculatorScreen } = require('../screen/CalculatorScreen');

describe('Math Operations', () => {
    let actor;

    beforeEach(() => {
        actor = Actor.named('User').whoCan(BrowseTheWeb.using(protractor.browser), new ReadExcelData('../Excel/Operandos.xls.xlsx'));
    });

    it('should perform addition correctly', async () => {
        const { firstOperand, secondOperand } = await actor.abilityTo(ReadExcelData).getOperands();

        const operator = await actor.abilityTo(BrowseTheWeb).locate(CalculatorScreen.addOperator()).getText();

        return actor.attemptsTo(
            PerformOperation.of(operator).withOperands(firstOperand, secondOperand),
            Ensure.that(CalculatorScreen.result(), equals(eval(`${firstOperand} ${operator} ${secondOperand}`)))
        );
    });
});
