const { Actor, BrowseTheWeb } = require('serenity-js');
const { protractor } = require('protractor');
const { PerformOperation } = require('../tasks/OperationTasks');
const { Ensure, equals } = require('serenity-js/lib/screenplay-protractor');
const ReadExcelData = require('../abilities/ReadExcelData');
const { CalculatorScreen } = require('../screen/CalculatorScreen');

describe('Subtraction Operation', () => {
    let actor;

    beforeEach(() => {
        actor = Actor.named('User').whoCan(BrowseTheWeb.using(protractor.browser), new ReadExcelData('../Excel/Operandos.xls.xlsx'));
    });

    it('should perform subtraction correctly', async () => {
        const { firstOperand, secondOperand } = await actor.abilityTo(ReadExcelData).getOperands();
        
        
        const operator = await actor.abilityTo(BrowseTheWeb).locate(CalculatorScreen.subtractOperatorButton()).getText();
        
        await actor.attemptsTo(
            PerformOperation.of(operator).withOperands(firstOperand, secondOperand)
        );

        return actor.attemptsTo(
            Ensure.that(CalculatorScreen.result(), equals(eval(`${firstOperand} ${operator} ${secondOperand}`)))
        );
    });
});

