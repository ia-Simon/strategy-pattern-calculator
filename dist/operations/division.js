"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpDiv = void 0;
const prompt_1 = __importDefault(require("prompt"));
const config_1 = require("../config");
class OpDiv {
    constructor() {
        this.dividend = 0;
        this.divisor = 1;
    }
    async collectOperands(lastAnswer) {
        const resp = await prompt_1.default.get([
            {
                name: 'dividend',
                description: 'Dividendo',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            },
            {
                name: 'divisor',
                description: 'Divisor',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            }
        ]);
        this.dividend = (resp["dividend"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["dividend"]);
        this.divisor = (resp["divisor"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["divisor"]);
    }
    execute() {
        if (this.divisor === 0) {
            throw new Error("divisor não pode ser zero");
        }
        return this.dividend / this.divisor;
    }
}
exports.OpDiv = OpDiv;
