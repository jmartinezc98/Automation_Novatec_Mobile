const { element } = require('serenity-js/lib/screenplay-protractor');

class CalculatorScreen {
    static addOperatorButton() {
        return element(by.id('com.duy.calc.casio:id/btn_add'));
    }

    static subtractOperatorButton() {
        return element(by.id('com.duy.calc.casio:id/btn_sub'));
    }

    static multiplyOperatorButton() {
        return element(by.id('com.duy.calc.casio:id/btn_multiply'));
    }

}

module.exports = CalculatorScreen;
