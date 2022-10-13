"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpLogN = void 0;
const prompt_1 = __importDefault(require("prompt"));
const config_1 = require("../config");
class OpLogN {
    constructor() {
        this.antiLog = 0;
    }
    async collectOperands(lastAnswer) {
        const resp = await prompt_1.default.get([
            {
                name: 'antiLog',
                description: 'Anti Log',
                required: true,
                pattern: config_1.Configuration.operand_validation_regex,
                message: config_1.Configuration.operand_validation_error_msg,
            }
        ]);
        this.antiLog = (resp["antiLog"] === config_1.Configuration.last_answer_keyword) ? lastAnswer : parseFloat(resp["antiLog"]);
    }
    execute() {
        return Math.log(this.antiLog);
    }
}
exports.OpLogN = OpLogN;
