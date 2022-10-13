"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const operations_1 = require("./operations");
class Calculator {
    constructor() {
        this.history = [];
        this.operation = new operations_1.Nop();
    }
    buildHistoryPosString(padding, pos) {
        let charArr = [];
        for (let i = 0; i < padding - String(pos).length; i++)
            charArr.push(' ');
        return charArr.join("") + String(pos);
    }
    setOperation(operation) {
        this.operation = operation;
    }
    async collectOperands() {
        const lastAnswer = this.history[this.history.length - 1];
        await this.operation.collectOperands(lastAnswer || 0);
    }
    calculate() {
        const result = this.operation.execute();
        this.history.push(result);
        return result;
    }
    showHistory() {
        console.log("\n| Histórico:");
        if (this.history.length > 0) {
            const padding = String(this.history.length).length + 1;
            let count = 0;
            for (let item of this.history) {
                console.log(`| ${this.buildHistoryPosString(padding, ++count)} ->    ${item}`);
            }
        }
        else {
            console.log("| --- Empty ---");
        }
    }
}
exports.Calculator = Calculator;
