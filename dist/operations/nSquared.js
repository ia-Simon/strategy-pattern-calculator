"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpPow2 = void 0;
const prompt_1 = __importDefault(require("prompt"));
const config_1 = require("../config");
class OpPow2 {
    constructor() {
        this.base = 0;
    }
    async collectOperands(lastAnswer) {
        const resp = await prompt_1.default.get([
            {
                name: 'base',
                description: 'Base',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            }
        ]);
        this.base = (resp["base"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["base"]);
    }
    execute() {
        return Math.pow(this.base, 2);
    }
}
exports.OpPow2 = OpPow2;
