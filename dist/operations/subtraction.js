"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpSub = void 0;
const prompt_1 = __importDefault(require("prompt"));
const config_1 = require("../config");
class OpSub {
    constructor() {
        this.term1 = 0;
        this.term2 = 0;
    }
    async collectOperands(lastAnswer) {
        const resp = await prompt_1.default.get([
            {
                name: 'term1',
                description: 'Termo 1',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            },
            {
                name: 'term2',
                description: 'Termo 2',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            }
        ]);
        this.term1 = (resp["term1"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["term1"]);
        this.term2 = (resp["term2"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["term2"]);
    }
    execute() {
        return this.term1 - this.term2;
    }
}
exports.OpSub = OpSub;
